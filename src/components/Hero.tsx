import "./Hero.css"

const Hero =() => {

    return (
        <main className="hero-main">
            <div className="hero-div-leftside">
                <h2 className="hero-main-h2">Recycling meets Rewards</h2>
                <div className="hero-main-div-text">With <span className="hero-span-special">EcoSack™</span>, recycling in "bulk" is rewarding and as easy as returning online products. Curious to learn more? Leave us your details!</div>
                <a href="#contact"><div className="hero-main-div-button">Get In Touch</div></a>
            </div>
            <div  className="hero-div-rightside">
                Order Bag = Fill bag = Ship Bag = Earn Rewards 
            </div>
        </main>
    )
}

export default Hero