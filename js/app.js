$(document).ready(function() {
    /* defines list item buttons */
	var checkButton = '<button class="checked--button" type="submit"  name="check"></button>'
	var removeButton = '<button class="checked--remove" type="submit" name="remove"></button>'
    
/* limits input characters in the list item */
$('input').attr('maxlength','28');

/* builds the 'added item' state */
function buildList() {
    var inputText = $('.add-items').val();
    //Dont want to add anything to the list if its empty
    if (inputText === '') {
     return false;
    }
    var inputSpan = '<span class="need--item" id='+"added-item"+'>'+ inputText +'</span>' 
    var listItem = '<li class="list--item myNewItem">'+ checkButton + inputSpan + removeButton +'</li>'
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

$("ul").on("click", '.unchecked--remove', function() {
    $(this).closest(".list--item").remove();
    console.log('the remove item button functions');
 });

/* toggles between checked and unchecked item when the check or reload icon is clicked */
$("ul").on("click", ".list--item" ,function(event) {
   //This is an array of all the list items children
   var $list_item_children = $(event.currentTarget).children(); 
   //First child is the check box
  $($list_item_children[0]).toggleClass("checked--button unchecked--button");
  //Second child is the span element
  $($list_item_children[1]).toggleClass("need--item have--item");
  //Third child is the remove button
  $($list_item_children[2]).toggleClass("checked--remove unchecked--remove");
  console.log('the check button functions');     
});

});
