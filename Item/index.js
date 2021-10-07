import React from "react";
import { Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements";
import itemEstilo from "./itemEstilo";

export default function Item({nome,descricao,preco}) {
    return<>
        <View style={itemEstilo.informacao}>
            <Text style={itemEstilo.nome}>{nome}</Text>
            <Text style={itemEstilo.descricao}>{descricao}</Text>
            <Text style={itemEstilo.preco}>{preco}</Text>
        </View>
        <View style={itemEstilo.carrinho}>
            <View>
                <View style={itemEstilo.valor}>
                    <Text style={itemEstilo.descricao}>Quantidade</Text>
                    <TextInput value="0"/>
                </View>

                <View style={itemEstilo.valor}>
                    <Text style={itemEstilo.descricao}>preço</Text>
                    <Text style={itemEstilo.preco}>0</Text>
                </View>
            </View>
            <Button title="Adcionar"/>

        </View>
    </>
    
}