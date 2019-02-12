 const productsArr = ["Natural Food Products","Natural Health Care", "Natural Personal Care", "Ayurvedic Medicines", "Herbal Home Care", "Patanjali Publications"]


 const productsGrid = document.getElementById("products-grid")

 const productsImgSrc = [
  // image urls, product names 
    ["images/products/food_products/1.png", "images/products/food_products/2.png", "images/products/food_products/3.png", "images/products/food_products/4.png", "images/products/food_products/5.png", "images/products/food_products/6.png", "images/products/food_products/7.png", "images/products/food_products/8.png", "images/products/food_products/9.png"],
    ["images/products/health_care/1.png","images/products/health_care/2.png","images/products/health_care/3.png","images/products/health_care/4.png","images/products/health_care/5.png","images/products/health_care/6.png","images/products/health_care/7.png","images/products/health_care/8.png","images/products/health_care/9.png"],
    ["images/products/personal_care/1.png","images/products/personal_care/2.png","images/products/personal_care/3.png","images/products/personal_care/4.png","images/products/personal_care/5.png","images/products/personal_care/6.png","images/products/personal_care/7.png","images/products/personal_care/8.png","images/products/personal_care/9.png"],
    ["images/products/ayurvedic_medicines/1.png","images/products/ayurvedic_medicines/2.png","images/products/ayurvedic_medicines/3.png","images/products/ayurvedic_medicines/4.png","images/products/ayurvedic_medicines/5.png","images/products/ayurvedic_medicines/6.png","images/products/ayurvedic_medicines/7.png","images/products/ayurvedic_medicines/8.png","images/products/ayurvedic_medicines/9.png"], 
    ["images/products/home_care/1.png","images/products/home_care/2.png","images/products/home_care/3.png","images/products/home_care/4.png","images/products/home_care/5.png","images/products/home_care/6.png","images/products/home_care/7.png","images/products/home_care/8.png","images/products/home_care/9.png"],
    ["images/products/publications/1.jpg","images/products/publications/2.jpg","images/products/publications/3.jpg","images/products/publications/4.jpg","images/products/publications/5.jpg","images/products/publications/6.png","images/products/publications/7.png","images/products/publications/8.jpg","images/products/publications/9.jpg"] 
  ]

  
// create a h1 element and text node title of category.
// create a div for img-grid, create img elements and append as children to the img-grid 

const printGrid = () => {  
 productsGrid.innerHTML = ""
 const productSelect = document.getElementById("category-select").value
 let categoryIndex = productsArr.indexOf(productSelect)
 let wrapperDiv = document.createElement("div")
 let title = document.createElement("h2")
 title.appendChild(document.createTextNode(productSelect))
 wrapperDiv.appendChild(title) 
  
 let imgDiv = document.createElement("div")
 imgDiv.classList.add("products-img-div") 
  imgDiv.innerHTML = productsImgSrc[categoryIndex].map( src => { return `<img class="product-img-elem" src=${src} />` }).join("")
 wrapperDiv.appendChild(imgDiv)
 productsGrid.appendChild(wrapperDiv)
}

window.onload = printGrid()

const selectInput = document.getElementById("category-select")
selectInput.addEventListener("change", printGrid ) 

 

// arr.map( s => `<img src=${s} />`)
