import styled from "styled-components";

export const LeadCol =styled.div`
display: flex;
align-items: center;
width: 1150px;
background-color: white;
border-radius: 20px;
border-top-left-radius:20px;
border-top-right-radius:20px;
`
export const Thtag =styled.div`
th{
    color: #A098D5;
font-family: "Public Sans";
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: 14px; /* 116.667% */
}


`
export const SendInput = styled.input`
display: flex;
height: 151px;
padding: 8px 149px 101px 16px;
align-items: center;
align-self: stretch;
border-radius: 8px;
border: 1px solid #CFCBEA;
background-color: #EFEEF8;
color:  #CFCBEA;

/* Regular/18px -> 24px */
font-family: "Public Sans";
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 133.333% */
`
export const SMSList = styled.div`

display: flex;
width: 480px;
height: 50px;
padding: 8px 149px 8px 16px;
align-items: center;
flex-shrink: 0;
align-self: stretch;
border-radius: 8px;
border: 1px solid var(--200, #CFCBEA);
h1{
    color: var(--600, #2C2669);

/* Regular/18px -> 24px */
font-family: "Public Sans";
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 133.333% */
}
`