import { Router } from "express"

export const generalRouter = Router()

generalRouter.get("/get-started", (req, res) => {
  res.send(
    JSON.stringify({
      message: "Hello from the server!"
    })
  )
})