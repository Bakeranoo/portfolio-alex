import React, { useRef } from 'react';
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import './NavBar.css';

type NavBarProps = {
    showLogo?: boolean;
    fixed?: boolean;
}

const NavBar = ({ showLogo = false, fixed = false }: NavBarProps) => {
    const menu = useRef<Menu>(null);

    const items = [
        { label: 'Inicio', ref: '#home' },
        { label: 'Sobre mí', ref: '#about' },
        { label: 'Proyectos', ref: '#projects' },
        { label: 'Contacto', ref: '#contact' }
    ];

    const socialLinks = [
        { label: 'GitHub', icon: 'pi pi-github', command: () => window.open('https://github.com/Bakeranoo', '_blank') },
        { label: 'LinkedIn', icon: 'pi pi-linkedin', command: () => window.open('https://www.linkedin.com/in/%C3%A0lex-agust%C3%AD-moncasi-252a37245/', '_blank') },
        { label: 'Drive', icon: 'pi pi-google', command: () => window.open('https://drive.google.com/drive/folders/1ll0E85VZopMhQVoutAt9EV_jH3c9V-Hz?usp=sharing', '_blank') }
    ];

    return (
        <div className="nav-bar" style={fixed ? { position: 'sticky', top: '-1rem', left: 0 } : {}}>
            <div className={!showLogo ? "nav-bar-content-container" : "nav-bar-content-container space-b"}>
                {showLogo && (
                    <div>
                        <h4 style={{ textTransform: 'uppercase' }}>Àlex's Portfolio</h4>
                    </div>
                )}
                <div className="nav-bar-content">
                    {items.map((item, index) => (
                        <a href={item.ref} key={index} className="nav-link">{item.label}</a>
                    ))}
                    <div>
                        <Button
                            label="Links"
                            className='nav-link'
                            onClick={(event) => menu.current?.toggle(event)}
                        />
                        <Menu model={socialLinks} popup ref={menu} />
                    </div>
                </div>
            </div>
            <div className="line"></div>
        </div>
    );
};

export default NavBar;