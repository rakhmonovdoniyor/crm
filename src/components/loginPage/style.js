import styled from "styled-components";

export const SignCon = styled.div`
    display: flex;
    padding: 50px;
    gap: 50px;
`
export const FlexLeft = styled.div`
display: flex;
flex: 1;
justify-content: flex-end;
/* align-items: center; */


`
export const FlexRight = styled.div`
display: flex;
flex: 1;
img{
    border-radius: 25px;
}
`
export const InputCon = styled.div`
width: 563px;
height: 890px;
border-radius: 20px;
background-color: var(--Color-7, #FFF);
padding: 30px;
`
export const LogoLang = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
button{
    cursor: pointer;
    width: 208px;
height: 44px;
flex-shrink: 0;
border-radius: 36.221px;
background-color:  #2C2669;
color: var(--Color-7, #FFF);

/* Medium/14px -> 20px */
font-family: "Public Sans";
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 16px; /* 114.286% */
}
`

export const SIgnWrap=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
padding-top: 100px;
`
export const InputCon1=styled.form`
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
/* padding-top: 100px; */
`
export const NextBtn = styled.button`
display: flex;
width: 483px;
height: 44px;
padding: 10px 40px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
border-radius: 6px;
color: white;
background-color: #2C2669;
cursor: pointer;
border: none;
`
export const Allp = styled.div`
display: flex;
flex-direction: column;
padding-bottom: 30px;
h1{
    color: var(--600, #2C2669);

/* Bold/30px -> 40px */
font-family: "Public Sans";
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: 40px; /* 133.333% */

}
p{
    color: #A098D5;

/* Regular/14px -> 16px */
font-family: "Public Sans";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 16px; /* 114.286% */
}

`

