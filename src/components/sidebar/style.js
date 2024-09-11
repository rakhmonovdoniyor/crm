import { Style } from "@mui/icons-material";
import styled from "styled-components";

export const SidebarLeft = styled.div`



width: 256px;
    height: 100vh;
    background: #FFF;
    position: fixed;
    padding: 24px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid rgba(0, 0, 0, 0.10);
    border-radius: 12px;
    z-index: 101;
    justify-content: space-between;
`
export const Wrapper = styled.div`
gap: 10px;
display: flex;
height: auto;
flex-direction: column;
padding-top: 20px;
:hover{
    
    background-color:		rgb(240,240,240) ;
    /* padding: 10px 22px; */
    border-radius: 5px;

}

`
export const Termiz = styled.div`
display: flex;
padding: 10px 22px;
align-items: center;
gap: 12px;
align-self: stretch;

`
export const Pii = styled.div`
color:  #6053B9;

/* Medium/14px -> 20px */
font-family: "Public Sans";
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 16px; /* 114.286% */

`
export const SmallLine = styled.div`
height: 2px;
flex-shrink: 0;
align-self: stretch;
border-radius: 2px;
background-color:  #EFEEF8;
`
export const FlexEnd = styled.div`
display: flex;
justify-content: flex-end;
 line-height: 16px; 
 align-items: center;
 padding-right: 45px;
`

export const AnderSmith = styled.div`
display: flex;
align-items: center;
/* border: 1px solid red; */
/* flex: 1; */
/* gap: 12px; */
align-self: stretch;
border-radius: 8px;
background-color:  #EFEEF8;
padding: 6px 15px;
justify-content: center;
cursor: pointer;
gap: 10px;
h1{
    color: var(--600, #2C2669);
/* display: flex; */
/* Medium/14px -> 20px */
font-family: "Public Sans";
font-size: 14px;
font-style: normal;
font-weight: 500;
/* line-height: 16px; 114.286% */
}
`