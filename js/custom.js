$(window).on('load', function () {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	} else{
		$('body').addClass('web');
	};
	$('body').removeClass('loaded'); 
});


/* ==========================================================================
   When the window is scrolled, do
   ========================================================================== */
   
	$(window).scroll(function() {		
	
		
	});

/* ==========================================================================
   When the window is resized, do
   ========================================================================== */
   
	$(window).resize(function() {
		
		
	});


$(".fileform input").change(function() {

    var getPath = $(this).val();

    function getName (str){
        if (str.lastIndexOf('\\')){var i = str.lastIndexOf('\\')+1;}
        else{var i = str.lastIndexOf('/')+1;}
        var filename = str.slice(i);
        $("#fileformlabel").text(filename);
    }
    getName(getPath);
});

$(function(){



});