//Scripts do slide principal
var slide_hero = new Swiper(".slide-hero", {
    effect: "fade",
    pagination: {
        el: ".slide-hero .main-area .area-explorer .swiper-pagination",
    }
});


const cardPokemon = document.querySelectorAll('.js-open-details-pokemon');
const btnCloseModal = document.querySelector('.js-close-modal-details-pokemon');
const btnDropdownSelect = document.querySelector('.js-open-select-custom');

function openDetailsPokemon() {
    document.documentElement.classList.add('open-modal')
}

function closeDetailsPokemon() {
    document.documentElement.classList.remove("open-modal")
}

cardPokemon.forEach(card => {
    card.addEventListener('click', openDetailsPokemon)
})

btnCloseModal.addEventListener('click', closeDetailsPokemon)

btnDropdownSelect.addEventListener('click', () => {
    btnDropdownSelect.parentElement.classList.toggle('active');
})