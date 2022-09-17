const openModal = document.getElementById('open_modal');
const modalContainer = document.getElementById('modal_container');
const closeModal = document.getElementById('close-modal');
const modalBox = document.getElementById("modal");

openModal.addEventListener('click', function () {
    modalContainer.classList.add("visible");
    modalBox.classList.add("ani");
})

closeModal.addEventListener('click', function () {
    modalContainer.classList.remove("visible");
    modalBox.classList.remove("ani");
})