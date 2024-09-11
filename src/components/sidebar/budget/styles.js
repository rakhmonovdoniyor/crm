import styled from "styled-components"

 

export const BudjetContainer = styled.div`
padding: 40px;
margin-left: 280px;
`

export const TotalWrapdiv = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 gap: ${(props) => (props.$expense  ? `500px` : `0 `)};
`

export const Totaldivh1 = styled.div`
color: var(--600, #2C2669);

/* Bold/34px -> 42px */
font-family: "Public Sans";
font-size: 34px;
font-style: normal;
font-weight: 700;
line-height: 42px; /* 123.529% */
`

export const Totaldivh2 = styled.div`
 color: var(--500, #6053B9);

/* Bold/30px -> 40px */
font-family: "Public Sans";
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: 40px; /* 133.333% */
`

export const LeadCol =styled.div`
display: flex;
align-items: center;
width: 1150px;
background-color: white;
border-radius: 20px;
border-top-left-radius:20px;
border-top-right-radius:20px;
margin-top: 50px;
`
export const EditDeleteBtn = styled.div`
display: flex;
gap: 10px;
/* :hover{
    background-color: ${(props) => (props.$edit ? `gray` : `#EE0707`)};
} */
`
export const EditDelete = styled.button`
display: flex;
width: 32px;
height: 32px;
padding: 10px;
justify-content: center;
align-items: center;
flex-shrink: 0;
border-radius: 6px;
 cursor: pointer;
border: ${(props) => (props.$edit ? `1px solid #2C2669` : `1px solid  #EE0707`)};
background-color: transparent;
color: ${(props) => (props.$edit ? ` #2C2669` : `#EE0707`)};
 
`

export const CreateNewM = styled.button`
display: inline-flex;
padding: 14px 40px;
flex-direction: column;
 
align-items: flex-start;
gap: 10px;
border-radius: 6px;
background: var(--600, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #2C2669);
color: var(--Color-7, #FFF);
font-family: "Public Sans";
font-size: 12px;
font-style: normal;
font-weight: 700;
line-height: 32px; /* 266.667% */
`
export const TotalButton = styled.div`
display: flex;
gap: 20px;
`