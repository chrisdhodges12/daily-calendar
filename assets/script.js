var timeBlocksEl  = document.getElementById("container");
var currentDayEl = document.getElementById("currentDay");
var currentTimeEl = document.getElementById("currentTime");
var saveButtonEl =  document.getElementById("saveBtn");





var save9am = document.getElementById("saveBtn9am");





var currentDay =  moment(currentDay).format('dddd');
var currentHour = moment().hour();
console.log (currentHour);

//display current day at top of page
currentDayEl.append(currentDay);


// var saveButton = addEventListener("click", )



// color code each block
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
    } else if (currentHour = 10) {
        $("#10amText").addClass("present");
    } else if (currentHour < 10)  {
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
    } else  if (currentHour < 12) {
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
    } else  if (currentHour < 16) {
        $("#4pmText").addClass("future");
    }

    if (currentHour > 17) {
        $("#5pmText").addClass("past");
    } else if (currentHour == 17) {
        $("#5pmText").addClass("present");
    } else if (currentHour < 17) {
        $("#5pmText").addClass("future");
    }
};


// function save(){

// }

// function load() {

// }

blockColor();