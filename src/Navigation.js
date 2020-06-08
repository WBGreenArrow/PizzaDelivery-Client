import React from 'react'
import { TextInput, View} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, FontAwesome5, } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../src/screens/Home'
import  PedidoScreen  from './screens/Pedidos';
import  CarrinhoScreen from './screens/Carrinho';
import PizzaScreen from '../src/screens/Pizza';
import HamburguerScreen from '../src/screens/Hamburguer';
import ItemScreen from './screens/ItemScreen';
import Search from './Search.js' ;


const icons = {
    
    Home:{
        lib: AntDesign,
        name:'home',
    },

    Carrinho:{
        lib: AntDesign,
        name:'shoppingcart',
    
    },

    Pedidos:{
        lib: FontAwesome5,
        name:'list-ul',
    }

}


 function ScreensTabs(){

    const Tab = createBottomTabNavigator();

    return(
      
        <Tab.Navigator
        initialRouteName={'Home'}
            screenOptions = {({route, navigation}) => ({
                tabBarIcon:({color, size}) =>{
                    const { lib: Icon, name } = icons[route.name];
                    return  <Icon name={name} size={size} color={color} />  
            }
        }) 
      }
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
              }} >
        
        <Tab.Screen 
        name="Carrinho" 
        component={CarrinhoScreen}
        />
        
        <Tab.Screen 
        name="Home"
        component={HomeScreen}
        />

        <Tab.Screen
        name="Pedidos"
        component={PedidoScreen}
        />

        </Tab.Navigator>
      
   )}

   

   export default function Navigation(){

        const Stack = createStackNavigator()

    return(


                <Stack.Navigator options={
                    
                    {initialRouteName:'Home'}
                } >  
                        
                    <Stack.Screen 

//Tela Home
                    options={{headerShown:false}}

                    name='Home' component={ScreensTabs}/>

                    <Stack.Screen 

//Tela Lista de Pizza

                     options={{headerTitle: props => 

                     <View

                        style={{

                            height: 40,
                            width:300, 
                            justifyContent:'space-between',
                            alignItems:"center",
                            flexDirection:'row'

                        }}
                     >
                         <TextInput 

                        style={{ 
                                  height: 40,
                                  width:300,
                                  borderColor: 'white',
                                  borderWidth: 1,
                                  borderRadius:15,
                                  fontSize:20,
                                  paddingLeft:20,
                                  paddingRight:15,
                                  backgroundColor:'rgba(58, 61, 66, 0.1)'
                                  
                                  }}>  
                          
                                 </TextInput> 

                                 <View
                                    style={{
                                        height:35,
                                        width:35,
                                        marginLeft:8,
                                        alignItems:"center"
                                    
                                    }}
                                  >
                                      <Search/>

                                    </View>

                                 </View> 

                             }}

                      name='PizzaList'
                      component={PizzaScreen}/>              

                     <Stack.Screen
                     name='ItemScreen' 
                     component={ItemScreen}/>

<Stack.Screen 

//Tela Lista de Hamburguer

                     options={{headerTitle: props => 

                     <View

                        style={{

                            height: 40,
                            width:300, 
                            justifyContent:'space-between',
                            alignItems:"center",
                            flexDirection:'row'

                        }}
                     >
                         <TextInput 

                        style={{ 
                                  height: 40,
                                  width:300,
                                  borderColor: 'white',
                                  borderWidth: 1,
                                  borderRadius:15,
                                  fontSize:20,
                                  paddingLeft:20,
                                  paddingRight:15,
                                  backgroundColor:'rgba(58, 61, 66, 0.1)'
                                  
                                  }}>  
                          
                                 </TextInput> 

                                 <View
                                    style={{
                                        height:35,
                                        width:35,
                                        marginLeft:8,
                                        alignItems:"center"
                                    
                                    }}
                                  >
                                      <Search/>

                                    </View>

                                 </View> 

                             }}

                      name='HamburguerList'
                      component={HamburguerScreen}/>  
                </Stack.Navigator>

            )
   }
