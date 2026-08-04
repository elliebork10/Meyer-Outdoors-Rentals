// Opens the lightbox with the clicked image
function openLightbox(imageSrc) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  modal.style.display = "block";
  modalImg.src = imageSrc;
}

// Closes the lightbox when clicked
function closeLightbox() {
  document.getElementById("imageModal").style.display = "none";
}