import styled from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
background: rgba(250, 75, 75, 0.2);
flex: 1;
`;

export const Header = styled.View`

    margin-top: 5px;
    height: 50px;
    padding:0 16px;
    align-items: center;
    
`;
export const Label = styled.Text`
    text-align:center;
    font-size: 16px;
    color: tomato;
    font-weight:bold;

`;

export const Container = styled.View`

padding: 16px;
align-items: center;

`;

export const ContainerLabel = styled.Text`
margin-top:10px;
font-size:18px;
color:tomato;
font-weight:bold;
`;

export const ContainerButtom = styled.TouchableOpacity`
width:440px;
align-items:center

`;

export const ContainerBanner = styled.Image`
width:440px;
height:150px ;

`;
