

function Footer() {


    window.addEventListener('scroll', function () {
        AnimeScroll();
    })

    const animationClass = 'animate';

    function AnimeScroll() {
        const WindowTop = window.pageYOffset + (window.innerHeight * 3.2 / 4);
        const target = document.querySelectorAll('[data-anime]');
        target.forEach(function (element) {
            if ((WindowTop) > element.offsetTop) {
                element.classList.add(animationClass)
            } else {
                element.classList.remove(animationClass)
            }
        })
    }




    return (
        <>
            <section className="FooterAside">
                <h1>Artync</h1>
                <h2>2023</h2>
            </section>
        </>
    )
}

export default Footer