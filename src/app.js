const express = require("express")
const app = express()

const { sum, sub, times, div } = require("./useCases/CalculationsUseCase")

app.use(express.json())

app.get("/calculations", (request, response) => {
  let { a, b } = request.query
  a = parseFloat(a)
  b = parseFloat(b)

  const result = {
    results: {
      sum: sum(a, b),
      sub: sub(a, b),
      times: times(a, b),
      div: div(a, b),
    },
  }

  return response.status(200).json(result)
})

module.exports = { app }
