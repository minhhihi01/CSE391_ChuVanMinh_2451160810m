Câu A1 

1. Sơ đồ cây DOM
div#app
│
├── header
│   │
│   ├── h1
│   │   └── "Todo App"
│   │
│   └── nav
│       ├── a.active
│       │   └── "All"
│       ├── a
│       │   └── "Active"
│       └── a
│           └── "Completed"
│
└── main
    │
    ├── form#todoForm
    │   ├── input#todoInput
    │   └── button[type="submit"]
    │       └── "Add"
    │
    └── ul#todoList
        ├── li.todo-item
        │   └── "Learn HTML"
        │
        └── li.todo-item.completed
            └── "Learn CSS"
2. querySelector cho từng yêu cầu
Chọn <h1>
document.querySelector("h1");
Chọn input trong form
document.querySelector("#todoForm input");

hoặc

document.querySelector("#todoInput");
Chọn tất cả .todo-item
document.querySelectorAll(".todo-item");
Chọn liên kết đang hoạt động
document.querySelector("a.active");
Chọn <li> đầu tiên trong #todoList
document.querySelector("#todoList li");

hoặc

document.querySelector("#todoList li:first-child");
Chọn tất cả <a> trong <nav>
document.querySelectorAll("nav a");

Câu A2 

Sự khác nhau
innerHTML	textContent
Đọc/ghi nội dung HTML	Đọc/ghi văn bản thuần
Có thể tạo thẻ HTML	Không tạo HTML
Chậm hơn	Nhanh hơn
Có nguy cơ XSS	An toàn hơn
Ví dụ dùng innerHTML
document.querySelector("#box").innerHTML =
"<h2>Hello</h2>";

Kết quả:

<h2>Hello</h2>

được render thành tiêu đề.

Ví dụ dùng textContent
document.querySelector("#box").textContent =
"<h2>Hello</h2>";

Kết quả hiển thị nguyên văn:

<h2>Hello</h2>

không tạo thẻ HTML.

Khi nào dùng?
Dùng innerHTML

Khi cần tạo HTML động:

container.innerHTML =
"<li>Item 1</li><li>Item 2</li>";
Dùng textContent

Khi hiển thị dữ liệu người dùng:

message.textContent = username;
Vì sao innerHTML gây XSS?

innerHTML sẽ phân tích chuỗi thành HTML thật.

Nếu người dùng chèn mã độc JavaScript thì trình duyệt có thể thực thi nó.

Ví dụ:

const userInput =
'<img src=x onerror="alert(`Hacked!`)">';

result.innerHTML = userInput;

Trình duyệt tạo:

<img src="x" onerror="alert('Hacked!')">

Khi ảnh lỗi tải:

alert("Hacked!");

được chạy.

Đây là lỗ hổng XSS (Cross Site Scripting).

Cách sửa

Dùng textContent

const userInput =
document.querySelector("#search").value;

document.querySelector("#result").textContent =
userInput;

Lúc này:

<img src=x onerror="alert('Hacked!')">

chỉ hiện như văn bản bình thường, không chạy JavaScript.

Câu A3 

Code:

outer
 └── inner
      └── button

Khi click nút:

Sự kiện xảy ra theo thứ tự:

BUTTON
↓
INNER
↓
OUTER
1. Không dùng stopPropagation()

Output:

BUTTON
INNER
OUTER
2. Có dùng stopPropagation()
document.querySelector("#btn")
.addEventListener("click", (e) => {

    console.log("BUTTON");

    e.stopPropagation();
});

Khi đó sự kiện dừng tại button.

Output:

BUTTON

INNER và OUTER sẽ không được gọi.

Đáp án ngắn gọn để nộp
A1
document.querySelector("h1");

document.querySelector("#todoInput");

document.querySelectorAll(".todo-item");

document.querySelector("a.active");

document.querySelector("#todoList li:first-child");

document.querySelectorAll("nav a");
A2
innerHTML: thao tác HTML, có thể tạo thẻ HTML.
textContent: thao tác văn bản thuần.
innerHTML có thể gây XSS vì thực thi HTML/JS do người dùng nhập.
Sửa:
document.querySelector("#result").textContent =
userInput;
A3

Không dùng stopPropagation():

BUTTON
INNER
OUTER

Có stopPropagation():

BUTTON

Cau 1C

Các lỗi:

"onclick" → "click"
countDisplay = count → countDisplay.textContent = count
historyList.innerHTML = null → ""
item.remove → item.remove()
localStorage.getItem() trả về string → ép Number
Không load history từ localStorage
Mất event khi load history → dùng Event Delegation
Nên dùng textContent thay innerHTML
(Tùy yêu cầu) chặn count âm

Cau 2c

1000 listeners → tốn bộ nhớ, khó quản lý.
Event Delegation dùng 1 listener trên phần tử cha.
DocumentFragment tạo phần tử ngoài DOM rồi append một lần.
const fragment = document.createDocumentFragment();

for(let i = 0; i < 1000; i++){

    const div = document.createElement("div");

    div.textContent = `Item ${i}`;

    fragment.appendChild(div);
}

document.body.appendChild(fragment);