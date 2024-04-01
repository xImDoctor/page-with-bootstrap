
function openModal(imagePath) {
    var modalImage = document.getElementById('modalImage');
    modalImage.src = imagePath;
    var imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    imageModal.show();
}
