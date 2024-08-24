import styled from "styled-components";

export const InputTeachWrap = styled.div`
display: flex;
justify-content: space-between;
gap: 800px;
`
export const CheckboxAddTeach = styled.div`
display: flex;
align-items: center;
gap:10px;
h4{
    color: var(--400, #A098D5);

/* Medium/14px -> 20px */
font-family: "Public Sans";
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 16px; /* 114.286% */
}
`
export const Wrapp = styled.div`
display: flex;
/* flex-direction: column; */
justify-content: space-around;
align-items: center;
gap: 70px;
`

export const Scroll = styled.div`
  
    overflow: scroll;
    height: 100vh;

    ::-webkit-scrollbar {
        display: none; 
    }
    -ms-overflow-style: none; 
    scrollbar-width: none;  
`

export const Select = styled.select`
display: flex;
height: 58px;
padding: 8px 16px;
justify-content: center;
align-items: center;
gap: 83px;
align-self: stretch;
border-radius: 8px;
border: 1px solid var(--200, #CFCBEA);
background: var(--100, #EFEEF8);

`
export const Options = styled.option`

    width: 250px;
height: 190px;
flex-shrink: 0;
border-radius: 8px;
border: 1px solid  #BFBAE3;
background: #EFEEF8;
color: #2C2669;

/* Regular/14px -> 16px */
font-family: "Public Sans";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 16px; /* 114.286% */
`
export const FlexSelect = styled.div`

display:flex;
/* gap: 50px; */
align-items: center;
justify-content: space-between;
`
export const WrapSelect = styled.div`

display:flex;
align-items: center;
`