import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { encrypt } from "../helpers";

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(500).json({ message: " email and password required" });
      return;
    }

    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({ where: { email } });

    const isPasswordValid = encrypt.comparepassword(user.password, password);
    if (!user || !isPasswordValid) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    const token = encrypt.generateToken(user);

    res.status(200).json({ message: "Login successful", user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getProfile(req: Request, res: Response) {
  if (!req[" currentUser"]) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({
    where: { id: req[" currentUser"].id },
  });
  res.status(200).json({ ...user, password: undefined });
}
