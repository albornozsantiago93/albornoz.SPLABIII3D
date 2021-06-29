import {get} from '../apiXHR.js';
import {crearSpinner,quitarSpinner} from '../helpers.js';
import {addItems} from './listItem.js';

export const createTBody = async(callback,list = null)=>{
    
    let listItems;
    if(list){
        listItems = list;
    }
    else{
        crearSpinner();
        listItems = await get();
        quitarSpinner();
    }
    addItems(listItems);
    const table = document.getElementById('myTable');
    
    if(table.childElementCount > 1){
        table.removeChild( table.lastChild );
    }

    const tbody = document.createElement('tbody');
    listItems.forEach( element =>{
        const tr = document.createElement('tr');
        for (const key in element) {
            const td = document.createElement('td');
            const textNode = document.createTextNode(element[key]);
            td.appendChild(textNode);
            tr.appendChild(td);
            
        }
        tr.addEventListener( 'click', (e)=>{
            callback(e.target.parentElement.firstChild.textContent);
        });
        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
}
