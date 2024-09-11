import styled from "styled-components";

export const GroupWrap = styled.div`
 display: flex;
 flex-direction: column;
margin-left: 280px;
`
export const BoxWrap = styled.div`

width: 522px;
height: 394px;
flex-shrink: 0;
border-radius: 20px;
background: var(--Color-7, #FFF);
padding: 20px;
`
export const AvatarCon = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
img{
    width: 58px;
height: 58px;
flex-shrink: 0;
border-radius: 9999px;
background: url(<path-to-image>) lightgray -28.844px 0px / 150% 100% no-repeat;
}

`
export const FourWrap = styled.div`
/* display: flex; */
display: flex;
flex-direction: column;
gap: 15px;
padding-top: 20px;
`
export const HJ  = styled.h1`
display: flex;
padding: 6px 10px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 4px;
background: var(--100, #EFEEF8);
color: var(--500, #6053B9);

/* Regular/14px -> 16px */
font-family: "Public Sans";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 16px; /* 114.286% */
`
export const LineBottom = styled.div`
width: 475px;
margin: 40px 25px 0 0;
height: 1px;
background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #2C2669;
`


export const LineBottom4 = styled.div`
display: flex;
justify-content: space-between;
padding-top: 20px;
`
export const LineBottom5 = styled.div`
display: flex;
flex-direction: column;
h1{
    color: var(--600, #2C2669);

/* Medium/18px -> 24px */
font-family: "Public Sans";
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 24px; /* 133.333% */
}
p{
    color: var(--400, #A098D5);

/* Regular/12px -> 16px */
font-family: "Public Sans";
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 16px; /* 133.333% */
}
`
export const GroupWrap2 = styled.div`
display: flex;
 
/* justify-content: space-evenly;
 */
gap: 120px;
`
export const GroupWrap3 = styled.div`
display: flex;
flex-direction: column;
 
/* justify-content: space-evenly;
 */
 
`
export const GrouptableCon = styled.div`
display: flex;
 
 padding-top: 30px;
 
justify-content: center;
flex-direction: column;
 
`

export const GrouptableCon2 =styled.div`
display: flex;
 
width: 1150px;
background-color: white;
border-radius: 20px;
border-top-left-radius:20px;
border-top-right-radius:20px;
z-index: 0;
`

export const StartMesage = styled.button`
display: inline-flex;
padding: 14px 20px;
flex-direction: column;
align-items: flex-start;
gap: 10px;
border-radius: 6px;
background: var(--600, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #2C2669);
color: var(--Color-7, #FFF);

/* Medium/14px -> 20px */
font-family: "Public Sans";
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 16px; /* 114.286% */
`
export const StartBtn = styled.div`
display: flex;
justify-content: end;
z-index: 99999;
margin-bottom: 400px;
`