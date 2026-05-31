const images = [
"https://picsum.photos/id/1015/900/500",
"https://picsum.photos/id/1016/900/500",
"https://picsum.photos/id/1018/900/500",
"https://picsum.photos/id/1020/900/500",
"https://picsum.photos/id/1024/900/500",
"https://picsum.photos/id/1025/900/500",
"https://picsum.photos/id/1035/900/500",
"https://picsum.photos/id/1040/900/500",
"https://picsum.photos/id/1050/900/500"
];

const commands = [
"Open Gallery",
"Next Image",
"Previous Image",
"Start Slideshow",
"Stop Slideshow",
"Help"
];

let currentIndex = 0;
let slideshow = null;

const app = document.getElementById("app");

buildUI();

function buildUI(){

app.innerHTML = `

<div class="container">

<h1>Keyboard Accessibility App</h1>

<div class="gallery">

<img
id="galleryImage"
src="${images[0]}"
alt="Gallery Image"
tabindex="0"
aria-label="Ảnh hiện tại"
>

</div>

<div class="controls">

<button
id="prevBtn"
aria-label="Ảnh trước"
>
← Prev
</button>

<button
id="nextBtn"
aria-label="Ảnh tiếp theo"
>
Next →
</button>

<button
id="playBtn"
aria-label="Phát hoặc dừng slideshow"
>
▶ Slideshow
</button>

<button
id="openPopup"
aria-label="Mở ảnh lớn"
>
Open Popup
</button>

</div>

</div>

<div
id="popup"
class="popup hidden"
aria-label="Cửa sổ ảnh lớn"
>
<img id="popupImage">
</div>

<div
id="commandOverlay"
class="command-overlay hidden"
>

<div class="command-box">

<input
id="commandInput"
placeholder="Nhập lệnh..."
aria-label="Tìm kiếm lệnh"
>

<div id="commandList"></div>

</div>

</div>

`;

bindEvents();
renderCommands(commands);

}

function bindEvents(){

document
.getElementById("prevBtn")
.addEventListener("click",prevImage);

document
.getElementById("nextBtn")
.addEventListener("click",nextImage);

document
.getElementById("playBtn")
.addEventListener("click",toggleSlideshow);

document
.getElementById("openPopup")
.addEventListener("click",openPopup);

document
.getElementById("commandInput")
.addEventListener("input",filterCommands);

}

/* Gallery */

function updateImage(){

document
.getElementById("galleryImage")
.src = images[currentIndex];

}

function nextImage(){

currentIndex++;

if(currentIndex >= images.length){
currentIndex = 0;
}

updateImage();

}

function prevImage(){

currentIndex--;

if(currentIndex < 0){
currentIndex = images.length - 1;
}

updateImage();

}

function toggleSlideshow(){

if(slideshow){

clearInterval(slideshow);
slideshow = null;

}
else{

slideshow = setInterval(
nextImage,
2000
);

}

}

function openPopup(){

const popup =
document.getElementById("popup");

popup.classList.remove("hidden");

document
.getElementById("popupImage")
.src = images[currentIndex];

}

/* Command Palette */

function renderCommands(list){

const container =
document.getElementById("commandList");

container.innerHTML = "";

list.forEach(command=>{

const div =
document.createElement("div");

div.className = "command-item";

div.tabIndex = 0;

div.textContent = command;

container.appendChild(div);

});

}

function filterCommands(){

const keyword =
document
.getElementById("commandInput")
.value
.toLowerCase();

const result =
commands.filter(command=>

command
.toLowerCase()
.includes(keyword)

);

renderCommands(result);

}

/* Keyboard Shortcuts */

document.addEventListener(
"keydown",
e=>{

/* Ctrl + K */

if(e.ctrlKey && e.key==="k"){

e.preventDefault();

const overlay =
document.getElementById(
"commandOverlay"
);

overlay.classList.remove(
"hidden"
);

document
.getElementById(
"commandInput"
)
.focus();

}

/* ESC */

if(e.key==="Escape"){

document
.getElementById("popup")
.classList.add("hidden");

document
.getElementById("commandOverlay")
.classList.add("hidden");

}

/* LEFT */

if(e.key==="ArrowLeft"){

prevImage();

}

/* RIGHT */

if(e.key==="ArrowRight"){

nextImage();

}

/* SPACE */

if(e.code==="Space"){

e.preventDefault();

toggleSlideshow();

}

/* 1 -> 9 */

const number =
parseInt(e.key);

if(number >=1 && number <=9){

currentIndex = number - 1;

updateImage();

}

/* ENTER COMMAND */

if(
e.key==="Enter"
&&
!document
.getElementById("commandOverlay")
.classList.contains("hidden")
){

const first =
document.querySelector(
".command-item"
);

if(first){

alert(
"Selected: " +
first.textContent
);

document
.getElementById(
"commandOverlay"
)
.classList.add("hidden");

}

}

});