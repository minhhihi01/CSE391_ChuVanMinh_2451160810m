const products = [
{
id:1,
name:"iPhone 16",
price:25990000,
category:"phone",
image:"https://placehold.co/300x200",
rating:4.8,
inStock:true
},
{
id:2,
name:"Samsung S25",
price:23990000,
category:"phone",
image:"https://placehold.co/300x200",
rating:4.7,
inStock:true
},
{
id:3,
name:"Xiaomi 15",
price:14990000,
category:"phone",
image:"https://placehold.co/300x200",
rating:4.5,
inStock:true
},
{
id:4,
name:"Macbook Air M4",
price:31990000,
category:"laptop",
image:"https://placehold.co/300x200",
rating:4.9,
inStock:true
},
{
id:5,
name:"Dell XPS 15",
price:28990000,
category:"laptop",
image:"https://placehold.co/300x200",
rating:4.6,
inStock:true
},
{
id:6,
name:"Asus ROG",
price:35990000,
category:"laptop",
image:"https://placehold.co/300x200",
rating:4.8,
inStock:true
},
{
id:7,
name:"AirPods Pro",
price:5990000,
category:"audio",
image:"https://placehold.co/300x200",
rating:4.7,
inStock:true
},
{
id:8,
name:"Sony WH1000XM5",
price:8990000,
category:"audio",
image:"https://placehold.co/300x200",
rating:4.9,
inStock:true
},
{
id:9,
name:"JBL Tune",
price:1990000,
category:"audio",
image:"https://placehold.co/300x200",
rating:4.3,
inStock:true
},
{
id:10,
name:"Apple Watch",
price:10990000,
category:"watch",
image:"https://placehold.co/300x200",
rating:4.8,
inStock:true
},
{
id:11,
name:"Galaxy Watch",
price:7990000,
category:"watch",
image:"https://placehold.co/300x200",
rating:4.6,
inStock:true
},
{
id:12,
name:"Huawei Watch",
price:5990000,
category:"watch",
image:"https://placehold.co/300x200",
rating:4.4,
inStock:true
}
];

let currentProducts = [...products];
let cartCount = 0;

const app = document.getElementById("app");

buildLayout();
renderProducts(products);

function buildLayout(){

const container=document.createElement("div");
container.className="container";

container.innerHTML=`
<div class="top-bar">

<div>
<input
id="searchInput"
class="search-box"
placeholder="Tìm kiếm..."
>

<select id="sortSelect">
<option value="">Sắp xếp</option>
<option value="priceAsc">Giá tăng</option>
<option value="priceDesc">Giá giảm</option>
<option value="name">Tên A-Z</option>
<option value="rating">Đánh giá cao nhất</option>
</select>
</div>

<div>
<button id="darkBtn">🌙 Dark Mode</button>
</div>

<div class="cart">
🛒
<span class="badge" id="cartBadge">0</span>
</div>

</div>

<div class="category-buttons">
<button data-category="all">All</button>
<button data-category="phone">Phone</button>
<button data-category="laptop">Laptop</button>
<button data-category="audio">Audio</button>
<button data-category="watch">Watch</button>
</div>

<div id="productGrid" class="product-grid"></div>
`;

app.appendChild(container);

document
.getElementById("searchInput")
.addEventListener("input", searchProducts);

document
.getElementById("sortSelect")
.addEventListener("change", sortProducts);

document
.querySelector(".category-buttons")
.addEventListener("click", e=>{

if(e.target.tagName==="BUTTON"){
filterByCategory(
e.target.dataset.category
);
}

});

document
.getElementById("darkBtn")
.addEventListener("click",()=>{

document.body.classList.toggle(
"dark-mode"
);

});

}

function renderProducts(list){

const grid =
document.getElementById("productGrid");

grid.innerHTML="";

list.forEach(product=>{

const card=document.createElement("div");

card.className="card";

card.innerHTML=`
<img src="${product.image}">
<div class="card-body">
<h3>${product.name}</h3>
<p class="price">
${product.price.toLocaleString()}đ
</p>
<p>⭐ ${product.rating}</p>
<button
class="add-cart"
data-id="${product.id}"
>
Thêm giỏ
</button>
</div>
`;

card.addEventListener("click",e=>{

if(
e.target.classList.contains(
"add-cart"
)
){
e.stopPropagation();
addToCart();
return;
}

showModal(product);

});

grid.appendChild(card);

});

}

function searchProducts(){

const keyword =
document
.getElementById("searchInput")
.value
.toLowerCase();

const filtered =
currentProducts.filter(product=>

product.name
.toLowerCase()
.includes(keyword)

);

renderProducts(filtered);
}

function filterByCategory(category){

if(category==="all"){
currentProducts=[...products];
}
else{
currentProducts=
products.filter(
p=>p.category===category
);
}

renderProducts(currentProducts);
}

function sortProducts(){

const value =
document.getElementById(
"sortSelect"
).value;

let sorted=[...currentProducts];

switch(value){

case "priceAsc":
sorted.sort(
(a,b)=>a.price-b.price
);
break;

case "priceDesc":
sorted.sort(
(a,b)=>b.price-a.price
);
break;

case "name":
sorted.sort(
(a,b)=>
a.name.localeCompare(b.name)
);
break;

case "rating":
sorted.sort(
(a,b)=>b.rating-a.rating
);
break;

}

renderProducts(sorted);

}

function addToCart(){

cartCount++;

document.getElementById(
"cartBadge"
).textContent=cartCount;

}

function showModal(product){

const modal =
document.createElement("div");

modal.className="modal";

modal.innerHTML=`
<div class="modal-content">
<span class="close-btn">&times;</span>

<h2>${product.name}</h2>

<img
src="${product.image}"
width="100%"
>

<p>
Giá:
${product.price.toLocaleString()}đ
</p>

<p>
Đánh giá:
⭐ ${product.rating}
</p>

<p>
Danh mục:
${product.category}
</p>

<p>
Kho:
${
product.inStock
? "Còn hàng"
: "Hết hàng"
}
</p>

</div>
`;

document.body.appendChild(modal);

modal
.querySelector(".close-btn")
.addEventListener("click",()=>{

modal.remove();

});

modal.addEventListener("click",e=>{

if(e.target===modal){
modal.remove();
}

});

}