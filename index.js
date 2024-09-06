const express = require('express');
const { createCanvas, loadImage, registerFont } = require('canvas');
const path = require('path');

const app = express();
const PORT = 3000;

const addFont = (family, weight,fileName) => {
  registerFont(path.join(__dirname, 'static', 'fonts', fileName), { family: family, weight: weight })
}

addFont('Poppins', 400, 'Poppins-Regular.ttf');
addFont('Poppins', 500, 'Poppins-Medium.ttf');
addFont('Poppins', 700, 'Poppins-Bold.ttf');

app.use(express.static(path.join(__dirname, 'static')));


app.get('/v0', async (req, res) => {
  // dapatkan data dari query parameter
  const text = req.query.text || 'reyycard v1';
  const color = req.query.color || '#F1F5F9';
  const background = req.query.background || '#020617';
  const circle = req.query?.circle != 'false' && req.query?.circle !== undefined
  let image = '';
  try {
    image = await loadImage(req.query.image);
  } catch (error) {
    image = await loadImage(path.join(__dirname, 'static', 'icon.png'));
  }
  // Buat canvas
  const width = 1200;
  const height = 720;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Gambar latar belakang putih
  ctx.fillStyle = '#ffff00';
  ctx.fillRect(0, 0, width, height);

  // Kirim gambar canvas sebagai respons
  res.setHeader('Content-Type', 'image/png');
  res.send(canvas.toBuffer('image/png'));
})

app.get('/v1', async (req, res) => {
  // dapatkan data dari query parameter
  const text = req.query.text || 'reyycard v1';
  const color = req.query.color || '#F1F5F9';
  const background = req.query.background || '#020617';
  const circle = req.query?.circle != 'false' && req.query?.circle !== undefined
  let image = '';
  try {
    image = await loadImage(req.query.image);
  } catch (error) {
    image = await loadImage(path.join(__dirname, 'static', 'icon.png'));
  }

  // Buat canvas
  const width = 1200;
  const height = 720;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Gambar latar belakang putih
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, width, height);

  // Muat gambar dan gambar potong bulat
  const x = width / 2;
  const y = 120;

  // Gambar lingkaran putih sebagai potongan gambar
  ctx.save();
  if(circle) {
    ctx.beginPath();
    ctx.arc(x, y + 180, 180, 0, Math.PI * 2);
    ctx.clip();
  }

  // draw image
  const imageHeight = 360;
  const imageWidth = circle ? imageHeight : imageHeight * (image.width / image.height);
  ctx.drawImage(image, x - imageWidth / 2, y, imageWidth, imageHeight);
  ctx.restore();

  // Gambar teks
  ctx.fillStyle = color;
  ctx.font = '500 80px Poppins';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, 600);

  // Kirim gambar canvas sebagai respons
  res.setHeader('Content-Type', 'image/png');
  res.send(canvas.toBuffer('image/png'));
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
