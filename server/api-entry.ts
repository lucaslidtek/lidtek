import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "../routes";
import { serveStatic } from "../static";
import { createServer } from "http";

const app = express();
const httpServer = createServer(app);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

(async () => {
    await registerRoutes(httpServer, app);

    app.use((err: any, _req: Request, res: Response, next: NextFunction) => {
        const status = err.status || err.statusCode || 500;
        const message = err.message || "Internal Server Error";
        if (res.headersSent) return next(err);
        res.status(status).json({ message });
    });

    if (process.env.NODE_ENV === "production") {
        serveStatic(app);
    }

    // Vercel handles the listening, but we export the app
})();

export default app;
