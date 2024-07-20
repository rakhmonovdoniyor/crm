import styled from "styled-components"



export const Container2 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 30px;
`
export const Container3 = styled.div`
display: flex;
flex: 1;
justify-content: center;
flex-direction: column;
`
export const Container4 = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 30px;
margin: 50px;
/* padding: 50px; */
width: 563px;
height: 845px;
flex-shrink: 0;
border-radius: 20px;
background-color: var(--Color-7, #FFF);
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
h1{
    color: var(--600, #2C2669);

/* Bold/28px -> 36px */
font-family: "Public Sans";
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: 36px; /* 128.571% */
}
`
export const InputName = styled.input`
display: flex;
height: 58px;
padding: 8px 102px 8px 16px;
align-items: center;
align-self: stretch;
border-radius: 8px;
border: 1px solid var(--200, #CFCBEA);
background: var(--100, #EFEEF8);
`
export const InputPWrapp = styled.div`
/* display: flex;
align-items: start;
flex-direction: column;
gap: 10px; */

display: flex;
width: 483px;
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: 8px;
p{
    color: var(--500, #6053B9);
    align-self: stretch;
/* Bold/14px -> 16px */
font-family: "Public Sans";
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 16px; /* 114.286% */
}
`
export const SendButton = styled.div`
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
background: var(--600, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #2C2669);
color: var(--50, var(--Color-7, #FFF));
cursor: pointer;
/* Regular/18px -> 24px */
font-family: "Public Sans";
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 133.333% */
`
export const MiniWrap=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 160px;

p{
    color: var(--500, #6053B9);

/* Bold/14px -> 16px */
font-family: "Public Sans";
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 16px; /* 114.286% */
cursor: pointer;
}
`
export const Line = styled.div`
width: 483px;
height: 2px;
background-color: #6053B9;
`

export const Edit = styled.button`
display: flex;
/* height: 36px; */
padding: 6px 10px;
justify-content: center;
align-items: center;
gap: 6px;
border-radius: 6px;
background-color: #2C2669;
border: none;
cursor: pointer;
p{
    color: var(--50, var(--Color-7, #FFF));

/* Regular/12px -> 16px */
font-family: "Public Sans";
font-size: 12px;
font-style: normal;
font-weight: 400;
/* line-height: 16px; 133.333% */
}
`