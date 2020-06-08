import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeArea,
        Header,
        Label, 
        Container, 
        ContainerLabel, 
        ContainerBanner, 
        ContainerButtom } from '../Home/styles'

import Imag1 from '../../assets/Pizza1.png';
import Imag2 from '../../assets/hamburguer1.png';
import Imag3 from '../../assets/Hamburguer2.png';     


export default function HomeScreen(){

            const navigation = useNavigation();
            const items =[
                
                {
                    id: String(Math.random()),
                    key: String(Math.random()),
                    Img: Imag1,
                    label:'Pizza',
                    ScreenList:'PizzaList'
                   
                },
        
                {
                    id: String(Math.random()),
                    key: String(Math.random()),
                    Img: Imag2,
                    label:'Hamburguers',
                    ScreenList:'HamburguerList'
                },
        
                {   
                    id: String(Math.random()),
                    key: String(Math.random()),
                    Img: Imag3,
                    label:'Hamburguers',
                    ScreenList:'PizzaList'
                },
            ]
        
            return(
             
                <SafeArea>
        
                    <Header>
        
                        <Label> Selecione um Banner </Label>
        
                    </Header>
        
                    <Container>
        
                       {items.map((item) => (
        
                           <React.Fragment key={item.id}>
        
                            <ContainerButtom key={item.key}
                                onPress={() =>{navigation.navigate(item.ScreenList)}}
                            >
        
                            <ContainerLabel>{item.label}</ContainerLabel>
        
                                <ContainerBanner source={item.Img}/>
        
                            </ContainerButtom>
        
                            </React.Fragment>
                       ))}
        
                    </Container>
        
                </SafeArea>
         
            )
    }
