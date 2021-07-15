const express = require('express')
const axios = require('axios')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
const PORT = process.env.PORT || 3000

// Fetch dummy user data
app.get('/users', async (req, res) => {
  const url = 'https://jsonplaceholder.typicode.com/users'

  const { data } = await axios.get(url)
  return res.status(200).json(data)
})

app.listen(PORT, () => console.log(`Server started on ${PORT}`))
