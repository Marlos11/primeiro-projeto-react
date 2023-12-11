import styled from 'styled-components'

export const Conteiner = styled.div`
    width:100vw;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
     background: linear-gradient(90deg, #383838 0%, #000 81.25%); 
    
`

export const SecundaryContainer = styled.div`

    background-color: #ffffff;
    padding: 30px 20px;
    border-radius: 8px; 

    ul{
        padding: 0;
        margin-top: 60px;
    }

`

export const InputTask = styled.input`
    border-radius: 5px;
border: 2px solid rgba(209, 211, 212, 0.40);
padding: 11px 164px 11px 20px;


`

export const AddButton = styled.button`
    padding: 10px 10px;
    height: 40px;
    border-radius: 5px;
    background: #8052EC;
    line-height: 2px;
    font-size: 17px;
    font-weight: 900;
    border: none; 
    margin-left: 10px;
    color: #ffffff;
`

export const ListeItem = styled.div`
    width: 500px;
    background: ${props=>props.isFinished ? '#E8FF8B' : '#E4E4E4E4'};
    box-shadow: 1px 4px 10px rgba(0,0,0,0.2);
    border-radius: 5px;
    height: 60px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    padding: 0px 10px;



    li{
        list-style: none;
    }

`