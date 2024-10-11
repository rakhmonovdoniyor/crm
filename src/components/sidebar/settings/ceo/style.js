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