var header = document.getElementById("masthead");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("header-sticky");
  } else {
    header.classList.remove("header-sticky");
  }
}

jQuery(".wpcf7-submit").click(function(){
  console.log(jQuery(".wpcf7-form").hasClass("invalid"));
  setTimeout(function(){
  if(jQuery(".wpcf7-form").hasClass("invalid")){
  jQuery(".wpcf7-form").scrollTop(300); 
  }
  },9000);
  });

  jQuery(".skills-wrap.parent").click(function(){
    jQuery(this).siblings().removeClass('active');
    jQuery(this).addClass('active');
    var tech = jQuery(this).attr('data-filter');
    jQuery(".skills-list.secondary").each(function(){
    var curr_id = jQuery(this).attr('id');
    if(curr_id == tech){
    jQuery(this).css('display','flex');
    }else {
    jQuery(this).css('display','none');
    }
    }); 
    });

    jQuery(".skills-wrap.parent").each(function(){
      jQuery(this).click(function(){
      console.log('user...');
      jQuery('html, body').animate({
          scrollTop: jQuery(".secondary").offset().top
      }, 2000);
      return false;
  });
});


