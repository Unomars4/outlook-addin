import express from "express";
import { authentification } from "../middleware/auth.middleware";
import { getUsersContacts } from "../controllers/contacts.controller";
const Router = express.Router();

Router.get("/:id/contacts", authentification, getUsersContacts);

export { Router as contactsRouter };
