import ScrollAnimation from "react-animate-on-scroll";

export const PlatformBenefits = () => {
    return (
        <ScrollAnimation duration={3} animateIn='fadeIn'>
            <div className={"burnMechanismContainer reverseContainer"}>
                <img className={"lightning img2cat"} src={"/cat2.png"}/>
                <div className={"contentContainer"}>
                    <span className={"headerText"}>OTC PLATFORM BENEFITS</span>
                    <div className={"contentWrapper"}>
                        <span className={"contentText1"}>Value Preservation: </span>
                        <span className={"contentText2"}> By consistently decreasing the number of tokens in circulation, Pyro aims to create scarcity, which can, in turn, exert upward pressure on the token's value over time.</span>
                    </div>
                    <div className={"contentWrapper"}>
                        <span className={"contentText1"}>Rewarding Long-Term Holders: </span>
                        <span className={"contentText2"}> As the total supply diminishes, the relative value of remaining tokens may increase, potentially benefiting those who choose to hold their tokens for longer durations.</span>
                    </div>
                </div>
            </div>
        </ScrollAnimation>
    )
}





