import { StyleSheet } from "react-native";

import { cores } from "../Telas/principalEstilo";


export default StyleSheet.create({
    informacao:{
        padding: 24
    },
    nome:{
        color:cores.laranja,
        fontWeight:'bold',
        fontSize:16,
    },
    calculo:{
        color:cores.escuro,
        fontSize:14,
        marginVertical:8
    },
    preco:{
        color:cores.roxo,
        fontSize:14,
        fontWeight:'bold',
        textAlign:'right',
    },
    divisor:{
        marginHorizontal:24,
        borderBottomWidth:2,
        borderBottomColor:cores.cinza,
    },
    carrinho:{
        marginHorizontal:24,
        paddingBottom:24,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        flexWrap:'wrap'
    }, 
    valor:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:10,
        flexWrap:'wrap',
    },
    descricao:{
        color:cores.escuro,
        fontSize:16,
        marginRight:8,
    },
    quantidade:{
        width:42,
    }

});