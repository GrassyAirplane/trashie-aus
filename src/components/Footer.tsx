"use client"

import "./Footer.css"
import Image from 'next/image';
import Favicon from '../../public/assets/images/favicon.png'
import Right from '../../public/assets/images/right.svg'
import { useState } from "react";

const Footer = () => {
    const [email, setEmail] = useState("");
    return(
        <>
            <footer className="footer-bottom">
                <div className="footer-footer">
                    <div className="footer-leftside">
                        <h2>Subscribe to make a difference and earn as you recycle.</h2>
                        <div className="footer-input-box">
                            <input className="footer-input" placeholder="Your email address">
                            </input>
                            <div className="footer-input-submit">
                                <Image
                                priority
                                src={Right}
                                alt="Logo"
                                className='footer-image'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="footer-rightside">
                        
                    </div>
                    <div className="footer-bottom-row">
                        <Image
                        priority
                        src={Favicon}
                        alt="Logo"
                        className='footer-image'
                        />
                        Ⓒ EcoSack™
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer