const qrText = document.getElementById('qr-Text');
const generateBtn = document.getElementById('generateBtn');
const dounloadBtn = document.getElementById('dounloadBtn');
const qrContainer = document.querySelector('.qr-body');

document.body.style.backgroundColor = "aqua";

generateBtn.addEventListener('click', (e) => {
    generateQRCode();
});

function generateQRCode() {
    const sizev = document.getElementById('sizes').value;
    const size = parseInt(sizev);
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text: qrText.value,
        height: size,
        width: size,
        colorLight: "#fff",
        colorDark: "#000",
    });
}

