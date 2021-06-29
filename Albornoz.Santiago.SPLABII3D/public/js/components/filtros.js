import {createTBody} from './table.js';
import {completeForm} from './form.js';
import {list,addItems} from './listItem.js';
import {get} from '../apiXHR.js'

export const filtrarVenta = ()=>{
    const promedio = document.getElementById('promedio');
    promedio.value = 0;
    const listVentas = list.filter( e => e.transaccion == 'venta' );
    listVentas.forEach( e => {
        promedio.value =  (parseInt(promedio.value) + parseInt(e.precio))/ parseInt(listVentas.length);
    } );

    createTBody(completeForm,listVentas);
    get().then( data => addItems(data) );
}

export const filtrarAlquiler = ()=>{
    const promedio = document.getElementById('promedio');
    promedio.value = 0;
    const listAlquiler = list.filter( e => e.transaccion == 'alquiler' );
    listAlquiler.forEach( e => {
        promedio.value =  (parseInt(promedio.value) + parseInt(e.precio))/ parseInt(listAlquiler.length);
    } );
    createTBody(completeForm,listAlquiler);
    get().then( data => addItems(data) );
}

