//Check Todos
$("ul").on("click", "li", function(){
	$(this).toggleClass("done");
});

//Click on button to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove;
	});
	event.stopPropagation();
});

//Add new todo
$("input[type='text']").on("keypress", function(event){
	if(event.which === 13) {
		var newTodo = $(this).val();
		var newLi = "<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + newTodo + "</li>";
		$("ul").append(newLi);
		$(this).val("");
	}
});

//Toggle the pencil icon
$(".fa-pencil-square-o").click(function(){
	$("input[type='text']").fadeToggle();
});