import React, {useState} from "react";

import {Accordion} from "./Accordion";

export default {
    title:"Accordion",
component: Accordion
}

export const OnMode = () => <Accordion titleValue={"Menu"} collapsed={false} onClick={x=>x}/>
export const OffMode = () => <Accordion titleValue={"Menu"} collapsed={true} onClick={x=>x}/>

export const ModeChanging = () => {
    const [value, setValue] = useState(false);
    return <Accordion titleValue={"Menu"} collapsed={value} onClick={() => setValue(!value)}/>
}