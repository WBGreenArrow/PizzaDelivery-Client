import styled from 'styled-components/native';

export const Container = styled.View`
    width:100%;
    height:100%;
`;

export const ViewImage = styled.View`
    width:450px;
    height:350px;
    align-items: center;
    justify-content: center;
`;

export const ItemImg = styled.Image`
    width:400px;
    height:250px;
`;

export const NameItem = styled.Text`
    margin-top:10px;
    margin-left:8px;
    font-size:30px;
    color:tomato;
    font-weight:bold;
`;
export const PriceItem = styled.Text`
    margin-left:8px;
    font-size:20px;
`;


export const PriceView = styled.View`
    width:100%;
    height:50px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;

`;

export const ItemDescriptonView = styled.View`
    background-color:white;
    width:430px;
    height:200px;
    border-radius:10px;
    margin-top:10px;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

export const ItemTitleIngredient = styled.Text`
    font-size:18px;
    font-weight:bold;
    color:tomato;

`;

export const ItemDescripton = styled.Text`
    width:100%;
    height:200px;   
    text-align:center;
    font-size:16px;
    margin-top:10px;
`;