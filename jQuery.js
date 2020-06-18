
$("ul").on("click","li",function(){
   $(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){

   //This line will make span's parent element li to fade
   $(this).parent().fadeOut(500,function(){
   	$(this).remove();
   });
   //This line will disable parent function events to take place on this specific item
   event.stopPropagation(); 
});

$("input").on("keypress",function(event){
    
   //If keypressed is Enter which has keycode = 13
    if(event.which === 13)
    {
    	//Fetch the Input
        var inputText = $(this).val();
        
        //After fetching make that empty
        $(this).val("");

        //Append the input to the ul
        $("ul").append("<li> <span> <i class='fa fa-trash'></i> </span> " + inputText + "</li>");

    }
});

$(".fa-plus").on("click",function(){
   
   $("input").fadeToggle();
  
});