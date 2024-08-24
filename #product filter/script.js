
makeup_products = {
    "Adore jewels": {
        "ring": { "img": "images/ring 1.webp", "name": "ring", "price": 1500.99, },
        "earning": { "img": "images/earning.webp", "name": "earning", "price": 3000.00, },
        "bangles": { "img": "images/bangles.webp", "name": "bangles", "price": 1100.50, },
    },
    "Adorned gems": {
        "pearl": { "img": "images/pearl.jpg", "name": "pearl", "price": 14.99 },
    },
    "Almas Jewellers": {
        "gold": { "img": "images/gold.webp", "name": "gold set", "price": 8.999 },
        "earning ": { "img": "images/earning 1.webp", "name": "earning ", "price": 75.50 },
        "kara": { "img": "images/kara.webp", "name": "kara", "price": 25.00 },
        "locket": { "img": "images/locket.webp", "name": "locket", "price": 30.50 },
    },
     
}

const main = document.getElementById("main")
const color = document.getElementById("color")
const brand = document.getElementById("brand")
const item = document.getElementById("item")
const selected = document.getElementById("second")

brand.innerHTML = `<option>Select brand</option>`


// for loop
let idImg = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine", "thirty", "thirty-one", "thirty-two", "thirty-three", "thirty-four", "thirty-five", "thirty-six", "thirty-seven", "thirty-eight", "thirty-nine", "forty", "forty-one", "forty-two", "forty-three", "forty-four", "forty-five", "forty-six", "forty-seven", "forty-eight", "forty-nine", "fifty", "fifty-one", "fifty-two", "fifty-three", "fifty-four", "fifty-five", "fifty-six", "fifty-seven", "fifty-eight", "fifty-nine", "sixty"]
let idColor = ["c-one", "c-two", "c-three", "c-four", "c-five", "c-six", "c-seven", "c-eight", "c-nine", "c-ten", "c-eleven", "c-twelve", "c-thirteen", "c-fourteen", "c-fifteen", "c-sixteen", "c-seventeen", "c-eighteen", "c-nineteen", "c-twenty", "c-twenty-one", "c-twenty-two", "c-twenty-three", "c-twenty-four", "c-twenty-five", "c-twenty-six", "c-twenty-seven", "c-twenty-eight", "c-twenty-nine", "c-thirty", "c-thirty-one", "c-thirty-two", "c-thirty-three", "c-thirty-four", "c-thirty-five", "c-thirty-six", "c-thirty-seven", "c-thirty-eight", "c-thirty-nine", "c-forty", "c-forty-one", "c-forty-two", "c-forty-three", "c-forty-four", "c-forty-five", "c-forty-six", "c-forty-seven", "c-forty-eight", "c-forty-nine", "c-fifty", "c-fifty-one", "c-fifty-two", "c-fifty-three", "c-fifty-four", "c-fifty-five", "c-fifty-six", "c-fifty-seven", "c-fifty-eight", "c-fifty-nine", "c-sixty"]


// making cards
for (const key in makeup_products) {
    let allProductsBrand = makeup_products[key];
    // brand.innerHTML += `<option value="${key}">${key}</option>`
    for (const key1 in makeup_products[key]) {
        let allProducts = makeup_products[key][key1];
        for (let i = 0; i < idImg.length; i++) {
            allProducts.span = idImg[i]
        }
        for (let i = 0; i < idColor.length; i++) {
            allProducts.class = idColor[i]
        }

        main.innerHTML += `<div class="card text-center" style="width: 18rem;">
  <img src="${allProducts.img}" id="${allProducts.class}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${allProducts.name}</h5>
    <p class="card-text">Price: ${allProducts.price}$</p>
    <div id="color ${allProducts.span}"></div>
    <a href="#" class="btn btn-primary">Add To Cart</a>
  </div>
</div>`
    }
}
function returnToMain (){
    for (const key in makeup_products) {
        let allProductsBrand = makeup_products[key];
        // brand.innerHTML += `<option value="${key}">${key}</option>`
        for (const key1 in makeup_products[key]) {
            let allProducts = makeup_products[key][key1];
            for (let i = 0; i < idImg.length; i++) {
                allProducts.span = idImg[i]
            }
            for (let i = 0; i < idColor.length; i++) {
                allProducts.class = idColor[i]
            }
    
            main.innerHTML += `<div class="card text-center" style="width: 18rem;">
      <img src="${allProducts.img}" id="${allProducts.class}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${allProducts.name}</h5>
        <p class="card-text">Price: ${allProducts.price}$</p>
        <div id="color ${allProducts.span}"></div>
        <a href="#" class="btn btn-primary">Add To Cart</a>
      </div>
    </div>`
        }
    }
}

// serach event 
function itemsDisplay() {
    item.innerHTML = ''
    item.innerHTML = `<option value="">Select Product</option>`
    for (var key in makeup_products[brand.value]) {
        item.innerHTML += `<option value="${key}">${key}</option>`
    }
}

window.onload = function () {
    const brandSelect = document.getElementById('brand');
    for (let brand in makeup_products) {
        let option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        brandSelect.appendChild(option);
    }
}

// Populate item dropdown based on selected brand
function itemsDisplay() {
    const brandSelect = document.getElementById('brand').value;
    const itemSelect = document.getElementById('item');
    itemSelect.innerHTML = '<option value="" selected disabled>Select Item</option>'; // Reset items
    if (brandSelect) {
        for (let item in makeup_products[brandSelect]) {
            let option = document.createElement('option');
            option.value = item;
            option.textContent = item;
            itemSelect.appendChild(option);
        }
    }
}

// Search for the selected item and display it
function search() {
    const brand = document.getElementById('brand').value;
    const item = document.getElementById('item').value;
    const mainSection = document.getElementById('main');
    const secondSection = document.getElementById('second');
    let banner =document.getElementById("carouselExampleInterval")
    banner.innerHTML='';
    mainSection.innerHTML = ''; // Clear previous results
    secondSection.innerHTML = ''; // Clear previous results

    if (brand && item) {
        const product = makeup_products[brand][item];
        const productCard = createProductCard(product.img, product.name, product.price);
        mainSection.appendChild(productCard);
    }
}

// Clear all selections and displayed items
function clearAll() {
    document.getElementById('brand').value = '';
    document.getElementById('item').innerHTML = '<option value="" selected disabled>Select Item</option>';
    document.getElementById('main').innerHTML = '';
    document.getElementById('second').innerHTML = '';
}

// Function to create a product card
function createProductCard(img, name, price) {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.width = '18rem';
    
    const imgElement = document.createElement('img');
    imgElement.src = img;
    imgElement.className = 'card-img-top';
    imgElement.alt = name;

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = name;

    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = `$${price.toFixed(2)}`;
    const cardBtn =document.createElement('button')
    cardBtn.className="btn btn-primary"
    cardBtn.innerText="Add to cart"

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    card.appendChild(imgElement);
    card.appendChild(cardBody);

    return card;
} 
// let selectColor = document.getElementById("color")
// let lipstickMac=document.getElementById("one").innerHTML +=`<span class="red"></span><span class="pink"></span><span class="brown"></span>`
