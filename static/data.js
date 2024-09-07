const { query } = require("express")

const url = 'https://reyycard.vercel.app'

const data = [
  {
    id: '/v1',
    desc: 'version 1 description',
    q: ['text', 'img', 'color', 'bg', 'circle']
  }
]

const q = {
  text: {
    ex: 'hello+world',
    desc: 'Tulisan'
  }
}