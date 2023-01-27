const body = document.querySelector('body')

function changeBackGround(){
    if(window.location.pathname === "/"){
        body.classList.add('bg-pagina1')
    }else if(window.location.pathname === "/universe"){
        body.classList.add('bg-pagina2')
    }else if(window.location.pathname === "/exploration"){
        body.classList.add('bg-pagina3')
    }
}

export default changeBackGround;
changeBackGround()