// use the api and search wikipedia in a search
//bonus: as typing show auto-complete suggestions
//random button that opens new random article

//JavaScript and maybe JQuery

// random Wikipedia article: https://en.wikipedia.org/wiki/Special:Random
// https://www.mediawiki.org/wiki/API:Main_page.

$(document).ready(function(){
  $("#search").click(function(){
    var searchTerm = $("#searchTerm").val();
      var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + searchTerm + "&callback=?";
        //https://en.wikipedia.org/w/api.php?action=query&srsearch=
        //action=query&list=search&format=json&srsearch=
      $.ajax({
        type: "GET",
        url: url,
        async: false,
        dataType: "json",
        success: function(data){
          // console.log(url);
          $("#output").html("");
          for(var i=0; i<data[1].length; i++) {
            $("#output").prepend("<li><a href= " + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
          }
        },
        error: function(errorMessage){
          console.log("Error");
        }
      });
  });
});
