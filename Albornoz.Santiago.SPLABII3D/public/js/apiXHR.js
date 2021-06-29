
const get = (id = "")=>{
    return new Promise( (res,rej)=>{
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('readystatechange', ()=>{
            if( xhr.readyState == 4 ){
                if(xhr.status >= 200 && xhr.status < 300){
                    let datos = JSON.parse(xhr.responseText);
                    res(datos);
                }else{
                    console.log('Error: ' + xhr.status + '-' + xhr.statusText);
                }
            }
        });
        xhr.open('GET', 'http://localhost:3000/automoviles/' + id);
        xhr.send();
        });
}

const post = (data)=>{
    return new Promise( (res,rej)=>{
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('readystatechange', ()=>{
            if( xhr.readyState == 4 ){
                if(xhr.status >= 200 && xhr.status < 300){
                    let datos = JSON.parse(xhr.responseText);
                    res(datos);
                }else{
                    console.log('Error: ' + xhr.status + '-' + xhr.statusText);
                }
            }
        });
        xhr.open('POST', 'http://localhost:3000/automoviles',true );
        xhr.setRequestHeader('Content-type','application/json');
        xhr.send(JSON.stringify(data));
    });
}

const put = (data,id)=>{
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', ()=>{
        if( xhr.readyState == 4 ){
            if(xhr.status >= 200 && xhr.status < 300){
                let datos = JSON.parse(xhr.responseText);
                console.log(datos);
            }else{
                console.log('Error: ' + xhr.status + '-' + xhr.statusText);
            }
        }
    });
    xhr.open('PUT', 'http://localhost:3000/automoviles/' + id,true );
    xhr.setRequestHeader('Content-type','application/json');
    xhr.send(JSON.stringify(data));
}

const remove = (id)=>{
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', ()=>{
        if( xhr.readyState == 4 ){
            if(xhr.status >= 200 && xhr.status < 300){
                let datos = JSON.parse(xhr.responseText);
                console.log(datos);
            }else{
                console.log('Error: ' + xhr.status + '-' + xhr.statusText);
            }
        }
    });
    xhr.open('DELETE', 'http://localhost:3000/automoviles/' + id,true );
    xhr.setRequestHeader('Content-type','application/json');
    xhr.send();
}

export {
    get,
    post,
    put,
    remove
}