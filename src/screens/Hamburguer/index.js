import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView, 
         FlatList, } from 'react-native'

import {Item, 
        Sperator, 
        ListStyle, 
        Texto, 
        SizeText, 
        ValueText, 
        ImgPizza  } from './styles'


import Img1 from '../Hamburguer/assets/Hamburguer1.png'
import Img2 from '../Hamburguer/assets/Hamburguer2.png'

import Items from '../ItemScreen/ItemSelected'





export default function HamburguerList(){

    const navigation = useNavigation();

    const PizzaData = [
        {
            key: String(Math.random()),
            name: 'X-Bolado',
            size: 'M',
            value: 'R$20,00',
            img: Img1
        },

        {
            key: String(Math.random()),
            name: 'X-Salada ',
            size: 'P',
            value: 'R$15,00',
            img: Img2

        }
    ]

    function getDataItem(key, name, size, value){

        var ItemKey = key
        var ItemName = name
        var ItemSize = size
        var ItemValue = value  

        return(
            <Items
               key = {ItemKey}
               name = {ItemName}
               size ={ItemSize}
               value = {ItemValue}
            />
        )
      }
     

    return (
        <ListStyle>
        <SafeAreaView>
         
            <FlatList
            data={PizzaData}
            renderItem={({item}) => (
                <>
            <TouchableOpacity

                key={item.key}
                name={item.name}
                size={item.size}
                value={item.value}

                onPress={() =>{
                   getDataItem(item.key, item.name, item.size, item.value);
                   navigation.navigate('ItemScreen')
                }}>
            <Item> 
                <ImgPizza source={item.img}/>       
                <Texto>{item.name.toUpperCase()}</Texto>
                <SizeText>Tamanho: {item.size}</SizeText>
                <ValueText>{item.value}</ValueText>

             </Item>
                </TouchableOpacity>
                <Sperator/>
                
                </>

    )}>
        </FlatList>
      </SafeAreaView>
      </ListStyle>
    );
  }

  