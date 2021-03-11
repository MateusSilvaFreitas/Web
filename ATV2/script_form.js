$(function(){
    $(":input").css("backgroundColor", "green");
    $(":text").css("backgroundColor", "yellow");
    $(":password").css("backgroundColor", "yellow");
    $(":radio").parent().css("backgroundColor", "red")
    $(":checkbox").parent().css("backgroundColor", "red")
    $(":submit").css("backgroundColor", "orange")
    $(":reset").css("backgroundColor", "purple")
    $(":disabled").css("opacity", ".75")
    $(":checkbox:checked").parent().css("backgroundColor", "gray")

    $("#txt").val($("#select option:selected").text());
})