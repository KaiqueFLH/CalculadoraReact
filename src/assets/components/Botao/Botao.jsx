import "./Botao.css"
import { useState } from "react";

export default function Botao(props){
    const [display, setDisplay] = useState("0");
    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(0);
    const [operacao, setOperacao] = useState("");
    const [resultado, setResultado] = useState(0);

    return(
        <div>
            <button className={props.className} onClick={() => console.log(props.children)}>{props.children}</button>
        </div>
    )
}