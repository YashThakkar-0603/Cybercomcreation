document.addEventListener('DOMContentLoaded', function() {
    var taskForm = document.getElementById('task-form');
    let editId = null;
    var taskInput = document.getElementById('task-input');
    var dueDateInput = document.getElementById('due-date');
    var prioritySelect = document.getElementById('priority');
    var taskList = document.getElementById('task-list');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function displayTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task) => {
            var tr = document.createElement('tr');

            var dueDate = new Date(task.dueDate);
            var currentDate = new Date();
            var timeDifference = dueDate.getTime() - currentDate.getTime();
            var daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

            let daysRemainingText = '';
            if (daysDifference > 0) {
                daysRemainingText = `${daysDifference} day${daysDifference === 1 ? '' : 's'} remaining`;
            } else if (daysDifference === 0) {
                daysRemainingText = 'Due today';
            } else {
                daysRemainingText = 'Overdue';
            }

            tr.innerHTML = `
                <td>${task.name}</td>
                <td>${task.dueDate}</td>
                <td>${daysRemainingText}</td>
                <td>${task.priority}</td>
                <td>
                    <button style="background-color: #04AA6D;" onclick="editTask('${task.id}')">Edit</button>
                    <button onclick="deleteTask('${task.id}')">Delete</button>
                </td>
            `;
            taskList.appendChild(tr);
        });
    }
    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        var taskName = taskInput.value.trim();
        var dueDate = dueDateInput.value;
        var priority = prioritySelect.value;
        if (taskName === '') {
            alert('Task name cannot be blank.');
            return;
        } if (tasks.some(task => task.name === taskName && task.id !== editId)) {
            alert('Task name already exists. Please enter a unique name.');
            return;
        }

        var selectedDate = new Date(dueDate);
        var currentDate = new Date();
        if (selectedDate < currentDate) {
            alert('Due date cannot be in the past.');
            return;
        }

        if (editId) {
            var existingTask = tasks.find(task => task.id === editId);
            if (!existingTask) {
                alert('Task not found.');
                return;
            }
            existingTask.name = taskName;
            existingTask.dueDate = dueDate;
            existingTask.priority = priority;
            editId = null;
        } else {
            var newTask = { id: Date.now().toString(), name: taskName, dueDate: dueDate, priority: priority };
            tasks.push(newTask);
        }

        localStorage.setItem('tasks', JSON.stringify(tasks));
        displayTasks();
        taskInput.value = '';
        dueDateInput.value = '';
        prioritySelect.value = '';
    });

    window.editTask = function(id) {
        editId = id;
        var task = tasks.find(task => task.id === id);
        if (task) {
            taskInput.value = task.name;
            dueDateInput.value = task.dueDate;
            prioritySelect.value = task.priority;
        } else {
            alert('Task not found.');
        }
    };

    window.deleteTask = function(id) {
        if (confirm('Are you sure you want to delete this task?')) {
            tasks = tasks.filter(task => task.id !== id);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            displayTasks();
        }
    };

    displayTasks();
});
