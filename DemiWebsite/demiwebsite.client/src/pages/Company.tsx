import Header from '../components/Header';
import Footer from '../components/Footer';
import CompanyWelcome from '../components/CompanyWelcome';

function Company() {
    return (
        <div>
            <Header />
            <div className="container">
                <CompanyWelcome />
                <div>
                    <h2 className="h-red">Map</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40702.91237428346!2d30.335845026565575!3d50.38646572424058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ca268f26cc33%3A0x5f947d6229f322e4!2z0JLQuNGI0L3QtdCy0LUsINCa0LjRl9Cy0YHRjNC60LAg0L7QsdC70LDRgdGC0YwsINCj0LrRgNCw0ZfQvdCw!5e0!3m2!1suk!2sro!4v1716006433593!5m2!1suk!2sro" width="100%" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="greetings">
                    <h2 className="h-red">Greetings</h2>
                    <div>
                        <img src="https://profirealt.blob.core.windows.net/commerce/company_logo.png" />
                        <p>WIT STUDIO was
                            established as an animation
                            production company based in Kichijoji in June 2012. We are
                            committed to creating works with sincerity, and strive to create
                            new expressions from scratch.</p>
                    </div>
                </div>
                <div className="creators">
                    <h2 className="h-red">Creators</h2>
                    <div>
                        <div className="creator">
                            <img src="https://profirealt.blob.core.windows.net/commerce/vadik.jpeg"
                                />
                            <div>
                                <div className="pargramn-shape">
                                    <span>President and CEO</span>
                                </div>
                                <p>Vadim Pavlenko</p>
                                <p>I haven't came up with any info</p>
                            </div>
                        </div>

                        <div className="creator">
                            <img src="https://profirealt.blob.core.windows.net/commerce/me.jpeg" />
                            <div>
                                <div className="pargramn-shape">
                                    <span>Programmer</span>
                                </div>
                                <p>Hodyachi Shkaf</p>
                                <p>I haven't came up with any info</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="our-vision">
                    <h2 className="h-red">Our vision</h2>
                    <div>
                        <h3>Through animation, we create images that exceed the imagination of the
                            viewer and provide unprecedented excitement.</h3>
                        <p>Create a historic workWIT STUDIO is a production studio where people
                            who love animation come together. The images we aim to create are works
                            that will remain in people's hearts forever and be treasured.</p>
                        <h3>We
                            create animations with overflowing passion, and create video works
                            that will move and amaze the viewers.</h3>
                        <p>
                            A studio full of imaginationAs professionals, we always imagine the audience when we create animations. Furthermore, by smoothly communicating with each other, we combine our individual skills and produce results that can only be achieved through collaboration. We
                            believe that it is only by being a great team that we are able to
                            create unique videos.</p>
                        <h3>Our goal is simple</h3>
                        <p> Spreading the message to the worldWe will
                            continue to create animation based on what we believe to be
                            universal values, without being swayed by the trends of the times.
                            We will continue to disseminate animation from Japan to the world,
                            believing in the potential of creators' creativity.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Company;