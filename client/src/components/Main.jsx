import { Link } from 'react-router-dom';


function Main() {
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

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        })
    }

    return (
        <main>
            <section className='MainAbout'>
                <div className='MainAboutImg'>
                    <img src='./images/MainImg.png' alt='' />
                </div>
                <div className='MainAboutInfo'>
                    <h2 data-anime='top'>Quem somos</h2>
                    <h1>Nós somos as pessoas que vão te entregar resultados</h1>
                    <p data-anime='left'>Somos movidos pela entrega de resultados. Trabalhamos todos os dias incansavelmente para que todos os nossos clientes obtenham o resultado esperado, utilizando nosso expertise combinado com o uso de tecnologias inovadoras.</p>
                </div>
            </section>
            <section className='MainWorks'>
                <h1>Por que nos escolher?</h1>
                <div className='MainWorksCard' data-anime='top'>
                    <article>
                        <h1>01</h1>
                        <h2>Preço justo</h2>
                        <p>Obtenha uma presença online profissional sem comprometer seu orçamento.</p>
                    </article>
                    <article>
                        <h1>02</h1>
                        <h2>Design Intuitivo</h2>
                        <p>Proporcionamos uma experiência agradável e diferenciada para os usuários do seu site.</p>
                    </article>
                    <article>
                        <h1>03</h1>
                        <h2>Otimização</h2>
                        <p>Websites otimizados com velocidade de carregamento rápida e funcionalidades fluidas.</p>
                    </article>
                </div>
                {/*}
                    <Link to='/orçamento' className="Button MainButton" data-anime='bottom' onClick={scrollTop}>
                        <p>Solicitar orçamento</p>
                        <img src="./images/flecha.png" alt="" />
                    </Link>
    */}
            </section>
            <section className='MainServices'>
                <h1>Nossos serviços</h1>
                <div className='MainServicesArticles'>
                    <article data-anime='top'>
                        <img src='./images/MainServices1.png' alt='' />
                        <h1>Sites Dinâmicos</h1>
                        <p>Com recursos flexíveis e uma interface intuitiva, você pode atualizar conteúdos e personalizar o site de acordo com suas demandas específicas, tudo isso com facilidade.</p>
                    </article>
                    <article data-anime='top'>
                        <img src='./images/MainServices2.png' alt='' />
                        <h1>Landing Pages</h1>
                        <p>Transforme visitantes em clientes com nossas landing pages. Criadas para capturar a atenção e incentivar a ação, nossas landing pages oferecem uma experiência envolvente e persuasiva.</p>
                    </article>
                    <article data-anime='top'>
                        <img src='./images/MainServices2.png' alt='' />
                        <h1>One Page</h1>
                        <p>É a solução perfeita para transmitir sua mensagem de forma concisa e envolvente. Com todo o conteúdo em uma única página, desde a apresentação impactante até as seções informativas.</p>
                    </article>
                    <article data-anime='top'>
                        <img src='./images/MainServices2.png' alt='' />
                        <h1>Sites Institucionais</h1>
                        <p>Transmita a essência da sua marca de forma profissional e envolvente. Apresente informações relevantes e cativantes sobre a sua empresa, história, valores e serviços em um design elegante.</p>
                    </article>
                </div>
            </section>
            <section className="MainSite">
                <h1>Passo a passo na <p>criação do seu site</p></h1>
                <div className="MainSiteArticles">
                    <article data-anime='top'>
                        <div>
                            <h1>/01</h1>
                        </div>
                        <h1>Briefing</h1>
                        <p>Tudo começa com o briefing, onde mergulhamos no coração do seu negócio. Nessa etapa crucial, ouvimos atentamente suas metas, necessidades e visão para o site. Compreender sua identidade e público-alvo nos permite criar uma estratégia eficaz.</p>
                    </article>
                    <article data-anime='top'>
                        <div>
                            <h1>/02</h1>
                        </div>
                        <h1>Prototipação</h1>
                        <p>Na fase de prototipação, materializamos conceitos e ideias em representações tangíveis. Utilizando ferramentas especializadas, criamos protótipos interativos que permitem visualizar a estrutura e funcionalidade do futuro site.</p>
                    </article>
                    <article data-anime='top'>
                        <div>
                            <h1>/03</h1>
                        </div>
                        <h1>Desenvolvimento</h1>
                        <p>Com o protótipo concluído, partimos para a fase de desenvolvimento, onde nossa equipe habilidosa transforma conceitos em realidade. Combinando tecnologia e criatividade, criamos um site funcional e esteticamente atraente.</p>
                    </article>
                    <article data-anime='top'>
                        <div>
                            <h1>/04</h1>
                        </div>
                        <h1>Entrega do projeto</h1>
                        <p>Na fase de entrega do projeto, é chegada a hora de apresentar seu site totalmente desenvolvido e pronto para ser lançado. Após cuidadosos processos de design, desenvolvimento e testes, entregamos um produto finalizado e de alta qualidade.</p>
                    </article>
                </div>
            </section>
            <footer>
                <form action="/api/send-message" method="post" className='Footer'>
                    <h1 >Fale com a Artync</h1>
                    <p >Muito obrigado pela leitura do site. Caso tenha se interessado pelos nossos serviços, entre em contato conosco através do formulário abaixo. Iremos esclarecer quaisquer dúvidas sobre o nosso trabalho.</p>
                    <div className="FooterInputs">
                        <input type="text" placeholder="Nome" id='nome' name='nome' />
                        <input type="text" placeholder="E-mail" id='email' name='email' />
                        <input type="text" placeholder="Celular" id='celular' name='celular' />
                        <input type="text" placeholder="Assunto" id='assunto' name='assunto' />
                        <textarea placeholder="Mensagem" id='mensagem' name='mensagem' />
                    </div>
                    <button className="Button FooterButton" >
                        <p>Enviar mensagem</p>
                        <img src="./images/flecha.png" alt="" />
                    </button>
                </form>
            </footer>
        </main>
    )
}

export default Main