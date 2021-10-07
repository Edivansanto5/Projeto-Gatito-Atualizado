import React, { useState } from 'react';
import { FlatList, StatusBar } from 'react-native';
import { SafeAreaView, Text, View } from 'react-native';
import Item from '../Item';

const servicos = [
    {
        id:1,
        nome:'Banho',
        preco:50,
        descricao: 'Banho completo para seu pet com custo a beneficios',
    },
    {
        id:2,
        nome:'Vacina v4',
        preco:150,
        descricao: 'Vacinamos seu pet para ficar imune a varias doenças transmisiveis',
    },
    {
        id:3,
        nome:'Vacina contra Raiva',
        preco:100,
        descricao: 'A vacina mais importante, ela permitit deixar seu pet mais saudavel',
    },
]
export default function principal(){
    return(
        <SafeAreaView>
            <StatusBar/>
            <View>
                <Text>Serviços!</Text>
            </View>
            <FlatList
                data = {servicos}
                renderItem = {({item})=> <Item {...item}/>}
                keyExtractor = {(id) => String(id)}

            
            />
        </SafeAreaView>
       
    )

}

