"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
class ApiError extends Error {
    constructor(statusCode, message = "Something went wrong", errors = [], stack = "") {
        super(message);
        // TypeScript's built-in Error class expects the message to be passed to the constructor.
        this.statusCode = statusCode;
        this.data = null;
        this.success = false;
        this.error = errors;
        // Ensuring we call the Error constructor
        if (stack) {
            this.stack = stack;
        }
        else {
            // If no custom stack is provided, capture the stack trace
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
exports.ApiError = ApiError;
