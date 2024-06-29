import { NextFunction, Request, Response } from "express";
import {
    checkUserEmail,
    getUsers,
    setUsers,
} from "../repository/userCollection";
import schema from "../validation/User/updateUserSchema";

export const index = async (req: Request, res: Response): Promise<void> => {
    res.send("EBUDDY PTE. LTD. Technical Test");
};

export const fetchUser = async (
    req: Request,
    res: Response,
): Promise<Response<any, Record<string, any>>> => {
    const users = await getUsers();

    return res.status(200).json(users);
};

export const updateUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<Response<any, Record<string, any>>> => {
    const { body } = req;

    const result = schema.validate(body);

    const { error } = result;

    if (error)
        return res.status(422).json({
            message: "Invalid request",
            type: "error",
            data: error.details,
        });

    try {
        const userEmail = await checkUserEmail({ email: body.email });

        if (!userEmail)
            return res
                .status(409)
                .json({ message: "email has exist", type: "error" });

        const data = await setUsers({ body });

        if (data)
            return res
                .status(200)
                .json({ message: "Success add user", type: "success" });
    } catch (err) {
        next(err);
    }
};
