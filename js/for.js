
$(document).ready(function(){
    $("#enviar").click(function(){
   $("#inicio").html("<strong> Datos de Ingreso</strong>");

   if($("#password").val()=="1234567"){
       $("#resultado").text("Pasword Correcto");
       $("#inicio").css("<strong> Datos de Ingreso</strong>");
      
   }
   else {
       $("#resultado").text("Pasword incorrecto, cambie sus datos");
       $("#inicio").css("<strong> Datos de Ingreso</strong>");
       $("#name").focus();
       $("#name").val("");
       
       $("#password").val("");  
   }
       

});


});
