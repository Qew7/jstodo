function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}
 
function add() {
	if (document.getElementById('task').value.length === 0) {
    	alert('Поле пустое')
    	return
    } 
    var task = document.getElementById('task').value;
    var todos = get_todos();
    todos.push(task);
    console.log(todos);
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById('task').value = '';
 
    show();
 
    return false;
}
 
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}

function edit() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    newtodo = prompt('Изменение элемента', todos[id])
    todos.splice(id, 1, newtodo);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}

function cross() {
	var id = this.getAttribute('id');
    var todos = get_todos();
    // if (todos.splice(0, 6) == '<strike>' && todos.splice(-1, 7) == '</strike>') {
    // 	console.log()
    // 	return
    // }
    newtodo = '<strike>' + todos[id] + '</strike>'
    todos.splice(id, 1, newtodo);
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById(id).innerHTML = 'Расчеркнуть';
 
    show();
 
    return false;
}

function uncross() {
}
 
function show() {
    var todos = get_todos();
 	
 	var html = '<table align="center">';
    for(var i=0; i<todos.length; i++) {	
        html += '<tr><td><p><b>[' + ((+i) +1) + ']&nbsp;</b>' +  todos[i] + '</p></td><td>' 
        + '<button class="remove" id="' + i  + '">Удалить из списка</button><br />' 
        + '<button class="edit" id="' + i  + '">Редактировать</button><br />' 
        + '<button class="cross" id="' + i  + '">Зачеркнуть</button>'+'</td></tr>';
    };
    html += '</table>';
 
    document.getElementById('todos').innerHTML = html;
 
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
    var buttons = document.getElementsByClassName('edit');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', edit);
    };
    var buttons = document.getElementsByClassName('cross');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', cross);
    };
    var buttons = document.getElementsByClassName('uncross');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', uncross);
    };
}

document.getElementById('add').addEventListener('click',add);

show();

