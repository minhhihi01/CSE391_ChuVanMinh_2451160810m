const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const todoCount = document.getElementById("todoCount");
const clearCompletedBtn = document.getElementById("clearCompleted");
const filterBtns = document.querySelectorAll(".filter-btn");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all";

function saveTodos() {
    localStorage.setItem(
        "todos",
        JSON.stringify(todos)
    );
}

function updateCount() {
    const remaining = todos.filter(
        todo => !todo.completed
    ).length;

    todoCount.textContent =
        `${remaining} mục còn lại`;
}

function createTodoElement(todo) {

    const li = document.createElement("li");
    li.dataset.id = todo.id;

    const span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = todo.text;

    if (todo.completed) {
        span.classList.add("completed");
    }

    const deleteBtn =
        document.createElement("button");

    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "❌";

    li.appendChild(span);
    li.appendChild(deleteBtn);

    return li;
}

function renderTodos() {

    todoList.innerHTML = "";

    let filteredTodos = todos;

    if (currentFilter === "active") {
        filteredTodos =
            todos.filter(todo => !todo.completed);
    }

    if (currentFilter === "completed") {
        filteredTodos =
            todos.filter(todo => todo.completed);
    }

    filteredTodos.forEach(todo => {
        todoList.appendChild(
            createTodoElement(todo)
        );
    });

    updateCount();
}

function addTodo() {

    const text = todoInput.value.trim();

    if (!text) return;

    todos.push({
        id: Date.now(),
        text,
        completed: false
    });

    saveTodos();
    renderTodos();

    todoInput.value = "";
}

addBtn.addEventListener("click", addTodo);

todoInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        addTodo();
    }
});

/* EVENT DELEGATION */

todoList.addEventListener("click", e => {

    const li = e.target.closest("li");

    if (!li) return;

    const id = Number(li.dataset.id);

    /* Xóa */

    if (
        e.target.classList.contains(
            "delete-btn"
        )
    ) {
        todos = todos.filter(
            todo => todo.id !== id
        );

        saveTodos();
        renderTodos();
        return;
    }

    /* Toggle completed */

    if (
        e.target.classList.contains(
            "todo-text"
        )
    ) {
        const todo = todos.find(
            todo => todo.id === id
        );

        todo.completed =
            !todo.completed;

        saveTodos();
        renderTodos();
    }
});

/* Double click edit */

todoList.addEventListener(
    "dblclick",
    e => {

        if (
            !e.target.classList.contains(
                "todo-text"
            )
        ) return;

        const span = e.target;
        const li = span.closest("li");
        const id = Number(li.dataset.id);

        const input =
            document.createElement("input");

        input.type = "text";
        input.value = span.textContent;
        input.className = "edit-input";

        li.replaceChild(input, span);

        input.focus();

        input.addEventListener(
            "keydown",
            event => {

                if (
                    event.key === "Enter"
                ) {

                    const todo =
                        todos.find(
                            t => t.id === id
                        );

                    todo.text =
                        input.value.trim() ||
                        todo.text;

                    saveTodos();
                    renderTodos();
                }
            }
        );
    }
);

/* Filters */

filterBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        filterBtns.forEach(b =>
            b.classList.remove("active")
        );

        btn.classList.add("active");

        currentFilter =
            btn.dataset.filter;

        renderTodos();
    });
});

/* Clear Completed */

clearCompletedBtn.addEventListener(
    "click",
    () => {

        todos = todos.filter(
            todo => !todo.completed
        );

        saveTodos();
        renderTodos();
    }
);

renderTodos();