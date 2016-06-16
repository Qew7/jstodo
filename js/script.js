
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
 
function show() {
    var todos = get_todos();
 
    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">Убрать из списка</button></li>';
    };
    html += '</ul>';
 
    document.getElementById('todos').innerHTML = html;
 
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}
document.getElementById('add').addEventListener('click',add);
document.getElementById('calc').addEventListener('click',init);
show();

