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