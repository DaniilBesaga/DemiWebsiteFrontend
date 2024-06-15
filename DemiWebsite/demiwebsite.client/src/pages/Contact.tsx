import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Recruit.css';
import ContactItem from '../components/ContactItem';

function Contact() {
    return (
        <div>
            <Header />
            <div className="container">
                <h2 className="h-red" style={{ fontSize: '2.25em' }}>recruit</h2>
                <div className="contact-container grid-2">
                    <ContactItem />
                    <ContactItem />
                    <ContactItem />
                    <ContactItem />
                    <ContactItem />
                    <ContactItem />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;