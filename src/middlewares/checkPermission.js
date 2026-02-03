export default (permission) => {
  return (req, res, next) => {
    if(
      req.user.role === "SuperAdmin" ||
      req.user.permissions?.includes(permission)
    ) {
      return next()
    }
    return res.status(403).json({ message: "Permission denied" })
  }
}