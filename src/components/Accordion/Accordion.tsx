import React from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean,
    onClick: (value: boolean) => void
}

type AccordionTitlePropsType = {
    title: string,
    onClick: () => void
}

export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => props.onClick(!props.collapsed)}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3 onClick={() => props.onClick()}>{props.title}</h3>
}

function AccordionBody() {
    console.log("Accordion rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}