import React from "react";
import { Text } from "react-native";

export default function Item({nome,descricao,preco}) {
    return<>
        <Text>{nome}</Text>
        <Text>{descricao}</Text>
        <Text>{preco}</Text>
    </>
    
}