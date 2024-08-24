import styled from "styled-components";

export const GroupWrap = styled.div`
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 gap: 60px;
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
// export const 