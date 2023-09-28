import ScrollAnimation from "react-animate-on-scroll";

export const PlatformFeatures = () => {
    return (
        <ScrollAnimation duration={2} animateIn='fadeIn'>
            <div className={"aboutContainer"} style={{marginTop: 150}}>
                <div className={"landingButton secondHeader"}>
                    <span style={{marginTop: -20}}>platform features</span>
                </div>
                <div className={"platformFeatureContainer"}>
                    <div className={"platformFeatureItemContainer"}>
                        <span className={"contentText1"}>Burn Lottery</span>
                        <span className={"contentText2"}>Pyro's unique lottery system adds excitement and rewards to every transaction. Users gain entry tickets with each transaction, and periodic random draws award lucky winners with bonuses, fostering engagement and vibrant ecosystem activity.</span>
                    </div>
                    <div className={"platformFeatureItemContainer"}>
                        <span className={"contentText1"}> Dynamic Tax</span>
                        <span className={"contentText2"}>Pyro's tax system adapts to market conditions and transaction volumes, ensuring fairness and stability. It safeguards against market manipulation, shields against dumps, and enhances the value of holding and transacting with Pyro.</span>
                    </div>
                </div>
                <div className={"platformFeatureContainer otcPlatformAdvantage"}>
                    <img className={"lightning img2cat"} src={"/cat3.png"}/>
                    <div className={"platformFeatureItemContainer"}>
                        <span className={"contentText1"}>OTC Platform Advantage:</span>
                        <span className={"contentText2"}>Pyro's OTC platform offers tax benefits and contributes to token burning. Sales here don't affect public price charts, ensuring market stability and confidence.</span>
                    </div>
                </div>
                <img className={"firefooter"} src={"/FireFooter.png"}/>
                <span className={"contentText2 footer"} style={{paddingTop: 30}}>PYRO is not an investment, makes no promises, and is not responsible for any financial losses or errors. Use at your own risk.</span>
                <span className={"contentText2 footer"} style={{paddingBottom: 30}}>Copyright © 2023 PYRO. All Rights Reserved.</span>

            </div>
        </ScrollAnimation>
    )
}