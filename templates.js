var templates = {};

// to do creation template
templates.userToDo =
["<ul class='userToDo' data-id= '<%=_id%>' >",
  "<li class='toDoStatus'></li>",
  "<li class='toDoTitle'> <%= title %> </li>",
"</ul>"].join("");
