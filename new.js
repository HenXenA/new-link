// Fungsi untuk menampilkan alert ketika posisi diklik
function showAlert(position) {
    alert("Posisi yang dipilih: " + position);
}

// Menambahkan efek loading pada judul ketika halaman dimuat
window.onload = function() {
    let title = document.querySelector('h1');
    title.classList.add('loading');
}
