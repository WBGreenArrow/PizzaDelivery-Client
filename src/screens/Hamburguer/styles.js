import styled from 'styled-components/native';

export const ListStyle = styled.View`

    flex: 1;
    justify-content: center;
    align-items: center;
    padding-top: 30px;
    
`;

export const Item = styled.View`
    display:flex;
    padding: 10px;
    align-items:flex-start;
    flex-direction:row;
    justify-content:space-between;

`;

export const Sperator = styled.View`
    height: 0.5px;
    width:500px;
    background-color: 'rgba(0,0,0,0.4)';
    
    `;
  
  export const Texto = styled.Text`
    font-size: 15px;
    color: tomato;
    `;

export const SizeText = styled.Text`
    font-size:15px;
    margin-left:5px;
    margin-top:50px;
    margin-left:-100px;
    
`;
export const ValueText =styled.Text`
     font-size:18px;
     margin-left:16px;
`;

export const ImgPizza = styled.Image`
    width:100px;
    height:80px ;
    

`;
