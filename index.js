import express from "express";

const app = express();
const PORT = 4001;

app.get("/", (req, res) => res.send("11Alert start!"));
app.get("/test", (req, res) => res.send("test page"));

app.listen(PORT, () => console.log(`open server - PORT:${PORT}`));
