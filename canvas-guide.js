// *MEMULAI JALUR BARU*

// Memulai jalur baru (harus dipanggil sebelum menggambar bentuk baru untuk memastikan jalur tidak terhubung dengan sebelumnya)
ctx.beginPath();

// *MENGGAMBAR GARIS*

ctx.moveTo(x, y);  // Memindahkan "pena" ke titik (x, y) tanpa menggambar
ctx.lineTo(x, y);  // Menggambar garis dari titik saat ini ke (x, y)

// *MENGGAMBAR BENTUK-BENTUK DASAR*

ctx.rect(x, y, width, height);  // Membuat persegi panjang dengan posisi kiri atas (x, y) dan ukuran (width, height)
ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);  // Membuat lingkaran atau busur dengan pusat (x, y) dan jari-jari radius
ctx.arcTo(x1, y1, x2, y2, radius);  // Membuat busur dari titik saat ini ke (x2, y2) yang melewati titik (x1, y1) dengan jari-jari radius
ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);  // Membuat elips dengan pusat (x, y), radiusX, radiusY, dan rotasi

ctx.strokeRect(x, y, width, height);  // Menggambar persegi panjang tanpa mengisi, hanya garis luar (border)
ctx.fillRect(x, y, width, height);  // Menggambar dan mengisi persegi panjang dengan warna fillStyle
ctx.clearRect(x, y, width, height);  // Menghapus area persegi panjang, mengosongkan area di dalam (x, y, width, height)

// *MENGISI DAN STROKE*

ctx.fill();  // Mengisi jalur yang telah ditentukan dengan warna fillStyle
ctx.stroke();  // Menggambar garis di sepanjang jalur yang telah ditentukan dengan warna strokeStyle

// *MENGGAMBAR TEKS*

ctx.font = '30px Arial';  // Menentukan gaya font (ukuran dan jenis) untuk teks
ctx.fillText('Hello World', x, y);  // Menggambar teks solid dengan warna fillStyle pada posisi (x, y)
ctx.strokeText('Hello World', x, y);  // Menggambar teks outline (garis luar) pada posisi (x, y)

// *MENGGAMBAR GAMBAR*

ctx.drawImage(image, dx, dy);  // Menggambar seluruh gambar dengan posisi (dx, dy)
ctx.drawImage(image, dx, dy, dWidth, dHeight);  // Menggambar gambar pada posisi (dx, dy) dengan ukuran (dWidth, dHeight)
ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);  // Menggambar bagian gambar yang dipotong (sx, sy, sWidth, sHeight) pada posisi (dx, dy) dengan ukuran (dWidth, dHeight)

// *MENGATUR GAYA (STYLING)*

ctx.fillStyle = 'red';  // Mengatur warna atau pola untuk pengisian bentuk
ctx.strokeStyle = 'blue';  // Mengatur warna atau pola untuk garis luar (border) bentuk
ctx.lineWidth = 5;  // Mengatur ketebalan garis (default adalah 1)
ctx.lineCap = 'round';  // Mengatur bentuk ujung garis ('butt', 'round', 'square')
ctx.lineJoin = 'round';  // Mengatur bentuk sudut garis ('bevel', 'round', 'miter')

// *GRADIENT DAN PATTERN*

let gradient = ctx.createLinearGradient(x0, y0, x1, y1);  // Membuat gradien linear dari (x0, y0) ke (x1, y1)
gradient.addColorStop(0, 'red');  // Menambahkan warna merah pada posisi 0% dari gradien
gradient.addColorStop(1, 'blue');  // Menambahkan warna biru pada posisi 100% dari gradien

let pattern = ctx.createPattern(image, 'repeat');  // Membuat pola dari gambar untuk pengisian atau garis luar (repeat, repeat-x, repeat-y, no-repeat)

ctx.fillStyle = gradient;  // Menggunakan gradien sebagai fillStyle
ctx.strokeStyle = pattern;  // Menggunakan pola sebagai strokeStyle

// *TRANSFORMASI*

ctx.translate(x, y);  // Memindahkan sistem koordinat dengan offset (x, y)
ctx.rotate(angle);  // Memutar sistem koordinat dengan sudut angle (dalam radian)
ctx.scale(x, y);  // Menskalakan sistem koordinat dengan faktor x (horizontal) dan y (vertikal)
ctx.transform(a, b, c, d, e, f);  // Menggabungkan matriks transformasi saat ini dengan matriks baru yang didefinisikan oleh (a, b, c, d, e, f)
ctx.setTransform(a, b, c, d, e, f);  // Mengatur matriks transformasi ke nilai yang didefinisikan, menghapus transformasi sebelumnya

// *KEADAAN (STATE)*

ctx.save();  // Menyimpan semua pengaturan canvas saat ini (transformasi, gaya, dll.)
ctx.restore();  // Mengembalikan pengaturan canvas ke yang terakhir disimpan

// *CLIPPING*

ctx.clip();  // Mengatur jalur yang dipilih menjadi area clipping, sehingga hanya area tersebut yang akan digambar

// *PIXEL DATA*

let imageData = ctx.getImageData(x, y, width, height);  // Mengambil data pixel dari area persegi panjang
ctx.putImageData(imageData, dx, dy);  // Meletakkan kembali data pixel pada posisi (dx, dy)

// *SHADOWS*

ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';  // Mengatur warna bayangan
ctx.shadowBlur = 10;  // Mengatur tingkat blur bayangan
ctx.shadowOffsetX = 5;  // Mengatur offset bayangan pada sumbu X
ctx.shadowOffsetY = 5;  // Mengatur offset bayangan pada sumbu Y

// *HIT DETECTION*

ctx.isPointInPath(x, y);  // Mengecek apakah titik (x, y) berada di dalam jalur saat ini
ctx.isPointInStroke(x, y);  // Mengecek apakah titik (x, y) berada di dalam jalur garis saat ini

// *TEXT ALIGNMENT*

ctx.textAlign = 'center';  // Mengatur perataan teks secara horizontal ('left', 'right', 'center', 'start', 'end')
ctx.textBaseline = 'middle';  // Mengatur perataan teks secara vertikal ('top', 'hanging', 'middle', 'alphabetic', 'ideographic', 'bottom')

// *GLOBAL PROPERTIES*

ctx.globalAlpha = 0.5;  // Mengatur transparansi global (nilai antara 0.0 - 1.0)
ctx.globalCompositeOperation = 'source-over';  // Mengatur cara gambar baru digabungkan dengan gambar yang sudah ada di canvas ('source-over', 'destination-over', 'source-in', dll.)