import React, {useState} from "react";

type UncontrolledOnOffPropsType = {
    onChange: (value: boolean) => void
    //buttonCondition: boolean
}

export function UncontrolledOnOff(props: UncontrolledOnOffPropsType) {

    let [buttonCondition, setButtonCondition] = useState(false);

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: buttonCondition ? "green" : "white"
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        marginLeft: "2px",
        backgroundColor: buttonCondition ? "white" : "red"
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: buttonCondition ? "green" : "red"
    };

    const onClicked = () => {
        setButtonCondition(true);
        props.onChange(true);
    }
    const offClicked = () => {
        setButtonCondition(false);
        props.onChange(false);
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )

}