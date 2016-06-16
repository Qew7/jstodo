
function init (){
	op=prompt('Операция')
	first=prompt('Первоечисло')
	second=prompt('Второечисло')
	switch(op){
			case'+':
			result= +(first)+ +(second)
			break
			case'-':
				result = first - second
				break
			case'*':
				result = first * second
				break
			case'/':
				result = first / second
				break	
			case'\\':
				result = first / second
				break
			default:
				result = 'Операция неопределена'
				break
	}
	document.getElementById('placeForText').innerHTML=first + op + second + '=' + result
}

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
    localStorage.setItem('todo', JSON.stringify(todos));
 
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
	console.log(1234)
}

function uncross() {
}
 
function show() {
    var todos = get_todos();
 	
 	var html = '<table>';
    for(var i=0; i<todos.length; i++) {	
        html += '<tr><td><p><b>[' + ((+i) +1) + ']&nbsp;</b>' +  todos[i] + '</p></td><td>' 
        + '<button class="remove" id="' + i  + '">Убрать из списка</button>' 
        + '<button class="edit" id="' + i  + '">Редактировать</button>' 
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

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

document.getElementById('add').addEventListener('click',add);
document.getElementById('calc').addEventListener('click',init);

show();

