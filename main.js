function addTask() {
    var rahul = document.getElementById('rahul');
    var ram = rahul.value.trim();
  
    if (ram === '') {
      alert('Please enter a task.');
      return;
    }
  
    var tl = document.getElementById('tasks');
    var li = document.createElement('li');
    li.innerHTML = 
    `<span ">${ram}</span>
      <button onclick="editTask(this)">Edit</button>
      <button onclick="deleteTask(this)">Delete</button> `;
  
    tl.appendChild(li);
  
    rahul.value = '';
  }
  
  function editTask(button) {
    var li = button.parentNode;
    var span = li.querySelector('span');
    var newText = prompt('Edit task:', span.textContent);
  
    if (newText !== null) {
      span.textContent = newText;
    }
  }
  
  function deleteTask(button) {
    var li = button.parentNode;
    var tl = document.getElementById('tasks');
    tl.removeChild(li);
  }