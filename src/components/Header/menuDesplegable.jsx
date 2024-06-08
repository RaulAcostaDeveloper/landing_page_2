import '../../styles/header/menuDesplegable.css';
export const MenuDesplegable = () => {
    return (
        <div id="MenuDesplegable">
            <div className='inside'>
                <div className='section'>
                    <div className='divisor normalDivisor'>
                        <a href="#algo">Home</a>
                    </div>
                    <div className='divisor normalDivisor'>
                        <a href="#algo">Discover more</a>
                    </div>
                    <div className='divisor normalDivisor'>
                        <a href="#algo">Reservations</a>
                    </div>
                    <div className='divisor normalDivisor'>
                        <a href="#algo">Promotions</a>
                    </div>
                </div>
                <div className='section'>
                    <div className='divisor normalDivisor'>
                        <a href="#algo">Careers</a>
                    </div>
                    <div className='divisor normalDivisor'>
                        <a href="#algo">FAQ's</a>
                    </div>
                    <div className='divisor normalDivisor'>
                        <a href="#algo">Contact</a>
                    </div>
                </div>
                <div className='section'>
                    <div className='divisor smallDivisor'>
                        <a href="#algo">COVID-19</a>
                    </div>
                    <div className='divisor smallDivisor'>
                        <a href="#algo">Terms and conditions</a>
                    </div>
                    <div className='divisor smallDivisor'>
                        <a href="#algo">© Your web page 2024</a>
                    </div>
                </div>
            </div>
        </div>
    )
}