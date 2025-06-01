import express from "express"

const router =express.Router()
import { login,logout,signup,onboard } from "../controllers/auth.controller.js"    
import { protectRoute } from "../middleware/auth.middleware.js"


router.post("/signup",signup)

router.post("/login",login)

router.post("/logout",logout)

router.post("/onboarding",protectRoute,onboard)

router.get("/me",protectRoute,(req ,res)=>
    {res.status(200).json({user:req.user})
});

export default router