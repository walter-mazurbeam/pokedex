
$(document).ready(function(){

  var imgurl = "http://pokeapi.co/media/img/"
  var apiurl = "http://pokeapi.co/api/v1/pokemon/"

  for(var i = 1; i <= 151; i++){
    var img = imgurl + i + ".png"
    $('.pokemon').append('<img id="' + i + '" src="'+ img +'">');
  }

  $(this).on('click', 'img', function(){
    var pokemon = apiurl + $(this).prop('id');
    $.get(pokemon, function(res){
      var html_str = "";
      html_str += "<h4>Types</h4>";
      html_str += "<ul>";
      for(var i = 0; i < res.types.length; i++) {
        html_str += "<li>" + res.types[i].name + "</li>";
      }
      html_str += "</ul>";
      $('.pokedex').html(html_str);
    }, "json");
  });

});
