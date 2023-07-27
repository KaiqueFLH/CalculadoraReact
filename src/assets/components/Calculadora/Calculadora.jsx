import Botao from "../Botao/Botao"
import Display from "../Display/Display"
import { useState } from "react"
import "./Calculadora.css"

export default function Calculadora(props) {

    
    
    return (
        <>
            <Display/>
            <div className="divBotoes">
                <div className="a">
                    <Botao className="botaoEscuro" onClick={()=> setOperacao("C")}>C</Botao>
                    <Botao className="botaoEscuro">e</Botao>
                    <Botao className="botaoEscuro">⌫</Botao>
                    <Botao className="botaoEscuro">÷</Botao>
                </div>
                <div className="a">
                    <Botao className="botao">7</Botao>
                    <Botao className="botao">8</Botao>
                    <Botao className="botao">9</Botao>
                    <Botao className="botao">X</Botao>
                </div>
                <div className="a">
                    <Botao className="botao">4</Botao>
                    <Botao className="botao">5</Botao>
                    <Botao className="botao">6</Botao>
                    <Botao className="botao">-</Botao>
                </div>
                <div className="a">
                    <Botao className="botao">1</Botao>
                    <Botao className="botao">2</Botao>
                    <Botao className="botao">3</Botao>
                    <Botao className="botao">+</Botao>
                </div>
                <div className="a">
                    <Botao className="botaoAumentado">0</Botao>
                    <Botao className="botao">.</Botao>
                    <Botao className="botaoEscuro">=</Botao>
                </div>

            </div>
        </>
    )
}