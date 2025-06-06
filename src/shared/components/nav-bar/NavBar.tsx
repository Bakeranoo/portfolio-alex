import { Button } from 'primereact/button';
import { useState } from 'react';
import './NavBar.css';

const NavBar = () => {

    const [currentSelectedButton, setCurrentSelectedButton] = useState(0);
    const items = [
        { label: 'Inicio', icon: 'pi pi-home', command: () => { window.location.hash = '#home'; } },
        { label: 'Sobre mí', icon: 'pi pi-user', command: () => { window.location.hash = '#about'; } },
        { label: 'Proyectos', icon: 'pi pi-briefcase', command: () => { window.location.hash = '#projects'; } },
        { label: 'Contacto', icon: 'pi pi-envelope', command: () => { window.location.hash = '#contact'; } }
    ];

    const handleClickButton = (index: number, event: React.MouseEvent<HTMLButtonElement>) => {
        const buttons = document.querySelectorAll('.nav-button') as NodeListOf<HTMLButtonElement>;
        buttons[currentSelectedButton].classList.remove('selected');
        buttons[index].classList.add('selected');

        setCurrentSelectedButton(index);
        const item = items[index];
    }

    return (
        <div className="nav-bar">
            <div className='nav-bar-content'>
                {items.map((item, index) => (
                    <Button key={index} className="nav-button" icon={item.icon} label={item.label} onClick={(event) => handleClickButton(index, event)}/>
                ))}
            </div>
        </div>
    );
};

export default NavBar;