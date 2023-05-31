import express from "express";
import cors from "cors";
import helmet from "helmet";
import { createServer } from "http";

const app = express();
app.use(helmet());
app.use(express.json());
app.use(cors({ credentials: true, origin: true}));

import UserRouter from "./routers/UserRouter.js";
app.use(UserRouter);

const httpServer = createServer(app);






const PORT = process.env.PORT || 8081;
const server = httpServer.listen(PORT, (error) => {
    if (error) {
        console.lolg(error);
    }
    console.log("Server is running on port", server.address().port);
})