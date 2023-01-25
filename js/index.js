import { Router } from "./router.js"

const router = new Router()

router.add("/","/pages/home.html")  
router.add("/universe", "/pages/universe.html")  
router.add("/exploration", "/pages/exploration.html")  
router.add(404, "/pages/404.html")

router.handle()

const body = document.querySelector('body')

function changeBackground() {
    if (window.location.pathname === '/') {
        body.classList.add("bg-pagina1");
    } else if (window.location.pathname === '/universe') {
        body.classList.add("bg-pagina2");
    } else if (window.location.pathname === '/exploration') {
        body.classList.add("bg-pagina3");
    }
}

changeBackground()

window.onpopstate = () => {
    router.handle()
    changeBackground()
}

