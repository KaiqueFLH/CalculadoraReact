import "./Display.css"

export default function Display(props) {
    return (
        <div className="display">
            <div className="calculo">
                {props.display}
            </div>

            <p className="sinalIgual">=</p>

            <div className="resultado">
                {props.resultado}
            </div>
        </div>
    )
}