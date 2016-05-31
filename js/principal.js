$(document).ready(function () {	
	$(".trigger").click(function(){
    var divToToggle = $( $(this).find("a").attr('href') );
    $(".toggle:visible").not(divToToggle).hide();
    divToToggle.slideToggle('fast');
  });
});