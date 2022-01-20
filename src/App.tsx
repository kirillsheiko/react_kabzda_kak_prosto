import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";




//function declaration
function App() {
    // полезное что-то
    // обязана вернуть JSX
    console.log("App rendering")
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState(false);
    let [onOffCondition, setOnOffCondition] = useState(false);
    let [switchOn, setSwitchOn] = useState(false);

    return (
        <div className={"App"}>
            <UncontrolledOnOff onChange={setSwitchOn}/>{switchOn.toString()}
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={"Meow"} collapsed={accordionCollapsed} onClick={setAccordionCollapsed}/>
            <OnOff buttonCondition={onOffCondition} onClick={setOnOffCondition}/>
            {/*Article 2
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}


export default App;
