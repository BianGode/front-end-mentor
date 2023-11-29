const slider = document.getElementById("slider");
const backBtn = document.getElementById("back");
const foreWardBtn = document.getElementById("forward");
const images = [
  "./images/image-product/image-product-1.jpg",
  "./images/image-product/image-product-2.jpg",
  "./images/image-product/image-product-3.jpg",
  "./images/image-product/image-product-4.jpg",
];

let count = 0;

// set default slider background to the first one
slider.style.backgroundImage = "url(" + images[count] + ")";

// backFunction
const Back = () => {
  // if count is smaller than 
  if((count - 1) < 0) {
    count = 3
  } else {
    count--
  }
  slider.style.backgroundImage = "url(" + images[count] + ")";
};

const Forward = () => {
  if((count + 1) > 3) {
    count = 0
  } else {
    count++
  }

  slider.style.backgroundImage = "url(" + images[count] + ")";
}

backBtn.addEventListener('click',() => Back())
foreWardBtn.addEventListener('click', () => Forward())