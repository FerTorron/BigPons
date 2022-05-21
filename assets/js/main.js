// NOTIFICACIÓN
var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

// ScrollReveal
ScrollReveal().reveal('.navbar');
ScrollReveal().reveal('.carousel', {delay: 200});
ScrollReveal().reveal('.container-precios', {delay: 200});
ScrollReveal().reveal('.burger1', {delay: 100});
ScrollReveal().reveal('.burger2', {delay: 150});
ScrollReveal().reveal('.burger3', {delay: 200});
ScrollReveal().reveal('.container-yt', {delay: 200});
ScrollReveal().reveal('.container-map', {delay: 200});
ScrollReveal().reveal('.container-footer', {delay: 200});
