import {BackgroundVideo} from "./BackgroundVideo";

export const Landing = () => {
    return (
        <div className={"landingContainer"}>
            <BackgroundVideo/>
            <p className={"landingText"}>LET'S BURN</p>
            <div className={"landingButton"}>
                <span style={{marginTop: -20}}>LAUNCH DAPP</span>
            </div>
            <div className={"landingSocialMediaWrapper"}>
                <a href={"https://twitter.com/PyroERC"} rel="noreferrer" target="_blank">
                    <img src={"/x.png"}/>
                </a>
                <a href={"https://t.me/PyroERC20"} rel="noreferrer" target="_blank">
                    <img src={"/telegram.png"}/>
                </a>
            </div>
            <div className={"landingImgWrapper"}>
                <img className={"img1"} src={"/Coinmarketcap.png"}/>
                <img className={"img2"} src={"/Uniswap.png"}/>
                <img className={"img3"} src={"/dextools.png"}/>
            </div>
        </div>
    )
}