import {createTBody} from './components/table.js';
import {completeForm} from './components/form.js';
import {filtrarVenta,filtrarAlquiler} from './components/filtros.js'
import { handleCancel, handleDelete, handleSave } from './components/btn.js';
import {list} from './components/listItem.js';

createTBody(completeForm);

const btnGuardar = document.getElementById('btnGuardar');
btnGuardar.addEventListener('click', handleSave);
const btnEliminar = document.getElementById('btnEliminar');
btnEliminar.addEventListener('click', handleDelete);
const btnCancelar = document.getElementById('btnCancelar');
btnCancelar.addEventListener('click', handleCancel);

const filtroVenta = document.getElementById('rdioTransVenta');
filtroVenta.addEventListener('click', filtrarVenta);

const filtroAlquiler = document.getElementById('rdioTransAlquiler');
filtroAlquiler.addEventListener('click', filtrarAlquiler);

const btnQuitarFiltros = document.getElementById('quitarFiltros');
btnQuitarFiltros.addEventListener('click', ()=>{
    filtroVenta.checked = false;
    filtroAlquiler.checked = false;
    createTBody(completeForm,list);
    const promedio = document.getElementById('promedio');
    promedio.value = 0;
});
