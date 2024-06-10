import '../../styles/footer/footer.css';
export const Footer = () => {
    return (
        <footer id="Footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <img src="/images/logo.png" alt="Your logo" />
                </div>
                <div className="footer-info">
                    <p>1234 Food Street, Delicious City, FL 56789</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Email: info@restaurant.com</p>
                </div>
                <div className="footer-social">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
            </div>
        </footer>
    )
}