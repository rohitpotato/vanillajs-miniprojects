if(localStorage.getItem('tasks') !== null) {
    
    var allTasks = localStorage.getItem('tasks');
    allTasks = JSON.parse(allTasks);
    
    if(allTasks.length > 0) {
    
    console.log(allTasks);
    allTasks.map(function(task) {

            const ul = document.querySelector('ul.collection');
            const newLi = document.createElement('LI');
            const link = document.createElement('a');
            newLi.className = 'collection-item';
            link.className = 'delete-item secondary-content';
            link.id = "delLink";
            link.innerHTML = '<i class="fa fa-remove"></i>';
            const textNode = document.createTextNode(task);
            newLi.appendChild(textNode);
            newLi.appendChild(link);
            ul.append(newLi);
      });

    }

}

const form = document.querySelector('#task-form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formInput = document.querySelector('#task').value;
    if (formInput === "") {
        
        alert('Task cannot be empty');
        return;
    }
    const arr = [];
    
        const ul = document.querySelector('ul.collection');
        const newLi = document.createElement('LI');
        const link = document.createElement('a');
        newLi.className = 'collection-item';
        link.className = 'delete-item secondary-content';
        link.id = "delLink";
        link.innerHTML = '<i class="fa fa-remove"></i>';
        const textNode = document.createTextNode(formInput);
        newLi.appendChild(textNode);
        newLi.appendChild(link);
        ul.append(newLi);
    
    arr.push(formInput);
    if(localStorage.getItem('tasks') === null) {
        
        localStorage.setItem('tasks', JSON.stringify(arr));
        
    } else {
        
        const tasks = localStorage.getItem('tasks');
        const tasksJson = JSON.parse(tasks);
        tasksJson.push(formInput);
        localStorage.setItem('tasks', JSON.stringify(tasksJson));
        console.log('Tasks:', tasksJson);
    }   
    
    formInput.value = "";
});

const clearButton = document.querySelector('#clearButton');
clearButton.addEventListener('click', function(e) {
    e.preventDefault();
    const ul = document.querySelector('ul.collection');
    ul.innerHTML = '';  
    localStorage.clear();
    alert("All Tasks Cleared");
});


const filterInput = document.querySelector('#filter');
filterInput.addEventListener('keyup', function (e) {
    var ul = document.querySelector('ul.collection').children;
    ul = Array.from(ul);
    ul.forEach(function(li) {
        if(li.innerText.indexOf(e.target.value) == -1) {
           li.style.display = 'none';
        } else {
            
            li.style.display = 'block';
        }
    });
    
});

const deleteLink = document.querySelectorAll('#delLink');
    deleteLink.forEach(function(dl) {
        dl.addEventListener('click', function (e) {
            e.path[2].remove(); 
            var taskName = e.target.parentElement.parentElement.innerText;
            var allTasks = JSON.parse(localStorage.getItem('tasks'));
            var updatedTasks = allTasks.filter((task) => {
                return task !== taskName; 
            });
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    });
});


