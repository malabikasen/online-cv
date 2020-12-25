jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
   
    

});

function darkModeToggle(obj) {
  if($(obj).is(":checked")){
    alert("Yes checked");
    //var element = document.getElementById('body');
    //element.classList.toggle("dark-mode");//when checked
    //document.body.style.background = "black";
  }else{
    //document.body.style.background = "white"; //when not checked
    alert("Yes checked");
  }
  
}
