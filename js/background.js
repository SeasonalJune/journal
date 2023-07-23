
const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg","4.jpg"];


const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.style.backgroundImage = `url(img/${chosenImage})`;
bgImage.style.backgroundSize = "cover";
bgImage.style.backgroundPosition = "center";
document.body.appendChild(bgImage);
