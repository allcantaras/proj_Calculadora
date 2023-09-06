import { Visor } from '../Visor/Visor'
import './Teclado.css'
import { useState } from 'react';
import '../Botao.css'

// Atual, captura o numero digitado, exibe no visor a string do numero

export const Teclado = () => {

    const [lastNum, setLastNum] = useState(0)
    const [lastOp, setLastOp] = useState('')
    const [res, setRes] = useState('')

    function clean() {
        setLastNum(0)
        setLastOp('')
        setRes('')
    }

    function changeSign() {
        var strRes = res.substring(0, 1)

        if (strRes === '-'){
            setRes(res.slice(1, res.length))
        } else {
            setRes('-' + res)
        }
        setLastNum(parseInt(res))
    }

    function calc() {
        let r = 0;
        // função que vai chegar se foi digitado um operador, se sim armazena ao currentNum
        switch (lastOp) {
            case '%':
                r = lastNum / 100
                setLastNum(r)
                setLastOp('')
                setRes(r + '')
                break;
            case '*':
                r = lastNum * parseInt(res)
                setLastNum(r)
                setLastOp('')
                setRes(r + '')
                break;
            case '/':
                r = lastNum / parseInt(res)
                setLastNum(r)
                setLastOp('')
                setRes(r + '')
                break;
            case '-': 
                r = lastNum + parseInt(res)
                setLastNum(r)
                setLastOp('')
                setRes(r + '')
                break;
            case '+':
                r = lastNum + parseInt(res)
                setLastNum(r)
                setLastOp('')
                setRes(r + '')
                break;
            default:
                break;
        }
    }

    function verify(e) {

        var input = e.target.value;

        switch (input) {
            case '=': calc()
                break;
            case '%':
                setLastOp(input)
                calc()
                break;

            case 'AC': clean()
                break;
            case '+/-': changeSign()
                break;

            // OPERADORES
            case '*':
                setRes(r => r + input)
                setLastOp('*')
                break;
            case '/':
                setRes(r => r + input)
                setLastOp('/')
                break;
            case '-':
                setRes(r => r + input)
                setLastOp('-')
                break;
            case '+':
                setRes(r => r + input)
                setLastOp('+')
                break;
            // ---FIM OPERADORES

            // NUMEROS
            default:
                if (res === '') { // Se o resultado atual 'res' estiver vazio e o input for diferente de 0 entao setRes
                    setRes(input) // primeira inserção
                    setLastNum(parseInt(input))
                } else {
                    setRes(r => r + input) // '0123456789'
                    var int = parseInt(res)
                    setLastNum(int)

                    console.log(
                        'Visor', res,
                        '\nnumeroAtual', int,
                        '\nultimoOperador', 'vazio'
                    )

                }
                break;
            // ---FIM NUMEROS
        }
    }

    return (
        <>
            <Visor result={res} />
            <div className="teclado">
                <button onClick={verify} className="btn-func" value="AC">AC</button>
                <button onClick={verify} className="btn-func" value="%">%</button>
                <button onClick={verify} className="btn-func" value="+/-">+/-</button>
                <button onClick={verify} className="btn-op" value="/">÷</button>
                <button onClick={verify} className="btn-num" value="7">7</button>
                <button onClick={verify} className="btn-num" value="8">8</button>
                <button onClick={verify} className="btn-num" value="9">9</button>
                <button onClick={verify} className="btn-op" value="*">X</button>
                <button onClick={verify} className="btn-num" value="4">4</button>
                <button onClick={verify} className="btn-num" value="5">5</button>
                <button onClick={verify} className="btn-num" value="6">6</button>
                <button onClick={verify} className="btn-op" value="-">-</button>
                <button onClick={verify} className="btn-num" value="1">1</button>
                <button onClick={verify} className="btn-num" value="2">2</button>
                <button onClick={verify} className="btn-num" value="3">3</button>
                <button onClick={verify} className="btn-op" value="+">+</button>
                <button onClick={verify} className="btn-num zero" value="0">0</button>
                <button onClick={verify} className="btn-op" value=".">,</button>
                <button onClick={verify} className="btn-op" value="=">=</button>
            </div>
        </>
    )
}