import { useEffect, useState } from 'react';
import '../../styles/portada/portada.css';
export const Portada = () => {
    const [isDesktop, setIsDesktop] = useState(false);
    const checkScreenWidth = () => {
        const screenWidth = window.innerWidth;
        setIsDesktop(screenWidth >= 768);
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
    return (
        <div id="portada">
            <video
                id='videoPortada'
                playsInline
                autoPlay
                muted
                loop
                src={isDesktop ? "/videos/portada-desktop2.mp4" : "/videos/portada-movile2.mp4"}
                width="100%"
            ></video>
            <div className='informacionPortada'>
                <div>
                    <h2>Welcome</h2>
                    <p>To your web page</p>
                </div>
            </div>
        </div>
    )
}