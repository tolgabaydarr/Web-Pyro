import ScrollAnimation from "react-animate-on-scroll";

export const BurnMechanism = () => {
    return (
        <ScrollAnimation duration={3} animateIn='fadeIn'>
            <div className={"burnMechanismContainer"}>
                <img src={"/cat1.png"}/>
                <div className={"contentContainer"}>
                    <span className={"headerText"}>BURN MECHANISM</span>
                    <div className={"contentWrapper"}>
                        <span className={"contentText1"}>No Selling Pressure on Charts: </span>
                        <span className={"contentText2"}>Traditional sales on exchanges can create selling pressure, leading to potential price drops. However, sales on Pyro's OTC platform don't reflect directly on public price charts, ensuring that large sales don't negatively impact the token's perceived value.</span>
                    </div>
                    <div className={"contentWrapper"}>
                        <span className={"contentText1"}>Encouraging Thoughtful Transactions: </span>
                        <span className={"contentText2"}>By offering a platform where sales don't directly depress the token's price, Pyro encourages users to transact in a way that's considerate of the broader community and the token's overall health.</span>
                    </div>
                </div>
            </div>
        </ScrollAnimation>
    )
}