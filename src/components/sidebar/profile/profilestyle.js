import styled from "styled-components";

export const Con = styled.div`
padding: 100px;
margin-left: 200px;
`
export const BlockWrapp = styled.div`
width: 340px;
height: 310px;
flex-shrink: 0;
border-radius: 26px;
padding: 5px;
border: 1px solid var(--200, #CFCBEA);
background-color: var(--Color-7, #FFF);
flex-direction: column;
display: flex;
/* main */
box-shadow: 2px 2px 4px 0px rgba(174, 191, 237, 0.25);
`
export const Block = styled.div`
display: flex;
width: 328px;
height: 106px;
padding: 35px 20px 35px 204px;
/* justify-content:; */
align-items: center;
flex-shrink: 0;
border-radius: 20px;
background-color: var(--300, #BFBAE3);

`
export const Avatar = styled.div`
display: flex;
flex: 1;
border: 1px solid red;
align-items: center;
`
export const EditProfile = styled.div`
display: flex;
flex: 1;
align-items: center;
justify-content: center;

`
export const Avatarright = styled.div`
display: flex;
width: 100px;
height: 36px;
/* padding: 10px 25px; */
justify-content: center;
align-items: center;
gap: 6px;
border-radius: 6px;
background-color: #2C2669;
cursor: pointer;
color: var(--50, var(--Color-7, #FFF));

/* Regular/12px -> 16px */
font-family: "Public Sans";
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 16px; /* 133.333% */
`

export const Blockbottom = styled.div`
display: flex;
padding: 15px;
`
export const Blockbottomleft = styled.div`
display: flex;
flex: 1;
/* align-items: center; */
flex-direction: column;
gap: 10px;
h1{
    color: var(--600, #2C2669);

/* Bold/18px -> 24px */
font-family: "Public Sans";
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 24px; /* 133.333% */
}
`
export const Blockbottomright = styled.div`
display: flex;
flex: 1;
`
export const AvatarImg = styled.img`
display: flex;
width: 96px;
height: 96px;
padding: 4px;
justify-content: center;
align-items: center;
flex-shrink: 0;
border-radius: 999px;
border: 4px solid var(--Color-7, #FFF);
/* background: var(--600, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #2C2669); */

width: 88px;
height: 88px;
flex-shrink: 0;
border-radius: 9999px;
background: url(<path-to-image>) lightgray 50% / cover no-repeat;
margin-top: -50px;
`

export const CEO = styled.h2`
display: flex;
width: 50px;
height: 25px;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
border-radius: 6px;
background: var(--400, #A098D5);
h2{
    color: var(--100, #EFEEF8);
font-family: Inter;
font-size: 10px;
font-style: normal;
font-weight: 700;
line-height: 16px; /* 160% */
}
`
export const Bottomdiv=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
p{
    color: var(--400, #A098D5);

/* Regular/14px -> 16px */
font-family: "Public Sans";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 16px; /* 114.286% */
}
h4{
    color: var(--600, #2C2669);
text-align: right;

/* Bold/14px -> 16px */
font-family: "Public Sans";
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 16px; /* 114.286% */
}
`