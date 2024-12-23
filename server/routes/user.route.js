import { register } from "../controllers/user.controller.js";
import { login } from "../controllers/user.controller.js";
import { logout } from "../controllers/user.controller.js";
import express from "express"

const router=express.Router()

router.post("/register",register)
router.post("/login",login)
router.post("/logout",logout)

export default router