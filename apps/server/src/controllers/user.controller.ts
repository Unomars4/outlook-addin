import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";
import { encrypt } from "../helpers";

export async function signup(req: Request, res: Response) {
  const { email, password, firstName, lastName } = req.body;
  const encryptedPassword = await encrypt.encryptpass(password);
  const user = new User();
  user.email = email;
  user.firstName = firstName;
  user.lastName = lastName;
  user.password = encryptedPassword;

  const userRepository = AppDataSource.getRepository(User);
  await userRepository.save(user);

  // userRepository.create({ Name, email, password });
  const token = encrypt.generateToken(user);

  res
    .status(200)
    .json({ message: "User created successfully", token, user });
}

export async function getUsers(req: Request, res: Response) {
  console.log("serving from db");
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  res.status(200).json({
    data: users,
  });
}
