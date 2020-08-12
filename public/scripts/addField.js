//Procurar o botão
document.querySelector("#add-time")
    //Quando clicar no botão
    .addEventListener('click', cloneField)
//Executar uma ação
function cloneField() {
    //Duplicar os campos. Que campos ? 
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    //Limpar os campos, Que campos?
    const fields = newFieldContainer.querySelectorAll('input')
    //Para cada campo, limpar 
    fields.forEach(function (field) {
        //Pegar o Field do momento
        console.log(field)
        //Pegar o Field do momento e limpar ele
        field.value =""
    })

    //Colocar na página: onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}


