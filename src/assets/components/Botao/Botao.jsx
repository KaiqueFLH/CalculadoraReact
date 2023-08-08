import "./Botao.css"
import { useState } from "react";
import Display from "../Display/Display"

export default function Botao(props) {
    const [valor,setValor] = useState("");  
    const [resultado,setResultado] = useState("");
    
    function pegaValor(valor , number){
        if(valor.length<=18){
            setValor(valor+number);
        }
        else{
            alert("O número máximo de caracteres foi atingido");
        }
    }

    function verificaSinal(sinal){
        
        if(valor[valor.length-1] === "+" || valor[valor.length-1] === "-" || valor[valor.length-1] === "*" || valor[valor.length-1] === "/"){
            setValor(valor.slice(0,-1)+sinal);
        }else if(valor[valor.length-1] === "."){
            setValor(valor.slice(0,-1)+sinal);
        }else if(valor[valor.length-1] === ""){
            setValor(valor);
        }
        else if(valor[valor.length-2] === "**"){
            setValor(valor.slice(0,-2)+sinal);
        }
        else{
            setValor(valor+sinal);
        }
    }

    function calc(){
        setResultado(eval(valor));
    }

    function apagarTudo(){
        setValor("");
        setResultado("");
    }

    function apagarApenasUm(){
        setValor(valor.slice(0,-1));
    }
    
    return (
        <>
            <Display valor={valor} resultado={resultado}></Display>
        
        <div className="divBotoes">
            <div className="a">
                <button className="buttonEscuro" onClick={() =>apagarTudo()}>C</button>
                <button className="buttonEscuro" onClick={() =>verificaSinal("**")}>e</button>
                <button className="buttonEscuro" onClick={() =>apagarApenasUm()}>⌫</button>
                <button className="buttonEscuro" onClick={() =>verificaSinal("/")}>÷</button>
            </div>
            <div className="a">
                <button className="button" onClick={() =>pegaValor(valor , "7")}>7</button>
                <button className="button" onClick={() =>pegaValor(valor ,"8")}>8</button>
                <button className="button" onClick={() =>pegaValor(valor , "9")}>9</button>
                <button className="button" onClick={() =>verificaSinal("*")}>X</button>
            </div>
            <div className="a">
                <button className="button" onClick={() =>pegaValor(valor , "4")}>4</button>
                <button className="button" onClick={() =>pegaValor(valor , "5")}>5</button>
                <button className="button" onClick={() =>pegaValor(valor , "6")}>6</button>
                <button className="button" onClick={() =>verificaSinal("-")}>-</button>
            </div>
            <div className="a">
                <button className="button" onClick={() =>pegaValor(valor , "1")}>1</button>
                <button className="button" onClick={() =>pegaValor(valor , "2")}>2</button>
                <button className="button" onClick={() =>pegaValor(valor , "3")}>3</button>
                <button className="button" onClick={() =>verificaSinal("+")}>+</button>
            </div>
            <div className="a">
                <button className="buttonAumentado" onClick={() =>pegaValor(valor , "0")}>0</button>
                <button className="button" onClick={() =>verificaSinal(".")}>.</button>
                <button className="buttonEscuro" onClick={() =>calc()}>=</button>
            </div>

        </div>
        </>
    )
}