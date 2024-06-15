import Header from '../components/Header';
import Footer from '../components/Footer';

function PrivacyPolicy() {
    return (
        <div>
            <Header />
            <div className="container">
                <h2 className="h-red" style={{ fontSize: '2.25em' }}>privacy policy</h2>
                <div className="copyright">
                    <ul>
                        <li>
                            <h3>1. Definition of Personal Information</h3>
                            <p>Wit Studio Inc. (hereinafter referred to as "our company")
                                recognizes personal information as information about a living
                                individual as defined by the Act on the Protection of Personal
                                Information (name, date of birth, and other information that
                                can identify a specific individual), as well as information
                                that is linked to a specific individual, such as an email
                                address, user ID, password, credit card, IP address, etc.,
                                and information that is integrated with personal information
                                (age, hobbies, family composition, and other information
                                related to an individual).</p>
                        </li>
                        <li>
                            <h3>2. Identification of the purpose of use of personal information</h3>
                            <p>When handling personal information, we will specify the purpose
                                of its use as specifically as possible.</p>
                        </li>
                        <li>
                            <h3>3. Restrictions on Personal Information</h3>
                            <p>Our company will not handle personal information beyond the
                                scope necessary to achieve the purpose of use without the
                                prior consent of the person in question. Even if we acquire
                                personal information due to a merger or other reasons, we will
                                not handle it beyond the scope of the purpose of use without
                                the prior consent of the person in question. However, this does
                                not apply in the following cases.</p>
                            <ul>
                                <li>1. When required by law</li>
                                <li>2. When it is necessary for the protection of a person's
                                    life, body, or property, and it is difficult to obtain the
                                    individual's consent</li>
                                <li>3. When it is particularly necessary for the improvement
                                    of public health or the promotion of healthy child
                                    development, and it is difficult to obtain the consent of
                                    the individual</li>
                                <li>4. When it is necessary to cooperate with a national
                                    government agency, local government, or a person
                                    commissioned by them to carry out duties prescribed by law,
                                    and obtaining the individual's consent is likely to
                                    impede the performance of said duties.</li>
                            </ul>
                        </li>
                        <li>
                            <h3>4. Notification of purpose of use when acquiring personal information</h3>
                            <p>When acquiring personal information, the Company will publicly
                                announce the purpose of use in advance, except in the following
                                cases:</p>
                            <ul>
                                <li>1. When there is a risk of harming the life, body, property
                                    or other rights or interests of the individual or a third
                                    party by informing the individual of the purpose of use or
                                    by making the purpose public.</li>
                                <li>2. When there is a risk of infringing our rights or
                                    interests by informing the individual of the purpose of
                                    use or by making it public</li>
                                <li>3. When it is necessary to cooperate with a national
                                    government agency or local government entity in carrying
                                    out legally required duties, and informing the individual
                                    of the purpose of use or making it public would be likely
                                    to impede the performance of said duties.</li>
                                <li>4. When the purpose of use is deemed clear based on the
                                    circumstances of acquisition</li>
                            </ul>
                        </li>
                        <li>
                            <h3>5. Changes to the purpose of use of personal information</h3>
                            <p>When we change the purpose of use of personal information,
                                the change will not go beyond the scope that is reasonably
                                deemed to be sufficiently related to the purpose of use
                                prior to the change, and we will notify the individual of the
                                changed purpose of use or make it public.</p>
                        </li>
                        <li>
                            <h3>6. Safety management of personal information and supervision of employees</h3>
                            <p>In order to prevent the leakage, loss, or damage of personal
                                information and to otherwise ensure the safe management of
                                personal information, we have established personal information
                                protection regulations and provide necessary and appropriate
                                supervision of our employees.</p>
                        </li>
                        <li>
                            <h3>7. Supervision of entrusted parties</h3>
                            <p>When outsourcing all or part of the handling of personal
                                information, we will enter into a contract with the
                                outsourcing party, including confidentiality provisions,
                                and will provide necessary and appropriate supervision
                                to ensure the safe management of personal information
                                by the outsourcing party.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PrivacyPolicy;