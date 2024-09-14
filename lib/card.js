const { createCanvas } = require('canvas');

exports.v0 = (v) => {
  const { text, color, bg, image, circle } = v;
  // Buat canvas
  const width = 1200;
  const height = 720;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Gambar latar belakang
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  // Muat gambar dan gambar potong bulat
  const x = 100;
  const y = height / 2;

  // Gambar lingkaran putih sebagai potongan gambar
  ctx.save();
  if (circle) {
    ctx.beginPath();
    ctx.arc(x + 150, y, 150, 0, Math.PI * 2);
    ctx.clip();
  }

  // draw image
  const imageWidth = 300;
  const imageHeight = circle ? imageWidth : imageWidth * (image.height / image.width);
  ctx.drawImage(image, x, y - imageHeight / 2, imageWidth, imageHeight);
  ctx.restore();

  // Gambar teks
  ctx.fillStyle = color;
  ctx.font = '500 100px Poppins';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, 700, height / 2);

  return canvas.toBuffer('image/png');
}

exports.v1 = (v) => {
  const { text, color, bg, image, circle } = v;
  // Buat canvas
  const width = 1200;
  const height = 720;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Gambar latar belakang
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  // Muat gambar dan gambar potong bulat
  const x = width / 2;
  const y = 120;

  // Gambar lingkaran putih sebagai potongan gambar
  ctx.save();
  if (circle) {
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

  return canvas.toBuffer('image/png');
}