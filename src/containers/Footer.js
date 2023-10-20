import react, { useState } from 'react';
import "./headers.css"
import mirats_icon from "../components/homes/home_images/mirats_icon.svg";
import facebook from "../components/homes/home_images/facebook.svg";
import call from "../components/homes/home_images/call.svg";
import location from "../components/homes/home_images/location.svg";
import mail from "../components/homes/home_images/mail.svg";
import formimage from "../components/homes/home_images/formimage.svg";

const Footer = () => {

    const [email, setEmail] = useState('');
    const sendEmail = () => {
        console.log("Here is the email", email);
    }
    return (
        <>
        <div className='footersbg'>
            <div className='level_10'>
                <h1>Get started with your personalised demo</h1>
                <p>Complete the form to see the Mirats Insights platform in action. We’ll show you how you can use Mirats Insights to design and improve the experiences you deliver across your organisation.</p>
                <div className='contact_form'>
                    <img src={formimage} alt='form_image' />
                    <div className='form'>
                        <input type='text' name='name' />
                        <label for="name" className='label-name'>
                            <span className='content-name'>Full Name *</span>
                        </label>
                        <input type='text' name='country' />
                        <label for="name" className='label-country'>
                            <span className='content-name'>Country *</span>
                        </label>
                        <input type='text' name='company' />
                        <label for="name" className='label-company'>
                            <span className='content-name'>Company *</span>
                        </label>
                        <input type='text' name='job' />
                        <label for="name" className='label-job'>
                            <span className='content-name'>Job title *</span>
                        </label>
                        <input type='text' name='email' />
                        <label for="name" className='label-email'>
                            <span className='content-name'>Email Id *</span>
                        </label>
                        <input type='text' name='mobile' />
                        <label for="name" className='label-mobile'>
                            <span className='content-name'>Mobile No *</span>
                        </label>
                        <button className='form_btn'>Submit</button>
                    </div>
                </div>
            </div>
            <div className='level_11'>
                <h1>Sign up for our newsletter</h1>
                <span>Lorem ipsum dolor sit amet consectetur. In risus nibh ornare egestas semper leo. aliquam penatibus a blandit elementum montes</span>
                <div className='contact_info'>
                    <input type='text' placeholder='Email' className='email_contact' onChange={(e) => { setEmail = e.target.value }} />
                    <button onClick={sendEmail} className='email_btn'>Submit</button>
                </div>
            </div>
        </div>
            <div className='footer'>
                <div className='footer_head'>
                    <img className='mirats_icon' src={mirats_icon} alt='mirats_logo' />
                    <div className='social_icons'>
                        <img className='social icon_radius' src={facebook} alt='facebook' />
                        <svg className='icon_radius' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M12.3952 6.14102C9.41392 6.14102 7.00923 8.5457 7.00923 11.527C7.00923 14.5082 9.41392 16.9129 12.3952 16.9129C15.3764 16.9129 17.7811 14.5082 17.7811 11.527C17.7811 8.5457 15.3764 6.14102 12.3952 6.14102ZM12.3952 15.0285C10.4686 15.0285 8.8936 13.4582 8.8936 11.527C8.8936 9.5957 10.4639 8.02539 12.3952 8.02539C14.3264 8.02539 15.8967 9.5957 15.8967 11.527C15.8967 13.4582 14.3217 15.0285 12.3952 15.0285ZM19.2577 5.9207C19.2577 6.61914 18.6952 7.17695 18.0014 7.17695C17.303 7.17695 16.7452 6.61445 16.7452 5.9207C16.7452 5.22695 17.3077 4.66445 18.0014 4.66445C18.6952 4.66445 19.2577 5.22695 19.2577 5.9207ZM22.8249 7.1957C22.7452 5.51289 22.3608 4.02227 21.128 2.79414C19.8999 1.56602 18.4092 1.18164 16.7264 1.09727C14.992 0.998828 9.7936 0.998828 8.05923 1.09727C6.3811 1.17695 4.89048 1.56133 3.65767 2.78945C2.42485 4.01758 2.04517 5.5082 1.96079 7.19102C1.86235 8.92539 1.86235 14.1238 1.96079 15.8582C2.04048 17.541 2.42485 19.0316 3.65767 20.2598C4.89048 21.4879 6.37642 21.8723 8.05923 21.9566C9.7936 22.0551 14.992 22.0551 16.7264 21.9566C18.4092 21.877 19.8999 21.4926 21.128 20.2598C22.3561 19.0316 22.7405 17.541 22.8249 15.8582C22.9233 14.1238 22.9233 8.93008 22.8249 7.1957ZM20.5842 17.7191C20.2186 18.6379 19.5108 19.3457 18.5874 19.716C17.2045 20.2645 13.9233 20.1379 12.3952 20.1379C10.867 20.1379 7.5811 20.2598 6.20298 19.716C5.28423 19.3504 4.57642 18.6426 4.2061 17.7191C3.65767 16.3363 3.78423 13.0551 3.78423 11.527C3.78423 9.99883 3.66235 6.71289 4.2061 5.33477C4.57173 4.41602 5.27954 3.7082 6.20298 3.33789C7.58579 2.78945 10.867 2.91602 12.3952 2.91602C13.9233 2.91602 17.2092 2.79414 18.5874 3.33789C19.5061 3.70352 20.2139 4.41133 20.5842 5.33477C21.1327 6.71758 21.0061 9.99883 21.0061 11.527C21.0061 13.0551 21.1327 16.341 20.5842 17.7191Z" fill="#333333" />
                        </svg>
                        <svg className='icon_radius' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_1_761)">
                                <path d="M21.5332 6.85784C21.5484 7.07103 21.5484 7.28427 21.5484 7.49745C21.5484 14 16.5992 21.4924 7.55354 21.4924C4.76673 21.4924 2.17792 20.6852 0.000244141 19.2843C0.396197 19.3299 0.776869 19.3452 1.18806 19.3452C3.48751 19.3452 5.60429 18.5685 7.29465 17.2437C5.13221 17.198 3.32002 15.7817 2.69565 13.8325C3.00024 13.8781 3.30479 13.9086 3.62462 13.9086C4.06623 13.9086 4.50788 13.8477 4.91902 13.7411C2.66523 13.2842 0.974822 11.3045 0.974822 8.91369V8.8528C1.62962 9.21828 2.3911 9.4467 3.19815 9.47712C1.87328 8.59386 1.00529 7.08627 1.00529 5.38067C1.00529 4.46698 1.2489 3.62942 1.67532 2.89845C4.09665 5.88322 7.73626 7.83242 11.8174 8.04566C11.7413 7.68017 11.6956 7.2995 11.6956 6.91878C11.6956 4.20809 13.8885 2 16.6144 2C18.0306 2 19.3098 2.59391 20.2083 3.5533C21.3199 3.34011 22.3859 2.92892 23.3301 2.36548C22.9646 3.50764 22.188 4.46703 21.1677 5.07613C22.1575 4.96958 23.1169 4.69541 24.0001 4.31473C23.3302 5.28931 22.4926 6.1573 21.5332 6.85784Z" fill="#333333" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_761">
                                    <rect width="24" height="24" fill="white" transform="translate(0.000244141)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className='footer_mid'>
                    <div className='footer_mid_head'>
                        <h1>Products</h1>
                        <p>Mirats Insights One</p>
                        <p>Mirats Insights Blaze</p>
                        <p>Mirats Insights Quanto</p>
                    </div>
                    <div className='footer_mid_head'>
                        <h1>Service</h1>
                        <p>Qualitative Solution</p>
                        <p>Qualitative Solution</p>
                        <p>Specialist Solution</p>
                    </div>
                    <div className='footer_mid_head'>
                        <h1>Company</h1>
                        <p>About</p>
                        <p>Leadership</p>
                        <p>Partnership & Certification</p>
                        <p>Research Events</p>
                        <p>Global Offices</p>
                        <p>Careers</p>
                    </div>
                    <div className='footer_mid_head'>
                        <h1>Resource</h1>
                        <p>B2C audience Book</p>
                        <p>Healthcare Audience Book</p>
                        <p>Quality/Security Control Docs</p>
                        <p>ESOMAR 37 Answer</p>
                        <p>One Pager</p>
                    </div>
                    <div className='footer_mid_head'>
                        <h1>Legal</h1>
                        <p>Privacy Policy</p>
                        <p>Cookies & Technologies</p>
                        <p>GDPR Policy</p>
                        <p>I.T Security</p>
                        <p>Sitemaps</p>
                    </div>
                    <div className='footer_mid_head'>
                        <h1>Support</h1>
                        <p>Request a bid</p>
                        <p>Join Our Panel</p>
                        <p>News Letter</p>
                    </div>
                </div>
                <div className='footer_end'>
                    <div className='contact_no'>
                        <img className='icon_radius' src={call} alt='call_image' />
                        <div>
                            <span>Contact no.</span>
                            <span><b>310-437-2786</b></span>
                        </div>
                    </div>
                    <div className='email_id'>
                        <img className='icon_radius' src={mail} alt='email_image' />
                        <div>
                            <span>E-mail id</span>
                            <span><b>miratsinsights@gmail.com</b></span>
                        </div>
                    </div>
                    <div className='address'>
                        <img className='icon_radius' src={location} alt='location_image' />
                        <div>
                            <span>Address</span>
                            <span><b>305, 3rd Floor, 1Aerocity, NIBR Corporate Park,</b></span>
                            <span><b>Andheri - kurla road, Saki Naka, Mumbai - 400072</b></span>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}
export default Footer;