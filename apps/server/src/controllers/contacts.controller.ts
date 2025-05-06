import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export async function getUsersContacts(req: Request, res: Response) {
  const userId = Number(req.params.id);
  const userRepo = AppDataSource.getRepository(User);

  try {
    const user = await userRepo.findOne({
      where: { id: userId },
      relations: ["contacts"],
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ data: user.contacts });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch contacts", details: err });
  }
}
