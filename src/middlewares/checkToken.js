import jwt from "jsonwebtoken"
export default (req, res, next) => {
  const auth = req.headers.authorization
  if(!auth) {
    return res.status(401).json({ message: "Token kerak" })
  }
  const token = auth.split(" ")[1]
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (err) {
    res.status(401).json({ message: "Xato token" })
  }
}