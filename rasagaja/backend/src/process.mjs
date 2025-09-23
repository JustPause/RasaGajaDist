import process from 'process';
import { downloads } from "./index.js";

export function initProcess() {
    process.on('SIGINT', () => {
        console.log('Caught SIGINT (Ctrl+C), cleaning up...');
        downloads.clearAll();
        process.exit(0); // exit gracefully
    });

    process.on('SIGTERM', () => {
        console.log('Caught SIGTERM, cleaning up...');
        downloads.clearAll();
        process.exit(0);
    });

    process.on('uncaughtException', (err) => {
        console.error('Uncaught exception:', err);
        downloads.clearAll();
        process.exit(1); // exit with error
    });

    process.on('unhandledRejection', (reason, promise) => {
        console.error('Unhandled Rejection at:', promise, 'reason:', reason);
        downloads.clearAll();
        process.exit(1);
    });
}