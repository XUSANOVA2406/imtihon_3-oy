import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/User.js"
export const register = async (req, res, next) => {
  try {
    const {username,password,repeat_password,branch,birthdate,gender,role} = req.body
    if (password !== repeat_password) {
      return res.status(400).json({ message: "Password xato" })
    }
    if (role === "SuperAdmin") {
      return res.status(403).json({ message: "Kirolmaysiz" })
    }
    const hashed = await bcrypt.hash(password, 10)
    const user = await User.create({username,password: hashed,branch,birthdate,gender,role})
    res.status(201).json({ message: "Registered successfully" });
  } catch (err) {
    next(err);
  }
}
export const login = async (req, res, next) => {
  try {
    const { username, password } = req.body

    const user = await User.findOne({ username })
    if (!user) {
      return res.status(404).json({ message: "User topilmadi" })
    }
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      return res.status(401).json({ message: "Xato password" })
    }
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
        permissions: user.permissions
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    )
    res.json({ token })
  } catch (err) {
    next(err)
  }
}
