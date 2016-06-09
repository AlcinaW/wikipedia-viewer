// use the api and search wikipedia in a search
//bonus: as typing show auto-complete suggestions
//random button that opens new random article

//JavaScript and maybe JQuery

// random Wikipedia article: https://en.wikipedia.org/wiki/Special:Random
// https://www.mediawiki.org/wiki/API:Main_page.

$(document).ready(function(){
  $("#search").click(function(){
    var searchTerm = $("#searchTerm").val();
      var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm + "&format=json&callback=?";

      $.ajax({
        type: "GET",
        url: url,
        async: false,
        dataType: "json",
        success: function(data){
          console.log(data[1][0]);
          console.log(data[2][0]);
          console.log(data[3][0]);
          console.log(url);
        },
        error: function(errorMessage){
          console.log("Error");
        }
      });
  });
});
