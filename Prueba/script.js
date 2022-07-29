const buscador = document.getElementById("buscador")

buscador.addEventListener("keyup", (e) => {
    if (e.key ==="Escape") {e.target.value = ""}

    document.querySelectorAll(".articulo").forEach(fruta =>{
        fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase()) ? fruta.classList.remove("filtro") : fruta.classList.add("filtro")
        console.log(fruta)
    })
})