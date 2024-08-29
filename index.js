const express = require('express');
const { createCanvas, loadImage, registerFont } = require('canvas');
const path = require('path');

const app = express();
const PORT = 3000;

registerFont(path.join(__dirname, 'static', 'fonts', 'Poppins-Regular.ttf'), { family: 'Poppins' })

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'));
})

app.get('/log', (req, res) => {
  res.end(JSON.stringify(req.body))
})

app.get('/card-v1', async (req, res) => {
  // dapatkan data dari query parameter
  const text = req.query.text || 'welcome!';
  const color = req.query.color?.replace(/%23/g, '#') || '#F1F5F9';
  const background = req.query.background?.replace(/%23/g, '#') || '#020617';
  const imageDefault = path.join(__dirname, 'default.jpg');
  let image = false;
  try {
    image = await loadImage(req.query.image || imageDefault);
  } catch(error) {
    image = await loadImage(imageDefault);
  }
  
  // Buat canvas
  const width = 640;
  const height = 360;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Gambar latar belakang putih
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, width, height);

  // Muat gambar dan gambar potong bulat
    const x = width / 2;
    const y = 60;

    // Gambar lingkaran putih sebagai potongan gambar
    ctx.save();
    ctx.beginPath();
    ctx.arc(x, y + 90, 90, 0, Math.PI * 2);
    ctx.clip();

    // Gambar gambar yang sudah dipotong
    ctx.drawImage(image, x - 90, y, 180, 180);
    ctx.restore();

  // Gambar teks
  ctx.fillStyle = color;
  ctx.font = '500 40px Poppins';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, 300);

  // Kirim gambar canvas sebagai respons
  res.setHeader('Content-Type', 'image/png');
  res.send(canvas.toBuffer('image/png'));
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
