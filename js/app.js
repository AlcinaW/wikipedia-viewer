// use the api and search wikipedia in a search
//bonus: as typing show auto-complete suggestions
//random button that opens new random article

//JavaScript and maybe JQuery

// random Wikipedia article: https://en.wikipedia.org/wiki/Special:Random
// https://www.mediawiki.org/wiki/API:Main_page.

$(document).ready(function(){

  $("#searchTerm").keyup(function(event){
      if(event.keyCode == 13){
          $("#search").click();
      }
  });
  $("#search").click(function(){
    var searchTerm = $("#searchTerm").val();
      var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + searchTerm + "&callback=?";
      $.ajax({
        type: "GET",
        url: url,
        async: false,
        dataType: "json",
        success: function(data){
          // console.log(url);
          $("#output").html("");
          for(var i=0; i<data[1].length; i++) {
            $("#output").prepend("<div class='card'><div class='card-content'><ul><li><a href= " + data[3][i] + ">" + "<span class='card-title'>" + data[1][i] + "</span><i class='tiny material-icons'>open_in_new</i>" + "</a><p>" + data[2][i] + "</p></li></ul></div></div>");
          }
        },
        error: function(errorMessage){
          console.log("Error");
        }
      });
  });
});
