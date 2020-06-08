import React from 'react';
import { SafeAreaView, 
         FlatList, } from 'react-native'

import {Item, 
        Sperator, 
        ListStyle, 
        Texto, 
        Description, 
        ValueText, 
        ImgPizza  } from './styles'

import { TouchableOpacity } from 'react-native-gesture-handler';
import ImgCalabres from './assets/pizza_calabresa.png'
import Img4Queijos from './assets/pizza_4_queijos.png'
import { useNavigation } from '@react-navigation/native';
import Items from '../ItemScreen/ItemSelected'


export default function PizzaList(){

    const navigation = useNavigation();

    const PizzaData = [
        {
            key: String(Math.random()),
            name: 'Piza de Calabresa',
            description: 'MOLHO DE TOMATE, MUSSARELA E CALABRESA',
            value: 'R$38,00',
            img: ImgCalabres
        },

        {
            key: String(Math.random()),
            name: 'Piza de 4 Queijos ',
            description: 'MOLHO DE TOMATE, MUSSARELA E CALABRESA',
            value: 'R$55,00',
            img: Img4Queijos

        },

        {
            key: String(Math.random()),
            name: 'Piza de Calabresa2',
            description: 'MOLHO DE TOMATE, MUSSARELA E CALABRESA',
            value: 'R$38,00',
            img: ImgCalabres
        },
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

                            <Description>{item.description}</Description>

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

  