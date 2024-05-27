import express from 'express'
import mongoose from 'mongoose'

const Animal = mongoose.model('Animal', new mongoose.Schema({
  tipo: String,
  estado: String,
}))

const app = express()

// mongoose.connect('mongodb://felipe:password@localhost:27017/miapp?authSource=admin') // cuando se expone en el localhost
mongoose.connect('mongodb://felipe:password@monguito:27017/miapp?authSource=admin') // cuando se crea en una red

app.get('/', async (_req, res) => {
  console.log('listando... como felipe')
  const animales = await Animal.find();
  return res.send(animales)
})
app.get('/crear', async (_req, res) => {
  console.log('creando...')
  await Animal.create({ tipo: 'Chanchito', estado: 'Feliz' })
  return res.send('ok')
})

app.listen(3000, () => console.log('listening...'))
