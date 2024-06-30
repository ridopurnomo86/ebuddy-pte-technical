import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";

export const requireAuth = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        if (!token)
            return res.status(401).json({
                type: "Unauthorized",
                message: "Unauthorized",
            });
        return null;
    } catch (err) {
        next(createHttpError(401));
    }
};
