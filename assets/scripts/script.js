$(function () {
    //Displays current date
    var today = moment();
    var todayFormat = today.format("dddd, MMMM Do YYYY");

    // alert(today.isBefore(someDay));
    $("#currentDay").text(todayFormat);

    onLoad();

    //Save button's onclick event
    $(".saveBtn").on("click", function () {
        var hour = $(this).parent().attr("id");
        var desc = $(this).parent().children("textarea").val();
        localStorage.setItem(hour, desc);
    });

    //Function to load the saved hourly activity from local storage.
    function onLoad() {
        for (var i = 9; i <= 17; i++) {
            var lsKey = "hour-" + i;
            var desc = localStorage.getItem(lsKey);
            if (desc != null) {
                var id = "#" + lsKey;
                $(id).children("textarea").val(desc);
            }

        }

    }
});