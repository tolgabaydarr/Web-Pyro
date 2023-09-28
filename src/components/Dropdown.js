import React from "react";

export const Dropdown = ({showDropdown, setShowDropdown, items, scrollToElement}) => {
    const handleClick = (id) => {
        scrollToElement(id)
        setShowDropdown()
    }

    return (
        <div className={`dropdown-wrapper`}>
            <span onClick={setShowDropdown} className={"textShadow"}>MENU</span>
            <ul className={showDropdown ? "active" : ""}>
                {items.map((item) => {
                        if (item === "Linktree") {
                            return (
                                <a href={"https://linktr.ee/pyroerc"} rel="noreferrer" target="_blank">
                                    <li style={{fontSize: 20}} className={"textShadow"}>{item}</li>
                                </a>
                            )
                        }
                        if (item === "Docs") {
                            return (
                                <a href={"https://pyro.gitbook.io/pyro-documentation/"} rel="noreferrer" target="_blank">
                                    <li style={{fontSize: 20}} className={"textShadow"}>{item}</li>
                                </a>
                            )
                        }
                        return <li onClick={() => handleClick(item)} style={{fontSize: 20}} className={"textShadow"}>{item}</li>
                    }
                )}
            </ul>
        </div>
    );
};
