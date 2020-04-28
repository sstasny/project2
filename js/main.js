




$(function () {
    $(".button").click(function () {
        $(".inner").empty();
        $("form").on("submit", function (e){
            e.preventDefault();
            getData();
        });
    });
});


function getData() {

    var input = $(".search").val();
    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q="+input+"+&api_key=1XcC9qSUbavEbZ998aLqngF5f2djjMxT&limit=30");

xhr.done(function(response) {
    console.log("success got data", response);

var jiffs = response.data;

for (i in jiffs)

{
    $('.inner').append("<img src='"+jiffs[i].images.original.url+"' style='height:200px; width:200px;'/>")
}
    });



}
