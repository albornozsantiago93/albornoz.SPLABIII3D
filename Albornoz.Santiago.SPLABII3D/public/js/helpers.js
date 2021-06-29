const quitarSpinner = ()=>{
    const span = document.getElementById('spinner');
    span.innerHTML = "";
}

const crearSpinner = ()=>{
    const span = document.getElementById('spinner');
    const img = document.createElement('img');
    img.setAttribute('src', './images/spinner.gif');
    img.setAttribute('alt', 'imagen spinner');
    span.appendChild(img);
}

export {
    crearSpinner,
    quitarSpinner
}