import styled from "styled-components";

export const SetCon = styled.div`
display: flex;
`
export const Boxes= styled.div`
width: 349px;
height: 349px;
flex-shrink: 0;
border-radius: 16px;
background: var(--Color-7, #FFF);
display: flex;
flex-direction: column;
`
export const SetCong = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 50px;
`
export const SetFlex1= styled.div`
display: flex;
 
 
flex: 2;
`
export const SetFlex2 = styled.div`
display: flex;
 
 flex-direction: column;
flex: 1;
padding: 10px;
justify-content: space-evenly;
h1{
    color: var(--600, #2C2669);

/* Bold/20px -> 30px */
font-family: "Public Sans";
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 30px; /* 150% */
}
p{
    color: var(--600, #2C2669);

/* Regular/16px -> 20px */
font-family: "Public Sans";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 125% */
}
`
export const ButtonSet = styled.button`
display: inline-flex;
padding: 8px 16px;
justify-content: center;
align-items: center;
border-radius: 6px;
background: var(--600, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #2C2669);
color: var(--Color-7, #FFF);
border: none;
/* Bold/14px -> 16px */
font-family: "Public Sans";
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 16px; /* 114.286% */
`