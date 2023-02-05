// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {

  // Display the current day in the header
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.

  var workHours = [9,10,11,12,13,14,15,16,17];
  var currentHour = dayjs().format('H');
  for (let i=0; i < workHours.length; i++) {
    var hourID = "#hour-" + workHours[i]
    if (workHours[i] < currentHour) {
      $(hourID).addClass("past")
    } else if (workHours[i] == currentHour) {
      $(hourID).addClass("present")
    } else {
      $(hourID).addClass("future")
    }
  };

   // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage.
  
  var calendarContainer = $("#calendar-container");

  calendarContainer.on("click", ".saveBtn", function(event) {
    var hourID = $(this).parent().attr("id");
    var idArray = hourID.split("-");
    var textID = "event-" + idArray[1];
    var textValue = document.getElementById(textID).value;
    localStorage.setItem(textID, textValue);
  });

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements.

  for (let i=0; i<workHours.length; i++) {
    taskID = "event-" + workHours[i]
    text = localStorage.getItem(taskID)
    document.getElementById(taskID).value = text;
  }

});