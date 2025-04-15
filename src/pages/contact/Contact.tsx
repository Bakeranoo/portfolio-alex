import './Contact.css';

const Contact = () => {

    return (
        <div className="contact-page" id="contact">
            <h1>Contacto</h1>
            <div className="contact-container">
                <div className="contact-card">
                    <p>Si tienes alguna pregunta o quieres ponerte en contacto conmigo, no dudes en escribirme.</p>
                    <form className="contact-form">
                        <input type="text" placeholder="Nombre" required />
                        <input type="email" placeholder="Email" required />
                        <textarea placeholder="Mensaje" required></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;