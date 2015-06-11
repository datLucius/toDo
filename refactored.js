$(document).ready(function(){
  page.init();
});

var page = {

  url: "http://tiy-fee-rest.herokuapp.com/collections/lucius",

  init: function () {
    page.initStyling();
    page.initEvents();
  },
  initStyling: function () {
    page.loadToDos();
  },
  initEvents: function () {
    $('.arrowBox').on('click', page.addToDo);
  },

  addOneToDoToDOM: function (toDo) {
      page.loadTemplate("userToDo", toDo, $('.toDoBox > .userToDosBox'));
  },
  addAllToDosToDOM: function (toDoCollection) {
    _.each(toDoCollection, page.addOneToDoToDOM);
  },

  loadToDos: function() {
    $.ajax({
      url: page.url,
      method: 'GET',
      success: function (data) {
        console.log(data);
        page.addAllToDosToDOM(data);
      },
      error: function (err) {
      }
    });
  },

  createToDo: function (newToDo) {
    $.ajax ({
      url: page.url,
      method: 'POST',
      data: newToDo,
      success: function (data) {

        page.addOneToDoToDOM(data);
        console.log("success: ", data);
      },
      error: function (err) {
        console.log("error: ", err);
      }
    });
  },

  updateToDo: function (editedToDo, toDoId) {

    $.ajax({
      url: page.url + '/' + toDoId,
      method: 'PUT',
      data: editedToDo,
      success: function (data) {
        $('.userToDosBox').html('');
        page.loadToDos();

      },
      error: function (err) {}
    });

  },
  addToDo: function (event) {
    event.preventDefault();
    newToDo = {
      title: $('input').val(),
      id: $('.toDoBox > .userToDosBox').data('id'),
    };
    page.createToDo(newToDo);
    $('input').val("");
  },


  loadTemplate: function (tmplName, data, $target) {
    var compiledTmpl = _.template(page.getTemplate(tmplName));

    $target.append(compiledTmpl(data));
  },

  getTemplate: function (name) {
    return templates[name];
  }
};
