import '../styles/Shared.css';
import Header from '../components/Header';
import Footer from '../components/Footer';


function UseOfTheSite() {


    return (
        <div>
            <Header />
            <div className="container">
                <h2 className="h-red" style={{ fontSize: '2.25em' }}>Use of the site</h2>
                <div className="copyright">
                    <p>This site policy applies to the homepage
                        (https://www.demistudio.org/) managed and operated by Demi Studio
                        Headquarters Co., Ltd. (hereinafter referred to as "our company").
                        Please confirm the following before using the site.</p>
                    <ul>
                        <li>
                            <h3>1. Copyright Notice</h3>
                            <p>The works produced by (or in which our company is involved)
                                and the contents published on this website (text, video,
                                audio, data, etc.) are protected as copyrighted works by
                                Japanese copyright law, trademark law, and international
                                treaties, and may not be used (reproduced, distributed,
                                adapted, sold, loaned, or publicly transmitted) without the
                                prior written permission of the copyright holder.<br/><br/>
                                In addition, since there are multiple different copyright
                                holders for each work, we cannot grant permission for use
                                at our own discretion, even for works in which we are
                                involved.<br/><br/>
                                Please contact us in advance by phone or email regarding
                                use for advertising or promotional activities by companies
                                or organizations. We do not grant permission for use to
                                individuals. Thank you for your understanding.<br /><br />
                                <b>*To all our fans: [Request regarding handling of copyrighted
                                    material on the Internet]</b><br /><br />
                                If you have an individual homepage, even if it is a non-profit,
                                personally operated homepage, it will end up disseminating
                                information to a large number of people. Therefore, we
                                prohibit individuals from using our company's works and
                                copyrighted material on this site on the Internet (however, we
                                will permit the use of copyrighted material that displays a
                                notice of permission for use).<br /><br />
                                Similarly, you may not use (post or sell) on the Internet any
                                illustrations or text (data) that you have created yourself
                                based on our works or the copyrighted material on this website.
                                We understand that this is a difficult request to make to all
                                the fans who watch our works and give us their warm support,
                                but we ask for your understanding.<br /><br />
                                Please understand that we may take legal action if any
                                copyright infringement is committed in violation of the above
                                requests.
                            </p>
                        </li>
                        <li>
                            <h3>2. Bringing in your own projects</h3>
                            <p>In order to avoid any troubles with the production of works, we
                                do not accept any proposals (paper media, data, email, etc.)
                                from outside. All proposals received by us will be returned.
                                In addition, we will not respond to inquiries about such
                                proposals. Thank you for your understanding.<br /><br />
                                <b>*Even if such
                                    proposals are received by us, we will assume that the copyright
                                    holder has agreed to transfer the copyright of the said
                                    proposal to our company free of charge, and that the author of
                                    the said proposal has agreed not to exercise the author's moral
                                    rights. </b><br /><br />
                                We will not respond to any complaints or unjust claims
                                of rights after the fact (such as claims from those who have
                                brought in proposals that "this expression is my idea"
                                regarding works that our company was involved in).</p>
                        </li>
                        <li>
                            <h3>3. Prohibited acts</h3>
                            <p>Users of this website are prohibited from engaging in the following activities:</p>
                            <ol>
                                <li>Falsifying or deleting information available through this
                                    website, or sending or posting information that is contrary
                                    to the facts</li>
                                <li>Any act that discriminates against, libels, or damages the
                                    reputation or credibility of other users, third parties,
                                    or our company.</li>
                                <li>Any act that infringes or may infringe on the property,
                                    privacy, portrait rights or publicity rights of other
                                    users, third parties, or our company.</li>
                                <li>Actions that lead to crimes such as fraud</li>
                                <li>Using, providing, or recommending harmful programs such as computer viruses</li>
                                <li>Using this site by impersonating another user or a third party</li>
                                <li>Attempting to gain unauthorized access to other computer
                                    systems or networks connected to this site</li>
                                <li>Any other conduct that violates laws, regulations, or
                                    public order and morals (prostitution, violence, cruelty,
                                    etc.), or that causes harm to other users, third parties,
                                    or our company.</li>
                                <li>Any act that encourages any of the acts specified in the
                                    preceding paragraphs</li>
                                <li>Any other actions that the Company deems inappropriate</li>
                            </ol>
                        </li>
                        <li>
                            <h3>4. Regarding interruptions to the provision of this website</h3>
                            <p>We may temporarily suspend the provision of this website without
                                prior notice to users if any of the following circumstances apply:</p>
                            <ol>
                                <li>When it is unavoidable due to maintenance or construction
                                    of the equipment for this site</li>
                                <li>In the event of a malfunction in the equipment used by this
                                    site, this is unavoidable</li>
                                <li>When telecommunications services become unavailable due to
                                    the telecommunications services provided by a Type 1
                                    telecommunications carrier or other telecommunications
                                    carrier</li>
                                <li>Any other cases where the Company determines that it is
                                    necessary to temporarily suspend the service for
                                    operational or technical reasons.</li>
                            </ol>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default UseOfTheSite;