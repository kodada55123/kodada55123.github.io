

 $("#button").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
        $("#div4").fadeIn(5000);
    });
$(document).ready(function()
{
  $top_height=$("div[data-role=header]").height();
  $bottom_height=$("div[data-role=footer]").height();
  $body_height=$(window).height()-$top_height-$bottom_height;

  
  $body_height=$body_height-10;
  $body_height=$body_height+"px";
  $("div[data-role=metro_body]").width("100%").height($body_height);

});
