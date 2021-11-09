import {Button} from "react-bootstrap";
import {useState} from "react";


export function Clicker() {
    let [clicked, changeClicked] = useState(0);

    return (
        <div>
            <h1>Clicked: {clicked}</h1>

            <Button variant={"danger"} onClick={() => changeClicked(clicked + 1)}>Click me</Button>
        </div>
    );
}
