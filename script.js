

document.getElementById('to-do-form').addEventListener('submit', function(event) {
    event.preventDefault();
    addTask();
});

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        return;
    }

    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');

    taskItem.textContent = taskText;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit';
    editButton.addEventListener('click', function() {
        openEditModal(taskItem);
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    taskInput.value = '';
}

// Edit Task Modal
const modal = document.getElementById('edit-modal');
const closeBtn = document.querySelector('.close');
const saveEditBtn = document.getElementById('save-edit');
let currentTaskItem;

function openEditModal(taskItem) {
    modal.style.display = 'block';
    document.getElementById('edit-task-input').value = taskItem.firstChild.textContent;
    currentTaskItem = taskItem;
}

closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

saveEditBtn.addEventListener('click', function() {
    const editedTaskText = document.getElementById('edit-task-input').value.trim();
    if (editedTaskText !== '') {
        currentTaskItem.firstChild.textContent = editedTaskText;
        modal.style.display = 'none';
    }
});
