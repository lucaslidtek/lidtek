import fs from "fs";

let content = fs.readFileSync(".replit", "utf-8");

// Remove run command
content = content.replace(/^run\s*=\s*".*?"\s*$/m, "");

// Remove [[ports]] blocks
content = content.replace(/\[\[ports\]\][\s\S]*?(?=\[|$)/g, "\n");

// Write back
fs.writeFileSync(".replit", content.trim() + "\n");
console.log("Updated .replit");
