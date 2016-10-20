$(document).ready(function () {
$(".My").click(function() {
	$("#m1").hide();
	$("#m2").hide();
	$("#m3").hide();
	$("#s4").hide();
	$("#s4").show();
	$("#s1").show();
	$("#s2").show();
	$("#m5").show();
	$("#s3").show();
})	
$(".Button").click(function() {
	$("#s1").hide();
	$("#s2").hide();
	$("#s3").hide();
	$("#s4").hide();
	$("#m5").hide();
	$("#m3").show();
	$("#m1").show();
	$("#m2").show();
	$("#m4").show();
})	
$(".MyButton").click(function() {
	$("#m1").show();
	$("#m2").show();
	$("#m3").show();
	$("#s4").show();
	$("#s1").show();
	$("#s2").show();
	$("#s3").show();
	$("#s4").show();
	$("#m5").show();
})	
})
