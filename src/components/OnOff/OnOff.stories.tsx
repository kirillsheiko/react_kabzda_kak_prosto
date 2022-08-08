import React, {useState} from "react";

import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: "OnOff",
    components: OnOff
}

const  callback = action("on or off clicked");
export const OnMode = () => <OnOff buttonCondition={true} onClick={callback}/>
export const OffMode = () => <OnOff buttonCondition={false} onClick={callback}/>

export const ModeChange = () => {
    const [value, setValue] = useState(true);
    return <OnOff buttonCondition={value} onClick={setValue}/>
}