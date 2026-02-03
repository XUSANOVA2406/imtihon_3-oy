import Branch from "../models/Branch.js"
export const getAll= async (req, res, next) => {
  try {
    const branches = await Branch.find()
    res.json(branches)
  } catch (err) {
    next(err)
  }
}
export const getOne=async (req, res, next) => {
  try {
    const branch = await Branch.findById(req.params.id)
    if (!branch) {
      return res.status(404).json({ message: "Bunday filial yo'q" });
    }
    res.json(branch)
  } catch (err) {
    next(err)
  }
}
export const create=async (req, res, next) => {
  try{
    const branch = await Branch.create(req.body)
    res.status(201).json(branch)
  } catch (err) {
    next(err)
  }
}
export const update=async (req, res, next) => {
  try {
    const branch = await Branch.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    if (!branch) {
      return res.status(404).json({ message: "Filial topilmadi" })
    }

    res.json(branch)
  } catch (err) {
    next(err)
  }
}

export const remove=async (req, res, next) => {
  try {
    const branch = await Branch.findByIdAndDelete(req.params.id)

    if (!branch) {
      return res.status(404).json({ message: "Filial topilmadi" })
    }

    res.json({ message: "Filial o'chirildi" })
  } catch (err) {
    next(err)
  }
}