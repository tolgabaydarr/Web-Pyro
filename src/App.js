import './App.css';
import {Header} from "./components/Header";
import {Landing} from "./components/Landing";
import ScrollAnimation from "react-animate-on-scroll"
import {About} from "./components/About";
import "animate.css/animate.min.css";
import {Tokenomics} from "./components/Tokenomics";
import {BurnMechanism} from "./components/BurnMechanism";
import {PlatformBenefits} from "./components/PlatformBenefits";
import {PlatformFeatures} from "./components/PlatformFeatures";
import {useRef} from "react";

function App() {

    return (
        <div>
            <Header/>
            <Landing/>
            <div className={"contentBackground"}>
                <img className={"lightning"} style={{position: "absolute", left: 0}} src={"/leftside.png"}/>
                <img className={"lightning"} style={{position: "absolute", right: 0, marginTop: -50}} src={"/rightside.png"}/>
                <ScrollAnimation duration={2} animateIn='fadeIn'>
                    <About/>
                    <BurnMechanism/>
                    <PlatformBenefits/>
                    <Tokenomics/>
                    <PlatformFeatures/>
                </ScrollAnimation>
            </div>
        </div>
    );
}

export default App;
