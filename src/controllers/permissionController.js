import User from "../models/User.js"
export const addPermission = async (req, res, next) => {
  try {
    const { userId, permissions } = req.body
    const user = await User.findById(userId)
    if (!user) {
      return res.status(404).json({ message: "Foydalanuvchi topilmadi" })
    }

    user.permissions = permissions
    await user.save()
    res.json({
      message: "Permissions updated",
      permissions: user.permissions
    })
  } catch (err) {
    next(err)
  }
}