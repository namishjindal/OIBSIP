const pendingList = document.getElementById('pendingList');
const completedList = document.getElementById('completedList');

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskItem = createTaskItem(taskText);
    pendingList.appendChild(taskItem);

    taskInput.value = '';
}

function createTaskItem(text, completed = false) {
    const li = document.createElement('li');
    li.textContent = text;

    const timestamp = document.createElement('span');
    timestamp.textContent = new Date().toLocaleString();
    timestamp.style.fontSize = '0.8em';
    timestamp.style.color = '#888';
    li.appendChild(timestamp);

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.className = 'edit-btn';
    editButton.onclick = () => editTask(li);
    li.appendChild(editButton);

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.className = 'complete-btn';
    completeButton.onclick = () => completeTask(li);
    li.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';
    deleteButton.onclick = () => deleteTask(li);
    li.appendChild(deleteButton);

    if (completed) {
        completedList.appendChild(li);
        li.removeChild(completeButton);
        li.removeChild(editButton);
    }

    return li;
}

function editTask(taskItem) {
    const newText = prompt('Edit your task:', taskItem.firstChild.textContent);
    if (newText !== null && newText.trim() !== '') {
        taskItem.firstChild.textContent = newText;
    }
}

function completeTask(taskItem) {
    const newTaskItem = createTaskItem(taskItem.firstChild.textContent, true);
    completedList.appendChild(newTaskItem);
    taskItem.remove();
}

function deleteTask(taskItem) {
    taskItem.remove();
}
