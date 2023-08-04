import "./Botao.css"
import { useState } from "react";
import Display from "../Display/Display"

export default function Botao(props) {
    const [display, setDisplay] = useState(0);
    const [valor, setValor] = useState("");
    const [operacao, setOperacao] = useState("");
    const [resultado, setResultado] = useState(0);
    

    function pegarValor (number) {
        setValor(valor + number);
    }  

    function pegarOperacao(sinal) {
        setOperacao(sinal);
    }  
    
    function calc(){
        setResultado(eval(valor+operacao+valor))
    }

    function apagarTudo(){
        setValor("");
        setOperacao("");
        setResultado(0);
    }

    function apagarApenasUm(){
        setValor(valor.slice(0, -1));
    }

    
    return (
        <>
            <Display display={valor+operacao+valor} resultado={resultado}></Display>
        
        <div className="divBotoes">
            <div className="a">
                <button className="buttonEscuro" onClick={() =>apagarTudo()}>C</button>
                <button className="buttonEscuro" onClick={() =>apagarApenasUm()("e")}>e</button>
                <button className="buttonEscuro" onClick={() =>pegarValor("C")}>⌫</button>
                <button className="buttonEscuro" onClick={() =>pegarOperacao("/")}>÷</button>
            </div>
            <div className="a">
                <button className="button" onClick={() =>pegarValor("7")}>7</button>
                <button className="button" onClick={() =>pegarValor("8")}>8</button>
                <button className="button" onClick={() =>pegarValor("9")}>9</button>
                <button className="button" onClick={() =>pegarOperacao("*")}>X</button>
            </div>
            <div className="a">
                <button className="button" onClick={() =>pegarValor("4")}>4</button>
                <button className="button" onClick={() =>pegarValor("5")}>5</button>
                <button className="button" onClick={() =>pegarValor("6")}>6</button>
                <button className="button" onClick={() =>pegarOperacao("-")}>-</button>
            </div>
            <div className="a">
                <button className="button" onClick={() =>pegarValor("1")}>1</button>
                <button className="button" onClick={() =>pegarValor("2")}>2</button>
                <button className="button" onClick={() =>pegarValor("3")}>3</button>
                <button className="button" onClick={() =>pegarOperacao("+")}>+</button>
            </div>
            <div className="a">
                <button className="buttonAumentado" onClick={() =>pegarValor("0")}>0</button>
                <button className="button" onClick={() =>pegarValor(".")}>.</button>
                <button className="buttonEscuro" onClick={() =>calc()}>=</button>
            </div>

        </div>
        </>
    )
}