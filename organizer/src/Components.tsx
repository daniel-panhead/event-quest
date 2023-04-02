import React from "react";

export function Header() {
    return(
        <div className="header"></div>
    )
}

type SideButtonInfo = {
    name: string;
    handler: () => void;
}
export function SideButton(props: SideButtonInfo) {
    return(
        <button className="side-button" onClick={props.handler}>{props.name}</button>
    )
}