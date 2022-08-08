import React, {useState} from "react";
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: "UncontrolledOnOff",
    components: UncontrolledOnOff
}

export const ChangeOnOff = () => <UncontrolledOnOff onChange={x=>x}/>;