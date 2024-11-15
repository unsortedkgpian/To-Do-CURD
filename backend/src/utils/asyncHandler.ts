const asyncHandler = (requestHandler: any) => {
    return (req: any, res: any, next: any) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    };
};

/*const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fin(req, res, next);
  } catch (error) {
    res.status(err.code || 500).json({
      success: false,
      message: err.message,
    });
  }
};
*/
export { asyncHandler };
