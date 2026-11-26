// Gallery modal
var imageModal = document.getElementById('imageModal');
var modalImage = document.getElementById('modalImage');

imageModal.addEventListener('show.bs.modal', function (event) {
    var image = event.relatedTarget.querySelector('img');
    modalImage.src = image.src;
    modalImage.alt = image.alt;
});
