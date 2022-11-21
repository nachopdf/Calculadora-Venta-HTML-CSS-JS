function componentes(){
procesador = document.getElementById(Procesador).value;
placa_madre = document.getElementById(placa_madre).value;
ram = document.getElementById(ram).value;
almacenamiento = document.getElementById(almacenamiento).value;
tarjeta_grafica = document.getElementById(tarjeta_grafica).value;
psu = document.getElementById(psu).value;
gabinete = document.getElementById(gabinete).value;
cooler = document.getElementById(cooler).value;
procesador.compra = document.getElementById(Procesador.venta).value;
placa_madre.compra = document.getElementById(placa_madre.venta).value;
ram.compra = document.getElementById(ram.venta).value;
almacenamiento.compra = document.getElementById(almacenamiento.venta).value;
tarjeta_grafica.compra = document.getElementById(tarjeta_grafica.venta).value;
psu.compra = document.getElementById(psu.venta).value;
gabinete.compra = document.getElementById(gabinete.venta).value;
cooler.compra = document.getElementById(cooler.venta).value;
procesador.provedor = document.getElementById(Procesador.provedor).value;
placa_madre.provedor = document.getElementById(placa_madre.provedor).value;
ram.provedor = document.getElementById(ram.provedor).value;
almacenamiento.provedor = document.getElementById(almacenamiento.provedor).value;
tarjeta_grafica.provedor = document.getElementById(tarjeta_grafica.provedor).value;
psu.provedor = document.getElementById(psu.provedor).value;
gabinete.provedor = document.getElementById(gabinete.provedor).value;
cooler.provedor = document.getElementById(cooler.provedor).value;
procesador.envio = document.getElementById(Procesador.envio).value;
placa_madre.envio = document.getElementById(placa_madre.envio).value;
ram.envio = document.getElementById(ram.envio).value;
almacenamiento.envio = document.getElementById(almacenamiento.envio).value;
tarjeta_grafica.envio = document.getElementById(tarjeta_grafica.envio).value;
psu.envio = document.getElementById(psu.envio).value;
gabinete.envio = document.getElementById(gabinete.envio).value;
cooler.envio = document.getElementById(cooler.envio).value;
precio.total = procesador.compra + placa_madre.compra + ram.compra + almacenamiento.compra + tarjeta_grafica.compra + psu.compra + gabinete.compra + cooler.compra;
}

console.log(precio.total)