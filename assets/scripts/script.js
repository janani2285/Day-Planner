$(function () {
    //Displays current date
    var today = moment();
    var time = moment().unix;
    // alert(today);
    //var fortime =time.format("hh:mm");
    //alert(fortime);
    var todayFormat = today.format("dddd, MMMM Do YYYY");

    // alert(today.isBefore(someDay));
    $("#currentDay").text(todayFormat);

    onLoad();

    updateHourlyColorDisplay();

    //Save button's onclick event
    $(".saveBtn").on("click", function () {
        var hour = $(this).parent().attr("id");
        var desc = $(this).parent().children("textarea").val();
        localStorage.setItem(hour, desc);
    });

    //Function to load the saved hourly activity from local storage.
    function onLoad() {
        $(".time-block").each(function () {
            var id = $(this).attr("id");

            var desc = localStorage.getItem(id);

            if (desc != null) {
                id = "#" + id;
                $(id).children("textarea").val(desc);
            }
        });





    }

    function updateHourlyColorDisplay() {

    }
});