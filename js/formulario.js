$(document).ready(function(){
    $("#btn_guardar").click(function(){
   $("#inicio").html("<b> Datos de Ingreso</b>");
   $("#name").focus();
   $("#name").val("");
   
   $("#age").val("");
    
    });
});
function ordenar() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    /*Haga un bucle que continuará hasta que no se haya hecho ningún cambio:*/
    while (switching) {
      //Comience diciendo: no se hace cambio:
      switching = false;
      rows = table.rows;
      /*Recorrer todas las filas de la tabla (excepto la
       primero, que contiene encabezados de tabla):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //Comience diciendo que no debería haber cambio:
        shouldSwitch = false;
        /*Consigue los dos elementos que quieres comparar,
         uno de la fila actual y uno de la siguiente:*/
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        //Compruebe si las dos filas deben cambiar de lugar:
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //Si es así, marque como interruptor y rompa el ciclo:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /*Si un interruptor ha sido marcado, haga el interruptor
         y marca que se ha realizado un cambio:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      };
    };
  };
  
function guardar(){
   
    var nom = document.getElementById("name").value;
    var age = document.getElementById("age").value;

    var fila="<tr><td>"+nom+"</td><td>"+age;

    var btn = document.createElement("tr");
   	btn.innerHTML=fila;
    document.getElementById("tablita").append(btn);
};
function solonumeros(e){
    key=e.keycode || e.which; /* almacena los datos del teclado */
    teclado=String.fromCharCode(key);
    ageinput="0123456789";
    especiales="8-37-38-46";
    teclado_especial=false;
    for(var i in especiales){
        if(key==especiales[i]){
            teclado_especial=true;
        }
    }
    if(ageinput.indexOf(teclado)==-1 && !teclado_especial){
        return false;
    }


};

