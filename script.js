const form = document.querySelector('form');
const ul = document.querySelector('#respostaValor')


form.addEventListener('submit', function (event) {
    event.preventDefault();

    const input = document.querySelector('#entradaValor');
    const value = input.value

    ul.innerHTML += `<li class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out flex justify-between">
        <span>${value}</span><button class="text-red-700 delete">X</button>
    </li>`
    input.value = ""


});


ul.onclick = function (event) {
    if (event.target.classList.contains('delete')) {
        if (confirm('Deseja apagar o item?')) {
            event.target.parentElement.remove()

        }
        return input
    }
}

