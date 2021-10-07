import React from "react";
import { TextInput } from "react-native";
import estiloBotao from "../Botao/estiloBotao";
import estiloCampoInteiro from "./estiloCampoInteiro";
import estiloPadrao from './estiloCampoInteiro'




export default function campoInteiro({valor , acao}) {
    const atualizar =  (novoValor,acaoRetorno) => {
        const verificaInteiro = novoValor.match(/^[0-9]*$/);
        if(!verificaInteiro) return;
    
        const removeZeroaEsquerda = novoValor.replace(/^(0)(.+)/,'$2')
        acaoRetorno(removeZeroaEsquerda)
    }
    const numeroEnTexto = String(valor)

    return < TextInput
    style={estiloPadrao.campo,estiloCampoInteiro}
    keyboardType = 'number-pad' 
    selectTextOnFocus 
    onChangeText = {(novoValor) => {acao(novoValor)}}
    value = {valor}
    />
    
}