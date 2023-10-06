// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var hourNine = $("#hour-9");
var hourTen = $("#hour-10");
var hourEleven = $("#hour-11");
var hourTwelve = $("#hour-12");
var hourThirteen = $("#hour-13");
var hourFourteen = $("#hour-14");
var hourFifteen = $("#hour-15");
var hourSixteen = $("#hour-16");
var hourSeventeen = $("#hour-17");
var hourEighteen = $("#hour-18")
var hours = [hourNine, hourTen, hourEleven, hourTwelve, hourThirteen, hourFourteen, hourFifteen, hourSixteen, hourSeventeen, hourEighteen]

function getHeaderDate() {
  var currentHeaderDate = dayjs().format('dddd, MMMM D, YYYY h:mm A');
      $("#currentDay").text(currentHeaderDate)
}
console.log(this)
function timeOfDay(){
  var currentTime = dayjs().hour();
  for (var i = 0; i < hours.length; i++){
    var hourEl = hours[i].attr("data-hour");
    hourEl = parseInt(hourEl);

    if(hourEl === currentTime){
      hours[i].addClass("present");
      
    }
    if (hourEl > currentTime){
      hours[i].addClass("future");
      
    }
    if (hourEl < currentTime){
      hours[i].addClass("past");
      
    }
  }
}
$("#hour-9 .description").val(localStorage.getItem("hour-9"))
$("#hour-10 .description").val(localStorage.getItem("hour-10"))
$("#hour-11 .description").val(localStorage.getItem("hour-11"))
$("#hour-12 .description").val(localStorage.getItem("hour-12"))
$("#hour-13 .description").val(localStorage.getItem("hour-13"))
$("#hour-14 .description").val(localStorage.getItem("hour-14"))
$("#hour-15 .description").val(localStorage.getItem("hour-15"))
$("#hour-16 .description").val(localStorage.getItem("hour-16"))
$("#hour-17 .description").val(localStorage.getItem("hour-17"))
$("#hour-18 .description").val(localStorage.getItem("hour-18"))

$(".saveBtn").on("click", function(){
var text = $(this).siblings(".description").val()
var timeBlock = $(this).parent().attr("id")
localStorage.setItem(timeBlock, text)
})
 
function init() {
  var storedDay = JSON.parse(localStorage.getItem("hours"));
 }


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
//  init()
 getHeaderDate()
 timeOfDay()
