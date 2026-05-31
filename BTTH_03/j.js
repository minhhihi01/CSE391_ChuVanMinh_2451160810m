let tasks =
JSON.parse(
    localStorage.getItem("tasks")
) || [];

let editId = null;

const taskList =
document.getElementById("taskList");

const modal =
document.getElementById("modal");

const taskForm =
document.getElementById("taskForm");

const addTaskBtn =
document.getElementById("addTaskBtn");

const closeBtn =
document.getElementById("closeBtn");

const message =
document.getElementById("message");

addTaskBtn.addEventListener(
    "click",
    openModal
);

closeBtn.addEventListener(
    "click",
    closeModal
);

taskForm.addEventListener(
    "submit",
    saveTask
);

function openModal(){
    modal.classList.remove("hidden");
}

function closeModal(){

    modal.classList.add("hidden");

    taskForm.reset();

    editId = null;

    document.getElementById(
        "modalTitle"
    ).textContent = "Thêm công việc";
}

function saveTasks(){

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}

function showMessage(text){

    message.textContent = text;

    setTimeout(()=>{
        message.textContent = "";
    },2000);
}

function saveTask(e){

    e.preventDefault();

    const title =
    document.getElementById("title").value;

    const description =
    document.getElementById("description").value;

    const deadline =
    document.getElementById("deadline").value;

    const priority =
    document.getElementById("priority").value;

    if(editId){

        const task =
        tasks.find(
            task => task.id === editId
        );

        task.title = title;
        task.description = description;
        task.deadline = deadline;
        task.priority = priority;

        showMessage(
            "Cập nhật thành công"
        );

    }else{

        tasks.push({
            id: Date.now(),
            title,
            description,
            deadline,
            priority,
            completed:false
        });

        showMessage(
            "Thêm công việc thành công"
        );
    }

    saveTasks();

    renderTasks();

    updateTaskSummary();

    closeModal();
}

function renderTasks(){

    taskList.innerHTML = "";

    if(tasks.length === 0){

        taskList.innerHTML =
        "<p>Chưa có công việc nào.</p>";

        return;
    }

    tasks.forEach(task => {

        const div =
        document.createElement("div");

        div.className =
        task.completed
        ? "task completed"
        : "task";

        div.innerHTML = `
            <h3>${task.title}</h3>

            <p>${task.description}</p>

            <p>Hạn: ${task.deadline}</p>

            <p>Ưu tiên: ${task.priority}</p>

            <div class="task-actions">

                <button
                    class="toggle-btn"
                    data-id="${task.id}"
                >
                    ${
                        task.completed
                        ? "Bỏ hoàn thành"
                        : "Hoàn thành"
                    }
                </button>

                <button
                    class="edit-btn"
                    data-id="${task.id}"
                >
                    Sửa
                </button>

                <button
                    class="delete-btn"
                    data-id="${task.id}"
                >
                    Xóa
                </button>

            </div>
        `;

        taskList.appendChild(div);
    });
}

taskList.addEventListener(
    "click",
    function(e){

        const id =
        Number(
            e.target.dataset.id
        );

        if(
            e.target.classList.contains(
                "delete-btn"
            )
        ){

            if(
                confirm(
                    "Bạn có chắc muốn xóa?"
                )
            ){

                tasks =
                tasks.filter(
                    task => task.id !== id
                );

                saveTasks();

                renderTasks();

                updateTaskSummary();

                showMessage("Đã xóa");
            }
        }

        if(
            e.target.classList.contains(
                "edit-btn"
            )
        ){

            const task =
            tasks.find(
                task => task.id === id
            );

            editId = id;

            document.getElementById(
                "title"
            ).value = task.title;

            document.getElementById(
                "description"
            ).value = task.description;

            document.getElementById(
                "deadline"
            ).value = task.deadline;

            document.getElementById(
                "priority"
            ).value = task.priority;

            document.getElementById(
                "modalTitle"
            ).textContent =
            "Cập nhật công việc";

            openModal();
        }

        if(
            e.target.classList.contains(
                "toggle-btn"
            )
        ){

            const task =
            tasks.find(
                task => task.id === id
            );

            task.completed =
            !task.completed;

            saveTasks();

            renderTasks();

            updateTaskSummary();
        }
    }
);

function updateTaskSummary(){

    document.getElementById(
        "totalTasks"
    ).textContent = tasks.length;

    document.getElementById(
        "completedTasks"
    ).textContent =
    tasks.filter(
        task => task.completed
    ).length;

    document.getElementById(
        "pendingTasks"
    ).textContent =
    tasks.filter(
        task => !task.completed
    ).length;
}

renderTasks();
updateTaskSummary();