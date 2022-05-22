var currentDayEl = document.getElementById("currentDay");

var currentDay = moment(currentDay).format("dddd");
var currentHour = moment().hour();

//display current day at top of page
currentDayEl.append(currentDay);

load();

// color code each block by time of day
function blockColor() {
  if (currentHour > 9) {
    $("#9amText").addClass("past");
  } else if (currentHour == 9) {
    $("#9amText").addClass("present");
  } else if (currentHour < 9) {
    $("#9amText").addClass("future");
  }

  if (currentHour > 10) {
    $("#10amText").addClass("past");
  } else if ((currentHour = 10)) {
    $("#10amText").addClass("present");
  } else if (currentHour < 10) {
    $("#10amText").addClass("future");
  }

  if (currentHour > 11) {
    $("#11amText").addClass("past");
  } else if (currentHour == 11) {
    $("#11amText").addClass("present");
  } else if (currentHour < 11) {
    $("#11amText").addClass("future");
  }

  if (currentHour > 12) {
    $("#12pmText").addClass("past");
  } else if (currentHour == 12) {
    $("#12pmText").addClass("present");
  } else if (currentHour < 12) {
    $("#12pmText").addClass("future");
  }

  if (currentHour > 13) {
    $("#1pmText").addClass("past");
  } else if (currentHour == 13) {
    $("#1pmText").addClass("present");
  } else if (currentHour < 13) {
    $("#1pmText").addClass("future");
  }

  if (currentHour > 14) {
    $("#2pmText").addClass("past");
  } else if (currentHour == 14) {
    $("#2pmText").addClass("present");
  } else if (currentHour < 14) {
    $("#2pmText").addClass("future");
  }

  if (currentHour > 15) {
    $("#3pmText").addClass("past");
  } else if (currentHour == 15) {
    $("#3pmText").addClass("present");
  } else if (currentHour < 15) {
    $("#3pmText").addClass("future");
  }

  if (currentHour > 16) {
    $("#4pmText").addClass("past");
  } else if (currentHour == 16) {
    $("#4pmText").addClass("present");
  } else if (currentHour < 16) {
    $("#4pmText").addClass("future");
  }

  if (currentHour > 17) {
    $("#5pmText").addClass("past");
  } else if (currentHour == 17) {
    $("#5pmText").addClass("present");
  } else if (currentHour < 17) {
    $("#5pmText").addClass("future");
  }
}

//save text to local storage
$(".saveBtn").on("click", function () {
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  localStorage.setItem(time, text);
});

//run load function when page loads
function load() {
  $("#9am .description").val(localStorage.getItem("9am"));
  $("#10am .description").val(localStorage.getItem("10am"));
  $("#11am .description").val(localStorage.getItem("11am"));
  $("#12pm .description").val(localStorage.getItem("12pm"));
  $("#1pm .description").val(localStorage.getItem("1pm"));
  $("#2pm .description").val(localStorage.getItem("2pm"));
  $("#3pm .description").val(localStorage.getItem("3pm"));
  $("#4pm .description").val(localStorage.getItem("4pm"));
  $("#5pm .description").val(localStorage.getItem("5pm"));
}

blockColor();
