import express from 'express'

const app = express()
const port = 9000

app.use('/', (req, res) => {
  res.json({ message: "Response Vercel Test"})
})

app.listen(9000, () => {
  console.log(`Server is starting on port ${port}`)
})