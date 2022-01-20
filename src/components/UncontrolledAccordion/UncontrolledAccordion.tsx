import React, {ChangeEvent, useState} from "react";

type AccordionPropsType = {
    titleValue: string
}

type AccordionTitlePropsType = {
    title: string
    setButtonCondition: () => void
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    let [collapsed, setButtonCondition] = useState(false);
    return (
        <div>
            <AccordionTitle title={props.titleValue} setButtonCondition={() => setButtonCondition(!collapsed)}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}



function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3 onClick={() => props.setButtonCondition()}>{props.title}</h3>
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