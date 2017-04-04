$(document).ready(function(){
	
	$(".dropDown").hover(
		function(){
				$(".rollmenu").slideDown(400);
			  });
	$("section,header,.noRollmenu,#first_line").mouseover(
		function(){
				$(".rollmenu").slideUp(400);
			  });
		       
});
	

