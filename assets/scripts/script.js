$(function () {
    //Displays current date
    var today = moment();

    var todayFormat = today.format("dddd, MMMM Do");

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
              
                if(9 === momentTime.hour()){
                    $(this).parent().addClass("row time-block present");
                }else if(9 < momentTime.hour()){
                    $(this).parent().addClass("row time-block past");
                }else if(9 > momentTime.hour()){
                    $(this).parent().addClass("row time-block future");
                }                
                
            } else if (hour === "10AM") {
                if(10 === momentTime.hour()){
                    $(this).parent().addClass("row time-block present");
                }else if(10 < momentTime.hour()){
                    $(this).parent().addClass("row time-block past");
                }else if(10 > momentTime.hour()){
                    $(this).parent().addClass("row time-block future");
                }  
            } else if (hour === "11AM") {
                if(11 === momentTime.hour()){
                    $(this).parent().addClass("row time-block present");
                }else if(11 < momentTime.hour()){
                    $(this).parent().addClass("row time-block past");
                }else if(11 > momentTime.hour()){
                    $(this).parent().addClass("row time-block future");
                }  
            } else if (hour === "12PM") {
                if(12 === momentTime.hour()){
                    $(this).parent().addClass("row time-block present");
                }else if(12 < momentTime.hour()){
                    $(this).parent().addClass("row time-block past");
                }else if(12 > momentTime.hour()){
                    $(this).parent().addClass("row time-block future");
                }  
            } else if (hour === "1PM") {
                if(13 === momentTime.hour()){
                    $(this).parent().addClass("row time-block present");
                }else if(13 < momentTime.hour()){
                    $(this).parent().addClass("row time-block past");
                }else if(13 > momentTime.hour()){
                    $(this).parent().addClass("row time-block future");
                }  
            } else if (hour === "2PM") {
                if(14 === momentTime.hour()){
                    $(this).parent().addClass("row time-block present");
                }else if(14 < momentTime.hour()){
                    $(this).parent().addClass("row time-block past");
                }else if(14 > momentTime.hour()){
                    $(this).parent().addClass("row time-block future");
                }  
            } else if (hour === "3PM") {
                if(15 === momentTime.hour()){
                    $(this).parent().addClass("row time-block present");
                }else if(15 < momentTime.hour()){
                    $(this).parent().addClass("row time-block past");
                }else if(15 > momentTime.hour()){
                    $(this).parent().addClass("row time-block future");
                }  
            } else if (hour === "4PM") {
                if(16 === momentTime.hour()){
                    $(this).parent().addClass("row time-block present");
                }else if(16 < momentTime.hour()){
                    $(this).parent().addClass("row time-block past");
                }else if(16 > momentTime.hour()){
                    $(this).parent().addClass("row time-block future");
                }  
            } else if (hour === "5PM") {
                if(17 === momentTime.hour()){
                    $(this).parent().addClass("row time-block present");
                }else if(17 < momentTime.hour()){
                    $(this).parent().addClass("row time-block past");
                }else if(17 > momentTime.hour()){
                    $(this).parent().addClass("row time-block future");
                }  
            }
        });
    }
});