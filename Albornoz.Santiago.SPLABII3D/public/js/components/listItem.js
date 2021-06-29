import {post} from '../apiXHR.js';
import {crearSpinner,quitarSpinner} from '../helpers.js';

export let list = [];
export let selected = null;

export const addItems = (listItems)=>{
    list = listItems;
}

export const addSelected = (item = null)=>{
    selected = item;
}
export const deleteItem = (id)=>{
    list = list.filter( element => element.id !== id );
    localStorage.setItem('listItem', JSON.stringify(list) );
}
export const addItem = async(item)=>{
    crearSpinner();
    await post(item);
    quitarSpinner();
}
export const nextId = ()=>{
    if(list.length === 0){
        return 1;
    }
    else{
        return parseInt(list[ list.length - 1 ].id) + 1;
    }
}