import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

export const About = () => {

    return (
        <ScrollAnimation duration={2} animateIn='fadeIn'>
            <div className={"aboutContainer"}>
                <div id={"About"} className={"landingButton secondHeader"}>
                    <span style={{marginTop: -20}}>WHAT IS PYRO ?</span>
                </div>
                <div className={"aboutText"}>
                    Pyro represents a groundbreaking approach to cryptocurrency, seamlessly merging traditional tokenomics with innovative mechanisms to offer a unique user experience. At its core, Pyro is designed to provide both stability and growth opportunities for its holders.
                </div>
            </div>
        </ScrollAnimation>
    )
}
