// hour variables selecting each time block
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
// gets current date and time to display on page and refrence for time colorization
function getHeaderDate() {
  var currentHeaderDate = dayjs().format('dddd, MMMM D, YYYY h:mm A');
      $("#currentDay").text(currentHeaderDate)
}
// this function selects each time block and gives it its specific time display class based on the current time of the users device
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
// this gets all the information from each time block and saves it to the local storage 
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
// this function is called on a click function and saves and appends the information inputed based on wich save button is pressed
$(".saveBtn").on("click", function(){
var text = $(this).siblings(".description").val()
var timeBlock = $(this).parent().attr("id")
localStorage.setItem(timeBlock, text)
})
 
function init() {
  var storedDay = JSON.parse(localStorage.getItem("hours"));
 }


 getHeaderDate()
 timeOfDay()
