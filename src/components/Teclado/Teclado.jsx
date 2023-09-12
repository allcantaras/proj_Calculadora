import { Visor } from '../Visor/Visor'
import './Teclado.css'
import { useState } from 'react';
import '../Botao.css'

// Atual, captura o numero digitado, exibe no visor a string do numero

export const Teclado = () => {


    const [res, setRes] = useState('')
    const [termos, setTermos] = useState([])
    const [op, setOp] = useState('')

    function getCurrent() {
        let base = '' + termos[0]
        var current = res.substring(base.length + 1, res.length)

        return parseInt(current)
    }

    function calc() {
        // handleResult()
        let currentNum = getCurrent()
  
        let result = 0;

        switch (op) {
            case '/':
                result = termos[0] / currentNum
                break;
            case '*':
                result = termos[0] * currentNum
                break;
            case '-':
                result = termos[0] - currentNum
                break;
            case '+':
                result = termos[0] + currentNum
                break;

            default:
                break;
        }

        var r = ''+result

        if (r.length > 4) {
            result = result.toFixed(4) 
        }   
        setRes(''+result)
        setOp('')
        setTermos([])
    }

    function clean() {
        setRes('')
        setTermos([])
        setOp('')
    }

    function reSize(){

        var tela = document.getElementById('result')
        var tela_texto = tela.innerText
        var size = tela_texto.length

        if (size >= 9 && size < 13) {
            console.log(tela_texto, size)
            tela.classList.add('md')
        } else if (size > 13 && size < 16) {
            console.log(tela_texto, size)
            tela.classList.remove('md')
            tela.classList.add('sm')
        } else if (size > 16) {
            console.log(tela_texto, size)
            tela.classList.remove('sm')
            tela.classList.add('xs')
        }
 
    }

    function v(e) {

        reSize()

        const btn = {
            value: e.target.value,
            type: e.target.className
        }


        if (btn.type === 'btn-op') {
            const checkLast = () => {
                var last = res.substring(res.length - 1) // ultima letra
                if (/\D/.exec(last) !== null) {
                    console.log('O último digito de ' + res + ' é um operador, erro!')
                    return true
                }
            }

            if (checkLast() === true) {
                setRes(res)
            } else {
                var t = [...termos, parseInt(res)]
                setTermos(t)
                setRes(r => r + btn.value)
                setOp(btn.value)
            }

        } else {
            // console.log('Btn numero!', btn.value)
            if (res === '') {
                setRes(btn.value)
            } else {
                setRes(r => r + btn.value)
            }
        }

    }

    return (
        <>
            <Visor result={res} />
            <div className="teclado">
                <button onClick={clean} className="btn-func" value="AC">AC</button>
                <button onClick={v} className="btn-func" value="%">%</button>
                <button onClick={v} className="btn-func" value="+/-">+/-</button>
                <button onClick={v} className="btn-op" value="/">÷</button>
                <button onClick={v} className="btn-num" value="7">7</button>
                <button onClick={v} className="btn-num" value="8">8</button>
                <button onClick={v} className="btn-num" value="9">9</button>
                <button onClick={v} className="btn-op" value="*">X</button>
                <button onClick={v} className="btn-num" value="4">4</button>
                <button onClick={v} className="btn-num" value="5">5</button>
                <button onClick={v} className="btn-num" value="6">6</button>
                <button onClick={v} className="btn-op" value="-">-</button>
                <button onClick={v} className="btn-num" value="1">1</button>
                <button onClick={v} className="btn-num" value="2">2</button>
                <button onClick={v} className="btn-num" value="3">3</button>
                <button onClick={v} className="btn-op" value="+">+</button>
                <button onClick={v} className="btn-num zero" value="0">0</button>
                <button onClick={v} className="btn-op" value=".">,</button>
                <button onClick={calc} className="btn-op" value="=">=</button>
            </div>
        </>
    )
}