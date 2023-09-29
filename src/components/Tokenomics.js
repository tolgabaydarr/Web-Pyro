import ScrollAnimation from "react-animate-on-scroll";

export const Tokenomics = () => {
    return (
        <ScrollAnimation duration={2} animateIn='fadeIn'>
            <div className={"aboutContainer"} style={{marginTop: 130}}>
                <div id={"Tokenomics"} className={"landingButton secondHeader"}>
                    <span style={{marginTop: -20}}>TOKENOMICS</span>
                </div>
                <div className={"tcontainer"}>
                    <div className={"tItemContainer"}>
                        <span className={"contentText1"}>Address: </span>
                        <span className={"contentText1"}>Total Supply: </span>
                    </div>
                    <div className={"tItemContainer"}>
                        <span className={"contentText2"}>Coming Soon</span>
                        <span className={"contentText2"}>10,000,000</span>
                    </div>
                    <div className={"tItemContainer"}>
                        <span className={"contentText1"}>Circulating Supply: </span>
                        <span className={"contentText1"}>Tax: </span>
                    </div>
                    <div className={"tItemContainer"}>
                        <span className={"contentText2"}>2,500,000</span>
                        <span className={"contentText2"}>5% / 5%</span>
                    </div>
                </div>
                {/* Hidden in wide screens */}
                <div className={"tHiddenContainer"}>
                    <div className={"tHiddenItemContainer"}>
                        <span className={"contentText1"}>Address: </span>
                        <span className={"contentText1"}>Total Supply: </span>
                        <span className={"contentText1"}>Circulating Supply: </span>
                        <span className={"contentText1"}>Tax: </span>

                    </div>
                    <div className={"tHiddenItemContainer"}>
                        <span className={"contentText2"}>Coming Soon</span>
                        <span className={"contentText2"}>10,000,000</span>
                        <span className={"contentText2"}>2,500,000</span>
                        <span className={"contentText2"}>5% / 5%</span>
                    </div>
                </div>
            </div>
        </ScrollAnimation>
    )
}