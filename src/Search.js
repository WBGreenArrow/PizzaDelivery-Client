import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Fontisto } from '@expo/vector-icons';


export default function Search(){

const navigation = useNavigation();

    return(

        <Fontisto 
            name="search" 
            size={34} 
            color="tomato" 
            onPress={()=>{

            navigation.navigate('Home')}}/>
            
    )
}