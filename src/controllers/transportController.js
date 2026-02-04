import Transport from "../models/Transport.js"
export const getAll = async (req, res, next) => {
  try {
    const filter= {}
    if (req.query.branch) {
      filter.branch = req.query.branch
    }
    if (req.query.model){
      filter.model= { $regex: req.query.model, $options: "i" }
    }
    const transports= await Transport.find(filter).populate("branch")
    res.json(transports)
  } catch (err) {
    next(err)
  }
}
export const create= async (req,res,next) => {
  try {
    const transport= await Transport.create(req.body)
    res.status(201).json(transport)
  } catch (err) {
    next(err)
  }
}
export const update= async (req,res,next) => {
  try {
    const transport = await Transport.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )

    if (!transport) {
      return res.status(404).json({ message: "Transport topilmadi" })
    }
    res.json(transport)
  } catch (err) {
    next(err)
  }
}
export const remove=async (req,res,next) => {
  try {
    const transport=await Transport.findByIdAndDelete(req.params.id)
    if (!transport) {
      return res.status(404).json({ message: "Transport topilmadi" })
    }
    res.json({ message: "Transport o'chirildi" })
  } catch (err) {
    next(err)
  }
}