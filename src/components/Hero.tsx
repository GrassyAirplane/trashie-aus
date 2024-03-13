"use client"
import { useEffect, useState } from "react";
import "./Hero.css"

const Hero =() => {
    const items = ["shirts", "towels", "pants", "dresses", "socks"];
    const [currentItemIndex, setCurrentItemIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentItemIndex(prevIndex => (prevIndex + 1) % items.length);
        }, 1000); // Shift every 0.5 seconds

        return () => clearInterval(intervalId);
    }, [items.length]); // Run only once on component mount

    return (
        <main className="hero-main">
            <div className="hero-div-leftside">
                <h2 className="hero-main-h2">Recycling meets Rewards</h2>
                <div className="hero-main-div-text">With <span className="hero-span-special">EcoSack™</span>, recycling in &quot;bulk&quot; is rewarding and as easy as returning online products. Curious to learn more? Leave us your details!</div>
                <a href="#contact"><div className="hero-main-div-button">Get In Touch</div></a>
            </div>
            <div  className="hero-div-rightside">
                <div className="hero-div-rightside-div">
                    Buy our Sack <br></br>
                    Fill it with <span className="type-words">{items[currentItemIndex]}</span> <br></br>
                    {/* "shirts, towels, pants, dresses, socks", */}
                    Print our <span className="hero-phone-invisible">Shipping</span> Label <br></br>
                    Drop it off <br></br>
                    Earn <span className="hero-span-italics">Rewards</span>
                </div>
            </div>
        </main>
    )
}

export default Hero