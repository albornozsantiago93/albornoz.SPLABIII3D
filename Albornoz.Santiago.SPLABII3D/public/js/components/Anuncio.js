class Anuncio {
    id;
    titulo;
    transaccion;
    descripcion;
    precio;

    constructor(id,titulo,transaccion,descripcion,precio){
        this.id = id;
        this.titulo = titulo;
        this.transaccion = transaccion;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}
export class Anuncio_Auto extends Anuncio {
    num_puertas;
    num_KMS;
    potencia;

    constructor(id,titulo,transaccion,descripcion,precio,num_puertas,num_KMS,
        potencia){

        super(id,titulo,transaccion,descripcion,precio);
        this.num_puertas = num_puertas;
        this.num_KMS = num_KMS;
        this.potencia = potencia;
    }
}
