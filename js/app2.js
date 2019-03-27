$(document).ready(function(){
    $("#enviar").click(function(){
    $("#inicio").html("<strong> Datos de Ingreso</strong>");

    if($("#password").val()=="1234567"){
        $("#resultado").text("password correcto...!!");
    }
    else {
        $("#resultado").text("password incorrecto, ingrese nuevamente sus datos!!");
        $("#name").focus();
        $("#name").val("");
        $("#password").focus();
        $("#password").val("");
        
    }

});
});