$(function () {
    //Displays current date
    var today = moment();
    var todayFormat = today.format("dddd, MMMM Do YYYY");

    $("#currentDay").text(todayFormat);

    onLoad();

    updateHourlyColorDisplay();

    //Function declaration: Save button's onclick event
    $(".saveBtn").on("click", function () {
        var hour = $(this).parent().attr("id");
        var desc = $(this).parent().children("textarea").val();
        localStorage.setItem(hour, desc);
    });

    //Function declaration: To load the saved hourly activity from local storage.
    function onLoad() {
        $(".time-block").each(function () {
            var id = $(this).attr("id");
            var desc = localStorage.getItem(id);
            if (desc != null) {
                $(this).children("textarea").val(desc);
            }
        });
    }

    //Function declaration: To update color depending on past, present and future
    function updateHourlyColorDisplay() {
        $(".hour").each(function () {

            var hour = $(this).text();
            hour = $.trim(hour);

            var momentTime = moment();
            if (hour === "9AM") {
                var time = "9:00"
                var splitTime = time.split(/:/)
                momentTime.hours(splitTime[0]).minutes(splitTime[1]).seconds(0).milliseconds(0);
            } else if (hour === "10AM") {
                var time = "10:00"
                var splitTime = time.split(/:/)
                momentTime.hours(splitTime[0]).minutes(splitTime[1]).seconds(0).milliseconds(0);
            } else if (hour === "11AM") {
                var time = "11:00"
                var splitTime = time.split(/:/)
                momentTime.hours(splitTime[0]).minutes(splitTime[1]).seconds(0).milliseconds(0);
            } else if (hour === "12PM") {
                var time = "12:00"
                var splitTime = time.split(/:/)
                momentTime.hours(splitTime[0]).minutes(splitTime[1]).seconds(0).milliseconds(0);
            } else if (hour === "1PM") {
                var time = "13:00"
                var splitTime = time.split(/:/)
                momentTime.hours(splitTime[0]).minutes(splitTime[1]).seconds(0).milliseconds(0);
            } else if (hour === "2PM") {
                var time = "14:00"
                var splitTime = time.split(/:/)
                momentTime.hours(splitTime[0]).minutes(splitTime[1]).seconds(0).milliseconds(0);
            } else if (hour === "3PM") {
                var time = "15:00"
                var splitTime = time.split(/:/)
                momentTime.hours(splitTime[0]).minutes(splitTime[1]).seconds(0).milliseconds(0);
            } else if (hour === "4PM") {
                var time = "16:00"
                var splitTime = time.split(/:/)
                momentTime.hours(splitTime[0]).minutes(splitTime[1]).seconds(0).milliseconds(0);
            } else if (hour === "5PM") {
                var time = "16:00"
                var splitTime = time.split(/:/)
                momentTime.hours(splitTime[0]).minutes(splitTime[1]).seconds(0).milliseconds(0);
            }

            if (momentTime.isBefore(today)) {
                $(this).parent().addClass("row time-block past");
            } else if (momentTime.isAfter(today)) {
                $(this).parent().addClass("row time-block future");
            } else {
                $(this).parent().addClass("row time-block present");
            }
        });
    }
});