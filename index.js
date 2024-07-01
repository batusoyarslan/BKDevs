const upAnimationElements = document.querySelectorAll("#animation-u, #animation-d, #animation-r, #animation-l, #pop-up");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("show", entry.isIntersecting);
            if (entry.isIntersecting) observer.unobserve(entry.target);
        });
    },
    {
        threshold: 0.3,
    }
);

upAnimationElements.forEach(element => {
    observer.observe(element);
});



// $(window).on('load', function() {
//    setTimeout(function() {
//        $(".loader").addClass('hidden');
//        $(".loader").fadeOut(1000);
//        console.log('Loader hidden class added'); // Konsolda bu mesajı kontrol edin
//        $(".container").fadeIn(1000);
//    }, 2000); // 2 saniye bekler
// });