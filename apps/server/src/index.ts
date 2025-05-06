import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { Request, Response } from "express";
import { userRouter } from "./routes/user.routes";
import "reflect-metadata";
import { encrypt } from "./helpers";
import { contactsRouter } from "./routes/contacts.routes";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const { PORT = 3000 } = process.env;
app.use("/api/auth", userRouter);
app.use("/api/users", contactsRouter);

app.get("*", (req: Request, res: Response) => {
  res.status(505).json({ message: "Bad Request" });
});

// Then attempt to initialize the database connection
AppDataSource.initialize()
  .then(async () => {
    console.log("Database connection established successfully");

    const userRepo = AppDataSource.getRepository(User);

    // Create users
    const timber = userRepo.create({
      firstName: "Timber",
      lastName: "Straw",
      email: "timebr@gmail.com",
      password: await encrypt.encryptpass("password"),
      department: "Engineering",
      title: "Data Scientist",
      phoneNumber: "1234569890",
    });

    const alice = userRepo.create({
      firstName: "Alice",
      lastName: "Wonder",
      email: "alice@example.com",
      password: await encrypt.encryptpass("password"),
      department: "Engineering",
      title: "Developer",
      phoneNumber: "1234567890",
    });

    const bob = userRepo.create({
      firstName: "Bob",
      lastName: "Builder",
      email: "bob@example.com",
      password: await encrypt.encryptpass("password"),
      department: "Construction",
      title: "Engineer",
      phoneNumber: "2345678901",
    });

    const carol = userRepo.create({
      firstName: "Carol",
      lastName: "Singer",
      email: "carol@example.com",
      password: await encrypt.encryptpass("password"),
      department: "Entertainment",
      title: "Performer",
      phoneNumber: "3456789012",
    });

    // Save them
    await userRepo.save([timber, alice, bob, carol]);

    // Assign contacts
    timber.contacts = [alice, bob, carol];
    alice.contacts = [bob, carol];
    bob.contacts = [alice]; // optional
    await userRepo.save([alice, bob, timber]); // this updates the join table

    console.log("Created users with contact relationships.");

    // Load with contacts
    const allUsers = await userRepo.find({
      relations: ["contacts"],
    });
    console.log("Users with contacts:", allUsers);

    app.listen(PORT, () => {
      console.log("Server is running on http://localhost:" + PORT);
    });
  })
  .catch((error) => {
    console.log("Database connection failed:", error);
    console.log("Server will continue to run without database functionality");
  });
