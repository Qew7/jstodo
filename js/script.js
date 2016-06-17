function get_todos() {
    var todos = [];
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
    todos.push({text: task, striked: false})
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
    newtodo = prompt('Изменение элемента', todos[id]['text'])
    if (newtodo == 'null') {
    	newtodo = todos[id];
    	alert(1);
    }
    todos[id]['text'] = newtodo;
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}

function cross1() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    newtodo = todos[id];
    newtodo['striked'] = true;
    todos.splice(id, 1, newtodo);
    console.log(todos);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}

function uncross() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    newtodo = todos[id];
    newtodo['striked'] = false;
    todos.splice(id, 1, newtodo);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();
 
    return false;
}
 
function show() {
    var todos = get_todos();
    console.log(todos);
    var html = '<table align="center">';
    var striked = '';
    var crossed = '';
    var cross = '';
    for(var i=0; i<todos.length; i++) {	
    	striked = todos[i]['striked'] ? 'striked' : '';
    	crossed = todos[i]['striked'] ? 'Расчеркнуть' : 'Зачеркнуть';
    	cross = todos[i]['striked'] ? 'uncross' : 'cross1';
        html += '<tr id="' + i + '"><td class="'+ striked +'"><p><b>[' + ((+i) +1) + ']&nbsp;</b>' +  todos[i]['text'] + '</p></td><td>' 
        + '<button class="remove" id="' + i  + '">Удалить из списка</button><br />' 
        + '<button class="edit" id="' + i  + '">Редактировать</button><br />' 
        + '<button class="'+cross+'" id="' + i  + '">'+crossed+'</button>'+'</td></tr>';
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
    var buttons = document.getElementsByClassName('cross1');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', cross1);
    };
    var buttons = document.getElementsByClassName('uncross');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', uncross);
    };
}

document.getElementById('add').addEventListener('click',add);

show();

