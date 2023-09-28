import {useState} from "react";
import {Dropdown} from "./Dropdown";

export const Header = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const items = ["About", "Tokenomics", "Linktree", "Docs"];

    const scrollToElement = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={"header"}>
            <div className={"headerWrapper"}>
                <div className={"headerTextWrapper"}>
                    <span style={{cursor: "pointer"}} onClick={() => scrollToElement("About")} className={"textShadow headerDisplay"}>ABOUT</span>
                    <span style={{cursor: "pointer"}} onClick={() => scrollToElement("Tokenomics")} className={"textShadow headerDisplay"}>TOKENOMICS</span>
                </div>
                <img className={"headerImg"} src={"/LogoImage.png"} alt={""}/>
                <Dropdown
                    showDropdown={showDropdown}
                    setShowDropdown={() => setShowDropdown(!showDropdown)}
                    items={items}
                    scrollToElement={scrollToElement}
                />
                <div className={"headerTextWrapper"}>
                    <a href={"https://linktr.ee/pyroerc"} rel="noreferrer"  target="_blank" className={"textShadow headerDisplay"}>LINKTREE</a>
                    <a href={"https://pyro.gitbook.io/pyro-documentation/"} rel="noreferrer"  target="_blank"  className={"textShadow headerDisplay"}>DOCS</a>
                </div>

            </div>
        </div>
    )
}