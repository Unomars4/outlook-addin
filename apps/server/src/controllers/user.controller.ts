import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { encrypt } from "../helpers";

export class UserController {
  static async signup(req: Request, res: Response) {
    const { name, email, password, role } = req.body;
    const encryptedPassword = await encrypt.encryptpass(password);
    const user = new User();
    user.name = name;
    user.email = email;
    user.password = encryptedPassword;
    user.role = role;

    const userRepository = AppDataSource.getRepository(User);
    await userRepository.save(user);

    // userRepository.create({ Name, email, password });
    const token = encrypt.generateToken({ id: user.id });

    return res
      .status(200)
      .json({ message: "User created successfully", token, user });
  }

  static async getUsers(req: Request, res: Response) {
    console.log("serving from db");
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();

    return res.status(200).json({
      data: users,
    });
  }
}
