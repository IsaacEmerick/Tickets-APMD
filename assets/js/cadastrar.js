document
    .querySelector("#btn-salvar")
    .addEventListener("click", (e) => {
        e.preventDefault()

        const form = document.querySelector("form")

        const ticket = {
            responsavel: form.resp.value,
            nome: form.titulo.value,
            descricao: form.desc.value
        }

        salvar(ticket)
    })

function salvar(ticket){
    const tickets = JSON.parse(localStorage.getItem("tickets")) || []
    tickets.push(ticket)
    localStorage.setItem("tickets", JSON.stringify(tickets))

    window.location = "index.html"
}