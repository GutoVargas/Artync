

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
                <div className="FooterAsideContent">
                    <div>
                        <img src="./images/FooterLogo.png" alt="" />
                    </div>
                    <div>
                        <img src="./images/icons/gmail.svg" alt="" />
                        <p>artyncdesenvolvedora@gmail.com</p>
                    </div>
                    <div>
                        <img src="./images/icons/whatsfooter.svg" alt="" />
                        <p>(51) 99614 5874</p>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/_artync/" target="blank"><img src="./images/icons/insta.svg" alt="" /></a>
                        <a href="https://www.linkedin.com/in/artync-desenvolvedora-808810293/" target="blank"><img src="./images/icons/linkedin.svg" alt="" /></a>
                    </div>
                </div>
                <p>Desenvolvido por Artync © 2023</p>
            </section>
        </>
    )
}

export default Footer