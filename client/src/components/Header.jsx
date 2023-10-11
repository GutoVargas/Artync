import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';


function Header() {
    document.body.style.overflow = 'hidden';
    document.body.scroll = "no"

    ScrollActive();
    AnimeFirst();
    AnimeBefore();

    const animationClass = 'animate';
    const animationClassBefore = 'AnimateBefore'


    function AnimeFirst() {
        setTimeout(() => {
            const WindowTop = window.pageYOffset + (window.innerHeight * 2.5 / 4);
            const target = document.querySelectorAll('[data-animefirst]');
            target.forEach(function (element) {
                if ((WindowTop) > element.offsetTop) {
                    element.classList.add(animationClass)
                } else {
                    element.classList.remove(animationClass)
                }
            })
        }, 2000);
    }

    function AnimeBefore() {
        setTimeout(() => {
            const WindowTop = window.pageYOffset + (window.innerHeight * 2.5 / 4);
            const target = document.querySelectorAll('[data-animebefore]');
            target.forEach(function (element) {
                if ((WindowTop) > element.offsetTop) {
                    element.classList.add(animationClassBefore)
                } else {
                    element.classList.remove(animationClassBefore)
                }
            })
        }, 2500);
    }

    function ScrollActive() {
        setTimeout(() => {
            document.body.style.overflow = 'auto';
            document.body.scroll = "yes"
        }, 4000);
    }

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        })
    }







    return (
        <div className="Header">
            <Navbar />
            <header data-animebefore='top'>
                <h1>Do conceito ao design, fazemos seu site ganhar vida, elevando sua presença digital a um novo patamar </h1>
                <p>Nosso foco é criar soluções digitais personalizadas que têm o poder de impulsionar o crescimento exponencial da sua empresa</p>
                {/*<Link to='/orçamento' className="Button HeaderButton" onClick={scrollTop}>
                    <p>Solicitar um orçamento</p>
                    <img src="./images/flecha.png" alt="" />
    </Link> */}

    
            </header>
        </div>

    )
}

export default Header