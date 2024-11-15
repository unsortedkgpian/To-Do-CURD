class ApiError extends Error {
    statusCode: number;
    data: any | null;
    success: boolean;
    error: any[];

    constructor(
        statusCode: number,
        message: string = "Something went wrong",
        errors: any[] = [],
        stack: string = ""
    ) {
        super(message);

        // TypeScript's built-in Error class expects the message to be passed to the constructor.
        this.statusCode = statusCode;
        this.data = null;
        this.success = false;
        this.error = errors;

        // Ensuring we call the Error constructor
        if (stack) {
            this.stack = stack;
        } else {
            // If no custom stack is provided, capture the stack trace
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError };
