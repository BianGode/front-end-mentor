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

// closing and opening the sidebar
const nav = document.querySelector('.navigation')
const closeBtn = document.querySelector('.floatCloseButton')
const blackBg = document.querySelector('.blackBackground')
const hamburger = document.querySelector('.hamburger')

closeBtn.addEventListener('click', () => {
  nav.classList.remove('active')
  blackBg.classList.remove('on')
})
hamburger.addEventListener('click', () => {
  nav.classList.add('active')
  blackBg.classList.add('on')
})

// plus minus product function
const num = document.querySelector('.addNum')
const minus = document.querySelector('.minus')
const plus = document.querySelector('.plus')

minus.addEventListener('click', () => {
  let numParsed = num.childNodes[0].data.toString()
  if (numParsed < 0) {
    return;
  } else {
    numParsed--;
    num.textContent = numParsed 
  }
})
plus.addEventListener('click', () => {
    let numParsed = num.childNodes[0].data.toString()
    numParsed++;
    num.textContent = numParsed 
})

// add to cart function
const addToCartButton = document.querySelector('.addCartBtn')
const cartCount = document.querySelector('.cartCount')

const addToCard = () => {
  if (cartCount.classList.contains('on')) {
    let tempcartCount = cartCount.childNodes[0].data.toString()
    cartCount.textContent = parseInt(tempcartCount) + parseInt(num.childNodes[0].data.toString())
  } else {
    cartCount.classList.add('on')
    cartCount.textContent = num.childNodes[0].data.toString();
  }
  calculatePriceFun()
}

addToCartButton.addEventListener('click', addToCard)

const cartButton = document.querySelector('.cartButton')
const shoppingCart = document.querySelector('.shoppingCart')

cartButton.addEventListener('click',() => {
  shoppingCart.classList.toggle('on');
})

// calcate price on shoppingCart and change value whenever is added to card(see 2 function above)
const calculatedPriceEl = document.querySelector('.calcPrice')
const timesEl = document.querySelector('.times')

const calculatePriceFun = () => {
  let tempTimes = parseInt(cartCount.childNodes[0].data)

  timesEl.textContent = tempTimes;
  let calcPrice = 125 * tempTimes
  calculatedPriceEl.textContent = calcPrice
}

// delete the order function 
const delButton = document.getElementById('prodImg')

delButton.addEventListener('click' ,() => {
  calculatedPriceEl.textContent = 0;
  timesEl.textContent = 0;
  cartCount.textContent = 0;
})

// function to switch the images
const imageList = document.querySelectorAll('.imageList')

imageList.forEach((el, idx) => {
  console.log(idx);

  el.addEventListener('click', () => {
    slider.style.backgroundImage = "url(" + images[idx] + ")";
  })
})

// still to do
// click on the big image to create a float 
// image with small thumbnails to switch image