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
ScrollReveal().reveal('.carousel', {delay: 500});
ScrollReveal().reveal('.container-precios', {delay: 500});
ScrollReveal().reveal('.burger1', {delay: 200});
ScrollReveal().reveal('.burger2', {delay: 400});
ScrollReveal().reveal('.burger3', {delay: 600});
ScrollReveal().reveal('.container-yt', {delay: 500});
ScrollReveal().reveal('.container-map', {delay: 500});
ScrollReveal().reveal('.container-footer', {delay: 500});