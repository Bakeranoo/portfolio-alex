import './Header.css';

const Header = () => {
    const getDate = () => {
        const date = new Date();
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString('es-ES', options);
    };

    return (
        <div className="header-container">

            <div className='header-date'>
                <p>{getDate()}</p>
                <p>VOL: 01</p>
            </div>

            <div className='line'></div>

            <div className="header">
                <h1 style={{ fontSize: '3rem' }}>Àlex's Portfolio</h1>
            </div>

            <div className='line'></div>

        </div>
    );
};

export default Header;