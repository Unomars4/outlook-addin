import express from "express";
import { authentification } from "../middleware/auth.middleware";
import { signup, getUsers } from "../controllers/user.controller";
import { login } from "../controllers/auth.controller";
const Router = express.Router();

Router.get("/users", authentification, getUsers);
Router.post("/signup", signup);
Router.post("/login", login);

export { Router as userRouter };
