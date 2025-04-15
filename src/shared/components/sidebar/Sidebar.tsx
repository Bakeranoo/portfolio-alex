import { Button } from 'primereact/button'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className='start'>
                <div className="sidebar-header">
                    <img src="/sprites/player/sprite_0.png" alt="logo" className="logo-image" />
                    <div>
                        <h2>Àlex<br/>Agustí Moncasi</h2>
                    </div>
                </div>

                <div className='sidebar-image'>
                    <img src="/sprites/map/map.png" alt="Profile" className="profile-image" />
                </div>

                <div>
                    <h3>Especializado en:</h3>
                    <p className="description">Desarrollo web y videojuegos.</p>
                </div>

                <div>
                    <h3>Resido en:</h3>
                    <p className="description">Lleida, España.</p>
                </div>
            </div>

            <div className="end">
                <div>
                    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                        <Button icon="pi pi-linkedin" className="p-button-outlined" onClick={() => window.open('https://www.linkedin.com/in/alex-agusti-moncasi/', '_blank')} />
                        <Button icon="pi pi-github" className="p-button-outlined" onClick={() => window.open('https://www.linkedin.com/in/alex-agusti-moncasi/', '_blank')} />
                        <Button icon="pi pi-envelope" className='p-button-outlined' onClick={() => window.open('https://www.linkedin.com/in/alex-agusti-moncasi/', '_blank')} />
                    </div>
                </div>
            </div>
        </div>
    )
 }

export default Sidebar