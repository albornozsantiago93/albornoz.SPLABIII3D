import {addSelected} from './listItem.js';
import {get} from '../apiXHR.js';
import {crearSpinner,quitarSpinner} from '../helpers.js';

export const completeForm = async(id)=>{
    crearSpinner();
    const element = await get(id);
    quitarSpinner();
    const form = document.getElementById('myForm');
    form.titulo.value = element.titulo;
    form.descripcion.value = element.descripcion;
    form.precio.value = element.precio;
    form.puertas.value = element.num_puertas;
    form.kilometros.value = element.num_KMS;
    form.potencia.value = element.potencia;
    if(element.transaccion === 'venta'){
        form.venta.checked = true;
        form.alquiler.checked = false;
    }else{
        form.venta.checked = false;
        form.alquiler.checked = true;
    }
    const divBtns = document.getElementById('btns');
    divBtns.classList.remove('hidden');
    addSelected(element);
}

export const emptyForm = ()=>{
    const form = document.getElementById('myForm');
    form.titulo.value = '';
    form.descripcion.value = '';
    form.precio.value = '';
    form.puertas.value = '';
    form.kilometros.value = '';
    form.potencia.value = '';
}