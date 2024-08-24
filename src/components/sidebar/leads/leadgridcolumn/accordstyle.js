import styled from "styled-components";

export const AccordWrapp = styled.div`
 display: flex;
 /* flex-direction: column; */
 align-items: center;
 gap: 20px;

`
export const BoxItemIconMenu = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 150px;
`
export const MoreMenu = styled.div`

`
export const Wrap = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 /* gap: 20px; */

`

export const DataItemWrap = styled.div`
display: flex;
width: 315px;
height: 50px;
flex-shrink: 0;
border-radius: 6px;
background: var(--100, #EFEEF8);
align-items: center;
margin-bottom: 20px;
/* border: 1px solid red; */
justify-content: space-between;
padding: 10px;
`
export const Circle = styled.h2`
width: 30px;
height: 30px;
flex-shrink: 0;
fill: var(--600, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #2C2669);

color: var(--Color-7, #FFF);

/* Bold/16px -> 20px */
font-family: "Public Sans";
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 20px; /* 125% */
`
export const Flex1 = styled.div`
display: flex;
gap: 10px;
h2{
    width: 30px;
height: 30px;
flex-shrink: 0;
    fill: var(--600, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #2C2669);
    color: var(--Color-7, #FFF);
    background-color: #2C2669;
    border-radius: 50%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

/* Bold/16px -> 20px */
font-family: "Public Sans";
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 20px; /* 125% */
}
h1{
    color: var(--600, #2C2669);

/* Regular/14px -> 16px */
font-family: "Public Sans";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 16px; /* 114.286% */
}
`
export const NameNum = styled.div`
display: flex;
flex-direction: column;
p{
    color: var(--400, #A098D5);
font-family: "Public Sans";
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: 14px; /* 140% */
}
`
export const Flex2 = styled.div`
display: flex;
align-items: center;
:hover{
    /* padding: 1px;  */
    border-radius: 50%;
    background-color: gainsboro;


} 
img{
    cursor: pointer;
}


`

export const Popover1 = styled.div`
display: flex;
/* flex-direction: column; */
`

export const PopoverWrapLeft = styled.div`
display: flex;
flex: 1;
gap: 10px;
flex-direction: column;
h1{
    color: var(--500, #6053B9);

/* Bold/14px -> 16px */
font-family: "Public Sans";
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 16px; /* 114.286% */
}

`
export const PopoverWrapRight = styled.div`
display: flex;
flex: 1;
flex-direction: column;
gap: 10px;
p{
    color: var(--300, #BFBAE3);
text-align: right;

/* Regular/12px -> 16px */
font-family: "Public Sans";
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 16px; /* 133.333% */
}
`