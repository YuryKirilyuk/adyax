$(window).on('load', function () {
	$('body').removeClass('loaded');
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
