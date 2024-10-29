import styled from "styled-components";

export const ButtonEditResume = styled.button`
display: flex;
width: 32px;
height: 32px;
padding: 10px;
justify-content: center;
align-items: center;
border-radius: 6px;
border: ${(props)=> props.$delete ? `1px solid red` : ` 1px solid #2C2669`};

 
background-color: transparent;
 cursor: pointer;
`
export const WrapBtn = styled.div`
display: flex;
gap: 10px;
:hover{
    background-color: ${(props)=> props.$delete ? ` red` : ` #2C2669`};
    /* background-color: #2C2669; */
    color: white;
}
`

export const BtnLast = styled.div`
display: flex;
gap: 10px;
:hover{
    background-color: ${(props)=> props.$delete ? ` red` : ` #2C2669`};
    /* background-color: #2C2669; */
    color: white;
}
`

export const RadioFlex = styled.div`
display: flex;
align-items: start;

gap: 20px;
`

export const RadioFlex1 = styled.div`
display: flex;
align-items: center;
gap: 30px;
margin-bottom: 50px;
`

export const StafRadio = styled.input`
width: 16px;
height: 16px;
border-radius: 4px;
border: 1px solid var(--400, #A098D5);
`