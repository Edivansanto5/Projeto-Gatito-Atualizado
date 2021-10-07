import React from "react";
import { Text, View} from "react-native";
import itemEstilo from "./itemEstilo";
import campoInteiro from "../Componentes/campoInteiro";
import Botao from "../Componentes/Botao";
   /**  <Text style={itemEstilo.quantidade}>1</Text>*/
export default function Item({nome,descricao,preco}) {
    return<>
        <View style={itemEstilo.informacao}>
            <Text style={itemEstilo.nome}>{nome}</Text>
            <Text style={itemEstilo.descricao}>{descricao}</Text>
            <Text style={itemEstilo.preco}> R$ {preco}</Text>
        </View>
     
        <View style={itemEstilo.carrinho}>
           
            <View>
                <View style={itemEstilo.valor}>
                    <Text style={itemEstilo.descricao}>Quantidade:</Text>
                   
                    <campoInteiro valor="4" />
                </View>

                <View style={itemEstilo.valor}>
                    <Text style={itemEstilo.descricao}>preço</Text>
                    <Text style={itemEstilo.preco}>1</Text>
                    
                </View>
            </View>
            <Botao valor ="Adcionar" acao = {() => {}}/>

        </View>
        <View style={itemEstilo.divisor}> </View>
    </>
    
}