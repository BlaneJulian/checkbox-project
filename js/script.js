

	$(document).ready(function() {

			$("#stresstest").submit(function(event) {
					event.preventDefault();
					$("#test-response").show();
					$("input:checkbox[name=symptom]:checked").each(function(){
						var symptom = $(this).val();
						$("#test-response").append(symptom + "<br>");

					$("#stresstest").hide();
					var userResponses = [];
				  $("input:checkbox[name=symptom]:checked").each(function(){
				      var boxcount = $(this).val();
				      userResponses.push(boxcount);
				    });
					// if (boxcount >= 12) {
					// 	$("#badnews").show();
					// } elseif (boxcount >= 6) {
					// 	$("#OK").show();
					// } elseif (boxcount < 6) {
					// 	$("#goodnews").show();
					// }
					});
			});
	});
