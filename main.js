var tmplString;

$(document).ready(function() {

var compiledTmpl = _.template(templates.userToDo);

  tmplString = "";

toDos.forEach(function(el) {
  tmplString += compiledTmpl(el);
});

$('.userToDosBox').append(repoString);


});
