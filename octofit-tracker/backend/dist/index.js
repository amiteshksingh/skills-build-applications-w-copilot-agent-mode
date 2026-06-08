"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./config/database");
const server_1 = require("./server");
const start = async () => {
    try {
        const dbUri = await (0, database_1.connectToDatabase)();
        console.log(`Connected to MongoDB at ${dbUri}`);
        server_1.app.listen(server_1.PORT, () => {
            console.log(`Backend listening on ${server_1.API_BASE_URL}`);
        });
    }
    catch (error) {
        console.error('Failed to start backend:', error);
        process.exit(1);
    }
};
void start();
