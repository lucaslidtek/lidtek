import express from "express";
import path from "path";
import fs from "fs";
import app from "./api-entry";

const fallbackApp = express();

// Serve static files from the build output directory
const distPath = path.resolve(process.cwd(), "dist", "public");

fallbackApp.use(express.static(distPath));

// For any other route, serve index.html (SPA fallback)
fallbackApp.get("*", (req, res, next) => {
    // If it's an API route, let the main app handle it
    if (req.url.startsWith("/api/")) {
        return app(req, res, next);
    }

    const indexPath = path.resolve(distPath, "index.html");
    if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
    } else {
        // If build hasn't run or path is wrong, fall back to the main app
        app(req, res, next);
    }
});

export default fallbackApp;
