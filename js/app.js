$(document).ready(function(){
  //when press "Enter" inside input area, clicks the Search button
  $("#searchTerm").keyup(function(event){
      if(event.keyCode == 13){
          $("#search").click();
      }
  });
  $("#search").click(function(){
    var searchTerm = $("#searchTerm").val();
      var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + searchTerm + "&callback=?";
      //AJAX call
      $.ajax({
        type: "GET",
        url: url,
        async: false,
        dataType: "json",
        success: function(data){
          // console.log(url);
          $("#output").html("");
          for(var i=0; i<data[1].length; i++) {
            $("#output").prepend("<div class='card'><div class='card-content'><ul><li><a href= " + data[3][i] + " target='_blank' >" + "<span class='card-title'>" + data[1][i] + "</span> <i class='tiny material-icons'>open_in_new</i>" + "</a><p>" + data[2][i] + "</p></li></ul></div></div>");
          }
        },
        error: function(errorMessage){
          console.log("Error: " + errorMessage);
        }
      });
  });
});
