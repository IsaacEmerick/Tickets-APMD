const tickets = JSON.parse(localStorage.getItem("tickets"))

tickets.forEach(ticket => card(ticket))

function card(ticket){
    const content = `
        <div class="nes-container with-title is-centered">
            <p class="title">${ticket.nome}</p>
            <p>Aqui será visivel os tickets para serem "killados"</p>
            <div class="nes-container is-rounded">
                <p>${ticket.responsavel}</p>
                <p>${ticket.descricao}</p>
                <p>Ticket aberto</p>
                <progress class="nes-progress is-error" value="1" max="10"></progress>
                <button class="nes-btn is-error">Kill</button>
            </div>
        </div>
    `

    const card = document.createElement("dvi")
    card.innerHTML = content


    document.querySelector("#list-tasks").appendChild(card)
}