const  VENTA_BASEE = 5;

function calcularComision(numeroVentas,PrecioProducto) {
    let comision = 0;

    if (numeroVentas > VENTA_BASEE) {
        let ventasExtras = numeroVentas - VENTA_BASEE;
        comision = ventasExtras * (PrecioProducto *0.10);
        
    }
    return comision;
    
}

function calcular(){

    //Recuperamos propiedades de la caja de texto
    //let componenteSueldoBase = document.getElementById("txtSueldoBase");
    //let componenteVentas = document.getElementById("txtVentas");
    //let componentePrecio = document.getElementById("txtPrecio");

    //Recuperamos el valor de la caja de tetxo
    //let SueldoBaseStr = componenteSueldoBase.value;

    //let SueldoBaseStr = recuperarTexto("txtSueldoBase");
    //let numeroVentasStr = recuperarTexto("txtVentas");
    //let PrecioProductoStr = recuperarTexto("txtPrecio");


   // let numeroVentasStr = componenteVentas.value;
    //let PrecioProductoStr = componentePrecio.value;

    //convertimos el texto a numero

    let SueldoBase = recuperarFloat("txtSueldoBase");
    let numeroVentas = recuperarFloat("txtVentas");
    let PrecioProducto = recuperarFloat("txtPrecio");

    let comision = calcularComision(numeroVentas,PrecioProducto);
    let total = SueldoBase + comision;

    let spSueldoBase =document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");

    spSueldoBase.textContent = SueldoBase;
    spComision.textContent = comision;
    spTotal.textContent = total;

}
