import { Request, Response } from "express";
import getUsers from "../repository/userCollection";

export const index = async (req: Request, res: Response): Promise<void> => {
    res.send("EBUDDY PTE. LTD. Technical Test");
};

export const fetchUser = async (req: Request, res: Response): Promise<void> => {
    const users = await getUsers();

    res.status(200).json(users);
};
