import { AppDataSource } from "./data-source";
import { User } from "./entity/User";
import express from "express";
import * as dotenv from "dotenv";
import { Request, Response } from "express";
import { userRouter } from "./routes/user.routes";
import "reflect-metadata";
import { encrypt } from "./helpers";
dotenv.config();

const app = express();
app.use(express.json());
const { PORT = 3000 } = process.env;
app.use("/auth", userRouter);

app.get("*", (req: Request, res: Response) => {
  res.status(505).json({ message: "Bad Request" });
});

// Then attempt to initialize the database connection
AppDataSource.initialize()
  .then(async () => {
    console.log("Database connection established successfully");

    // These operations now run only if DB connection is successful
    console.log("Inserting a new user into the database...");
    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.email = "timber@gmail.com";
    user.password = await encrypt.encryptpass("password");
    await AppDataSource.manager.save(user);
    console.log("Saved a new user with id: " + user.id);

    console.log("Loading users from the database...");
    const users = await AppDataSource.manager.find(User);
    console.log("Loaded users: ", users);
    app.listen(PORT, () => {
      console.log("Server is running on http://localhost:" + PORT);
    });
  })
  .catch((error) => {
    console.log("Database connection failed:", error);
    console.log("Server will continue to run without database functionality");
  });
