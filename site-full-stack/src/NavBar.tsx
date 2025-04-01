import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Importando o arquivo CSS
import useStickyHeader from './useStickyHeader.ts'; // Importando o hook

const NavBar: React.FC = () => {
  const isSticky = useStickyHeader(); // Usando o hook para verificar se o cabeçalho está fixo

  return (
    <header className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="left">
        <h1 className="name">Vinícius Oliveira</h1>
      </div>
      <nav className="right">
        <Link to="/Contact.tsx" className="link">Contato</Link>
        <Link to="/Login.tsx" className="link">Login</Link>
      </nav>
    </header>
  );
};

export default NavBar;