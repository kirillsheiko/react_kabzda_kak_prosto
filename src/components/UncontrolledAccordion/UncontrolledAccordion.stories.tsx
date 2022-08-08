import React, {ChangeEvent, useState} from "react";
import {UncontrolledAccordion} from "./UncontrolledAccordion";

export default {
    title: "UncontrolledAccordion",
    components: UncontrolledAccordion
}

export const ChangeMode = () => <UncontrolledAccordion titleValue={'menu'}/>