import React from 'react';
import { FiLinkedin, FiGithub, FiTwitter, FiMail } from 'react-icons/fi';
import './footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <p>Vinícius Oliveira</p>
            </div>
            <div className="footer-center">
                <p> © {new Date().getFullYear()} Vinícius Oliveira. Todos os direitos reservados.</p>
            </div>
            <div className="footer-right">
                <a href="https://www.linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer">
                    <FiLinkedin />
                </a>
                <a href="https://github.com/seu-perfil" target="_blank" rel="noopener noreferrer">
                    <FiGithub />
                </a>
                <a href="https://twitter.com/seu-perfil" target="_blank" rel="noopener noreferrer">
                    <FiTwitter />
                </a>
                <a href="mailto:seu-email@example.com">
                    <FiMail />
                </a>
            </div>
        </footer>
    );
};

export default Footer;