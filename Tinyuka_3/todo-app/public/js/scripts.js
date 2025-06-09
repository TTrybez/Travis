document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    // Function to fetch tasks from the server
    function fetchTasks() {
        fetch('/tasks')
            .then(response => response.json())
            .then(data => {
                taskList.innerHTML = '';
                data.forEach(task => {
                    const li = document.createElement('li');
                    li.textContent = task.title;
                    li.className = task.status;

                    const completeButton = document.createElement('button');
                    completeButton.textContent = 'Complete';
                    completeButton.onclick = () => completeTask(task._id);

                    const deleteButton = document.createElement('button');
                    deleteButton.textContent = 'Delete';
                    deleteButton.onclick = () => deleteTask(task._id);

                    li.appendChild(completeButton);
                    li.appendChild(deleteButton);
                    taskList.appendChild(li);
                });
            })
            .catch(error => console.error('Error fetching tasks:', error));
    }

    // Function to create a new task
    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskTitle = document.getElementById('task-title').value;

        fetch('/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: taskTitle })
        })
        .then(response => response.json())
        .then(data => {
            fetchTasks();
            taskForm.reset();
        })
        .catch(error => console.error('Error creating task:', error));
    });

    // Function to mark a task as completed
    function completeTask(taskId) {
        fetch(`/tasks/${taskId}/complete`, {
            method: 'PATCH'
        })
        .then(response => response.json())
        .then(data => {
            fetchTasks();
        })
        .catch(error => console.error('Error completing task:', error));
    }

    // Function to delete a task
    function deleteTask(taskId) {
        fetch(`/tasks/${taskId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(data => {
            fetchTasks();
        })
        .catch(error => console.error('Error deleting task:', error));
    }

    // Initial fetch of tasks
    fetchTasks();
});