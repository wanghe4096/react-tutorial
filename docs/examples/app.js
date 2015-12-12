require.config ({
  baseUrl:'node_modules',
  paths: {
    "jquery": "jquery/dist/jquery",

  }
});

require(['jquery'], function($){
  $(document).ready(function(){
    greet =  $("#h1").html()
    alert(greet)

  });
});
