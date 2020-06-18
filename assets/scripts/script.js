$(function(){
    var now = moment();
    var nowFormat = now.format("dddd, MMMM Do YYYY");
    $("#currentDay").text(nowFormat);
});