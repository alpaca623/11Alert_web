import app from "./app";
import dotenv from "dotenv";

import "./db";

dotenv.config();

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`✅ open server - PORT:${PORT}`));
