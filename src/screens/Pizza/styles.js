import styled from 'styled-components/native';

export const ListStyle = styled.View`
    height:100%;
    width:100%;
    justify-content: center;
    align-items: center; 
`;


export const Item = styled.View`
    display:flex;
    padding:8px;
    flex-direction:row;
    align-items:center;
    justify-content:center;

`;

export const Sperator = styled.View`
    height: 0.5px;
    width:500px;
    background-color: 'rgba(0,0,0,0.2)';
    `;
  
  export const Texto = styled.Text`
    width:200px;
    font-size:18px;
    color:tomato;
    font-weight:bold;
    `;

export const Description = styled.Text`
    width:200px;
    height:50px ;
    font-size:12px;; 
`;


export const ValueText =styled.Text`
     font-size:18px;
     margin-left:16px;

`;

export const ImgPizza = styled.Image`
    width:125px;
    height:80px ;
`;

  export const TextView = styled.View`
    align-items:center;
    justify-content:center;
    margin-left:10px;
  `;
