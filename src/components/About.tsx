import "./About.css"

const About = () => {
    return (
        <>
            <section className="about-section">
                <div className="about-div-text">
                    You know all those unused clothes you have? <br></br>
                    We want to help you recycle, all of them, <br></br>
                    and earn rewards in exchange. 
                </div>
                <article className="about-article">
                    <div className="about-div-oval">
                        {/* Get An EcoSack, Shipped To You, Fill With Clothes, Ship It Back! */}
                       <div className="about-div-oval-inner">
                            <div className="about-div-oval-top">
                                <div className="about-div-oval-wrap-1">
                                    <div className="about-div-oval-wrap-text">Get An EcoSack</div>
                                    <div className="about-div-oval-wrap-bg"></div>
                                </div>                         
                                <div className="about-div-oval-wrap-2">
                                    <div className="about-div-oval-wrap-text">We Ship to You</div>
                                    <div className="about-div-oval-wrap-bg"></div>
                                </div>         
                            </div>
                            {/* <div className="about-div-oval-lower">
                                <div className="about-div-oval-wrap-3">
                                    <div className="about-div-oval-wrap-text">Fill With Unused Garments</div>
                                    <div className="about-div-oval-wrap-bg"></div>
                                </div>                         
                                <div className="about-div-oval-wrap-4">
                                    <div className="about-div-oval-wrap-text">You Ship To Us</div>
                                    <div className="about-div-oval-wrap-bg"></div>
                                </div>    
                            </div> */}
                       </div>
                    </div>
                </article>
            </section>
        </>
    )
}

export default About