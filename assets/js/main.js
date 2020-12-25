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
  var element = document.getElementsByClassName('main-wrapper');
  if($(obj).is(":checked")){
    //alert("Yes checked");
    
    //element.classList.toggle("dark-mode");//when checked
    document.body.style.background = "#2c3e50";
    element.style.backgroundColor = "#34495e";
  }else{
    document.body.style.background = "#ecf0f1"; //when not checked
    element.style.backgroundColor = "#fff";
  }
  
}
