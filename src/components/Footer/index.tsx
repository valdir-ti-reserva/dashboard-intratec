import './styles.scss'

const Footer = () => {
  return (
    <footer className="footer">
        <p>
            <span className="footer__copyright">&copy;</span> 2022 Intratec Tecnologia
        </p>
        <p>
            Crafted&nbsp;
            <i className="fas fa-heart footer__icon"></i>
            by&nbsp;
            <a href="https://www.linkedin.com/in/valdirti/" target="_blank" className="footer__signature" rel="noreferrer">
                Valdir Silva
            </a>
        </p>
    </footer>
  )
}

export default Footer