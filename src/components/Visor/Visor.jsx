import "./Visor.css"

export const Visor = ({result}) => {

    return (
        <div className="tela" >
            <span id="result" className="tela_num">{result}</span>
        </div>
    )
}
