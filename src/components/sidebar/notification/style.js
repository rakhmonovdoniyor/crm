import styled from "styled-components";

export const NotifCon = styled.div`
display: flex;
 
margin-left: 250px;
padding: 100px 50px;
flex-direction: column;
`

export const FlexWrap = styled.div`
display: flex;
gap:100px;
`
export const Flex1 = styled.div`
display: flex;
flex: 1;
 
`
export const Flex2 = styled.div`
display: flex;
flex: 2;
flex-direction: column;

`
export const TextDiv= styled.div`
display: flex;
width: 714px;
height: 446px;
padding: 20px 20px 336px 20px;
flex-direction: column;
align-items: flex-start;
gap: 12px;
flex-shrink: 0;
border-radius: 0px 16px 16px 0px;
background: var(--Color-7, #FFF);
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

/* Regular/14px -> 16px */
font-family: "Public Sans";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 16px; /* 114.286% */
}
`
export const ButtonDiv = styled.div`
display: flex;
 padding-bottom: 50px;
justify-content: flex-end;
/* align-items: flex-end; */
`
export const Con1 = styled.div`
display: flex;
width: 350px;
padding-bottom: 192px;
flex-direction: column;
align-items: flex-start;
border-radius: 16px 0px 0px 16px;
background: var(--Color-7, #FFF);
:hover{
    background: #F3F2F2;
}
cursor: pointer;
 
`
export const ConItem1= styled.div`
width: 350px;
display: flex;
flex-direction: column;
 padding: 10px;
height: 78px;
gap: 15px;
border-bottom: 2px solid var(--200, #CFCBEA);
`
export const ConItemText= styled.div`
display: flex;
align-items: center;
h1{ 
color: var(--600, #2C2669);

/* Medium/16px -> 20px */
font-family: "Public Sans";
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 20px; /* 125% */
}
`
export const ConItemWiev= styled.div`
display: flex;
align-items: center;
justify-content: space-between;
 p{
    color: var(--300, #BFBAE3);
font-family: "Public Sans";
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 14px; /* 116.667% */
 }
`
export const Wiev= styled.div`
display: flex;
 align-items: center;
 
 p{
    color: var(--300, #BFBAE3);
font-family: "Public Sans";
font-size: 12px;
font-style: normal;
font-weight: 500;
/* line-height: 14px; 116.667% */
 }
`