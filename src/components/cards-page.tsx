import {gsap} from 'gsap';
import '../styles/card-page.css'
import About from './about';
import Contact from './contact';
import Proyects from './proyects';

const CardsPage = () => {

    const scroll = (id: string) => {
        document.querySelector(id)?.scrollIntoView()
    }

    const animationContact = (id: string) => {
        const selectedId = document.querySelector(id)
        gsap.to('.left', {
            duration: 1,
            y: '-200vh',
            ease: 'power1.in'
        })
        gsap.to('.right', {
            duration: 1,
            y: '200vh',
            ease: 'power1.in'
        })
        gsap.to(selectedId, { 
            duration: 1,
            y: '-100vh',
            opacity: 1,
            xPercent: -100
        })
    }

       

    const animationProyects = (id: string) => {
        const selectedId = document.querySelector(id)
        gsap.to('.left', {
            duration: 1,
            y: '-200vh',
            ease: 'power1.in'
        })
        gsap.to('.right', {
            duration: 1,
            y: '200vh',
            ease: 'power1.in'
        })
        gsap.to(selectedId, { 
            duration: 1,
            yPercent: -100,
            opacity: 1,
        })
    }

    const animationAbout = (id: string) => {
        const selectedId = document.querySelector(id)
        gsap.to('.left', {
            duration: 1,
            y: '-200vh',
            ease: 'power1.in'
        })
        gsap.to('.right', {
            duration: 1,
            y: '200vh',
            ease: 'power1.in'
        })
        gsap.to(selectedId, { 
            duration: 1,
            yPercent: -100,
            opacity: 1,
            xPercent: 100
        })
    }

    return(
        <>
            <div id='cardsPage' className="cardsPage-container">
                <div className="left">
                    <div className="contact">
                        <div className="card border-secondary bg-transparent mb-3" style= {{listStyle: 'none'}}>
                            <div className="card-body">
                                <h5 className="card-title">Contact</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a onClick={()=> animationContact('#contact')} className="card-link">
                                    <svg style={{color:'blueviolet' }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="about">
                        <div className="card border-secondary bg-transparent mb-3" style= {{listStyle: 'none'}}>
                            <div className="card-body">
                                <h5 className="card-title">About</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a onClick={()=> animationAbout('#about')} className="card-link">
                                    <svg style={{color:'blueviolet' }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="proyects">
                        <div className="card  border-secondary bg-transparent">
                            <div className="card-body">
                                <h5 className="card-title">Proyects</h5>
                                <ul className="card-text">With supporting text below as a natural lead-in to additional content.
                                    <li className="card-text" style= {{listStyle: 'none'}}>proyect 1</li>
                                    <li className="card-text" style= {{listStyle: 'none'}}>proyect 2</li>
                                    <li className="card-text" style= {{listStyle: 'none'}}>proyect 3</li>
                                    <li className="card-text" style= {{listStyle: 'none'}}>proyect 4</li>
                                    <li className="card-text" style= {{listStyle: 'none'}}>proyect 5</li>
                                </ul>
                                <a onClick={()=> animationProyects('#proyects')} className="card-link">
                                    <svg style={{color:'blueviolet' }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<Contact />
            <About />
    <Proyects />*/}
        </>
    )
}

export default CardsPage;