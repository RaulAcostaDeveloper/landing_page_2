import { useEffect, useRef, useState } from 'react';
import '../../styles/header/header.css';
import { MenuDesplegable } from './menuDesplegable';
export const Header = () => {
    const [isDesktop, setIsDesktop] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const menuDesplegableRef = useRef(null);
    const checkScreenWidth = () => {
        const screenWidth = window.innerWidth;
        setIsDesktop(screenWidth >= 1024);
    };

    useEffect(() => {
        // Check initial screen width
        checkScreenWidth();

        // Add event listener to check screen width on resize
        window.addEventListener('resize', checkScreenWidth);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', checkScreenWidth);
        };
    }, []);

    const animacionAbrir = (ref) => {
        if (ref.current) {
            ref.current.animate(
                [
                    { opacity: 1, transform: 'scale(1)' },
                    { opacity: 0, transform: 'scale(0.9)' }
                ],
                {
                    duration: 500, // Duración en milisegundos
                    easing: 'ease-out',
                    fill: 'forwards' // Mantiene el estado final de la animación
                }
            );
        }
    }
    const animacionCerrar = (ref) => {
        if (ref.current) {
            ref.current.animate(
                [
                    { opacity: 0, transform: 'scale(0.9)' },
                    { opacity: 1, transform: 'scale(1)' }
                ],
                {
                    duration: 500, // Duración en milisegundos
                    easing: 'ease-out',
                    fill: 'forwards' // Mantiene el estado final de la animación
                }
            );
        }
    }
    const toggleMenu = () => {
        if (isOpenMenu) {
            animacionAbrir(menuDesplegableRef);
            setTimeout(() => {
                setIsOpenMenu(false);
            }, 500);
        } else {
            setIsOpenMenu(true);
            setTimeout(() => {
                animacionCerrar(menuDesplegableRef);
            }, 10);
        }
    }
    return (
        <header id='Header'>
            {isDesktop ?
                <>
                    <div className='burgerContainer'>
                        <label className="hamburgerMenu" onClick={toggleMenu}>
                            <input type="checkbox" onClick={(e) => e.stopPropagation()} />
                            <svg viewBox="0 0 32 32">
                                <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                                <path className="line" d="M7 16 27 16"></path>
                            </svg>
                        </label>
                    </div>
                    <div className='insideHeader direction'>
                        Open Street, Gray, Berishe, GL0 1GD <br />
                        0535 980581
                    </div>
                    <div id='headerCenter' className='insideHeader'>
                        <div>
                            <h2>Your web site</h2>
                            <span>Build just for you</span>
                        </div>
                    </div>
                    <a href='#' className='insideHeader headerButtons'>
                        Menus
                    </a>
                    <a className='insideHeader bookTable headerButtons'>
                        Book a Table
                    </a>
                </>
                :
                <>
                    <a href='#' className='insideHeader'>
                        <img src="./images/icons/llamada-telefonica.png" alt="telefono" />
                    </a>
                    <a href='#' className='insideHeader'>
                        <img src="./images/icons/alfiler.png" alt="location" />
                    </a>
                    <div id='headerCenter' className='insideHeader'>
                        <div>
                            <h2>Your web site</h2>
                            <span>Build just for you</span>
                        </div>
                    </div>
                    <div className='burgerContainer'>
                        <label className="hamburgerMenu" onClick={toggleMenu}>
                            <input type="checkbox" onClick={(e) => e.stopPropagation()} />
                            <svg viewBox="0 0 32 32">
                                <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                                <path className="line" d="M7 16 27 16"></path>
                            </svg>
                        </label>
                    </div>
                </>
            }
            {isOpenMenu &&
                <div ref={menuDesplegableRef} id='menuDesplegableRef'>
                    <MenuDesplegable />
                </div>
            }
        </header>
    )
}