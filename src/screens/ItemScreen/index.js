import React from 'react';
import { useState } from 'react'
import {Picker} from 'react-native';
import ImgPizza from '../Pizza/assets/pizza_4_queijos.png'
import { Container, 
         ItemImg, 
         NameItem, 
         PriceItem, 
         ItemDescripton,
         ViewImage} from './styles';

const PizzaOptions = [
    
    {
        key: String(Math.random()),
        size: "P",
        value: "R$20,00"
    },

    {
        key: String(Math.random()),
        size: "M",
        value: "R$25,00"
    },

    {
        key: String(Math.random()),
        size: "G",
        value: 35.00 
    },

    {
        key: String(Math.random()),
        size: "GG",
        value: "R$42,00"
    }

]

export default function ItemScreen(){

    const [selectedSize, setSelectedSize] = useState();

    const [selectedValue, setSelectedValue] = useState("Selecione um tamanho:");
   

    const ButtonPicker = () =>{
        
       return(

            <Picker

                selectedSize={selectedSize}

                selectedValue={selectedValue}

                style={{ height: 100, width: 100 }}

                onValueChange={(itemValue, itemIndex) => setSelectedSize(itemValue)}
                
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            > 
                    <Picker.Item label = {'-----'}/>

                    {PizzaOptions.map((item =>{

                    return <Picker.Item key={item.key} label={item.size} value={item.value}/>
                }))}    

            </Picker> 

       )
    } 

    return(

            <Container>
                <ViewImage>
                    <ItemImg source={ImgPizza}/>
                </ViewImage>

                <NameItem>Pizza de Calabresa</NameItem>
            
                <PriceItem>{selectedValue}</PriceItem>    
                 

                <ButtonPicker/>

                

            
            </Container>  
    )
}

