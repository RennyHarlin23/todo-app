import { useState } from "react";

export default function List(props) {
    const [line, setLine] = useState(false);


    return <div style={{display: "flex", justifyContent: "space-between", width: "200px", marginBottom: "10px"}}>
        <li id={props.id} style={{cursor: "pointer", textDecoration: line ? "line-through" : "none"}} onClick = {() => setLine(prevValue => !prevValue)}>{props.title}</li>
        <button onClick={props.onDelete} value={props.id}>-</button>
  </div>;
}
