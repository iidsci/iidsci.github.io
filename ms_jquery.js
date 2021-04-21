$(function () {
    $("input[name='planing']").click(function () {
        if ($("#yes").is(":checked")) {
            $("#msSelectdate select").removeAttr("disabled");
            $("#msSelectdate select").focus();
        } else {
            $("#msSelectdate select").attr("disabled", "disabled");
        }
    });
});


$('#msEnqueryForm').submit(function(){
 	return false;
});

/****** Onlcick submit Data ******/ 
$('#submit').click(function(){
	 $.post( 
		 $('#msEnqueryForm').attr('action'),
		 $('#msEnqueryForm :input').serializeArray(),
		 function(result){
		 	$('#result').html(result);
		 }
	 );
});
