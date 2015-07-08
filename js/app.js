$(document).ready(function() {
    /* defines list item buttons */
	var checkButton = '<button class="checked--button" type="submit" id="check" name="check"></button>'
	var removeButton = '<button class="checked--remove" type="submit" id="remove" name="remove"></button>'
    
/* limits input characters in the list item */
$('input').attr('maxlength','28');

/* builds the 'added item' state */
function buildList() {
    var inputText = $('.add-items').val();
    var inputSpan = '<span class="need--item" id='+"added-item"+'>'+ inputText +'</span>' 
    var listItem = '<li class="list--item" id="myNewItem">'+ checkButton + inputSpan + removeButton +'</li>'
    $('.list ul').append(listItem);
    $('.add-items').val('');
    return false;
}

/* adds the item to the list when the '+' icon is clicked */
$('#add').on("click", function() {
    buildList()
    console.log('the add item button functions');
  });

/* adds the item to the list when the 'enter/return' key is struck */
$('.add-items').keydown(function (e) {
    if (e.keyCode == 13) {
    buildList()
    console.log('the enter/return key functions');
    }
 });

/* removes the item from the list when the 'x' icon is clicked */
$("ul").on("click", '.checked--remove', function() {
    $(this).closest(".list--item").remove();
    console.log('the remove item button functions');
 });

/* toggles between checked and unchecked item when the check or reload icon is clicked */
$("ul").on("click", "#check" ,function() {
    $("#check").toggleClass("checked--button unchecked--button");
    $("#remove").toggleClass("checked--remove unchecked--remove");
    $("#added-item").toggleClass("need--item have--item");
    /*$('.checked--button').removeClass("checked--button").addClass("unchecked--button");*/
     console.log('the check button functions');     
});

});