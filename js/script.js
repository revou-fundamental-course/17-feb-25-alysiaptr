// Ini JavaScript External

//Navigasi
document.querySelector('a[href="#our-packages-section"]').addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("our-packages-section").scrollIntoView({ behavior: "smooth" });
});

// Banner AutoSlide
let indexBanner = 0;
const banners = [
    "https://img.lovepik.com/background/20211022/medium/lovepik-ice-cubes-background-image_401930883.jpg",
    "https://watermark.lovepik.com/photo/40015/8670.jpg_wh1200.jpg",
    "https://img.lovepik.com/background/20211022/medium/lovepik-summer-drink-background-image_401940452.jpg"
];

function showBanner() {
    const banner = document.querySelector('.main-banner');
    if (banner) {
        banner.style.backgroundImage = `url(${banners[indexBanner]})`;
        indexBanner = (indexBanner + 1) % banners.length;
    }
}

//Jalankan fungsi pertama kali
showBanner();

// Auto Play setiap 3 detik
setInterval(showBanner, 3000);

// Tampilkan banner pertama kali setelah halaman dimuat
window.onload = function () {
    showBanner();
};

//Form
document.getElementById("message-form").addEventListener ="submit", function (event)    
{
    event.preventDefault(); // Hentikan submit sementara untuk validasi

    const form = event.target; // Ambil form yang sedang di-submit
    const name = form["full-name"].value.trim();
    const email = form["email"].value.trim();
    const messages = form["message"].value.trim();

    let isValid = true;

    // Reset error messages
    document.getElementById("error-name").innerHTML = "";
    document.getElementById("error-email").innerHTML = "";
    document.getElementById("error-message").innerHTML = "";

    // Validasi tiap field
    if (name === "") {
        document.getElementById("error-name").innerHTML = "Nama tidak boleh kosong";
        isValid = false;
    }
    if (email === "") {
        document.getElementById("error-email").innerHTML = "Email tidak boleh kosong";
        isValid = false;
    }
    if (messages === "") {
        document.getElementById("error-message").innerHTML = "Pesan tidak boleh kosong";
        isValid = false;
    }

    if (!isValid) return; 
    form.submit();
}