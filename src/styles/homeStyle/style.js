import styled from "styled-components";
import rasm1 from "../../assets/home/back.png";



export const ContainerWrapper = styled.div`
display: flex;
flex-direction: column;
/* position: fixed; */
/* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px; */
`

export const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
background-color: white;
/* position: fixed; */
`
export const NavLeft = styled.div`
display: flex;
align-items: center;
flex: 3;
padding-left: 30px;
h1{
    color: var(--600, #2C2669);

/* Bold/30px -> 40px */
font-family: "Public Sans";
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: 40px; /* 133.333% */
}
`
export const NaavRight = styled.div`
display: flex;
flex: 1;
justify-content: space-around;
align-items: center;
gap: 50px;
padding-right: 50px;
p{
    color: var(--Ocean-dark, #1E1E1E);
/* Regular/16px -> 20px */
font-family: "Public Sans";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 125% */
}
`

export const Image1 = styled.div`
/* background-image: url(${rasm1});
display: flex;
text-align: center;
justify-content: center;
background-repeat: no-repeat;
background-size: cover;
background-color: #2c2669;
position: absolute;
width:100% ;
height: 700px; */

`
export const LangButton = styled.div`
display: flex;
width: 88px;
height: 40px;
padding: 10px 0px;
justify-content: center;
align-items: center;
gap: 4px;
flex-shrink: 0;
border-radius: 4px;
border: 1px solid var(--600, #2C2669);

/* Front Shadow */
box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.25);
h1{
   color: var(--600, #2C2669);
text-align: center;

/* Medium/16px -> 20px */
font-family: "Public Sans";
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: 20px; /* 125% */

}
:hover{
    color: var(--600, #2C2669);
    background-color: white;
}
`
export const LogButton = styled.button`
background-color: white;
display: flex;
width: 120px;
padding: 10px 0px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 4px;
background: var(--600, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #2C2669);
/* Front Shadow */
box-shadow: 0px 2px 30px 0px rgba(0, 0, 0, 0.25);
color: white;
border: 1px solid;
`



export const BackImgwrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid blue;
opacity: 1.95;
background: url(<path-to-image>) lightgray 0px -616px / 112.817% 183.589% no-repeat;
background-image: url(${rasm1});

    background-color: #2c2799;
    position: absolute;
    /* top: 50px; */
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    height: 100vh;
    width: 100vw;
    background-position: 10% 88%;
    flex-direction: column;
    color: white;
    
    h1 {
        font-size: 50px;
        text-align: center;
    }

  

h2{
    color: var(--Color-7, #FFF);
text-align: center;

/* Regular/20px -> 30px */
font-family: "Public Sans";
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: 30px; /* 150% */
}
/* justify-content: space-between; */
`
export const LineBackground = styled.div`
display: flex;
width: 1330px;
height: 2px;
background: #FFF;

`

export const FlexColumn = styled.div`
display: flex;
flex-direction: column;
flex: 2;
justify-content: end;

`

export const ReqBtnWrap = styled.div`
display: flex;
justify-content: center;
`

export const RequestBtn = styled.div`
        margin-top: 20px;
        display: flex;
padding: 12px 18px;
justify-content: center;
align-items: center;
gap: 10px;
border: none;
border-radius: 8px;
background: var(--Color-7, #FFF);
color: var(--600, #2C2669);
text-align: center;

/* Medium/18px -> 24px */
font-family: "Public Sans";
font-size: 18px;
font-style: normal;
font-weight: 500;
/* line-height: 24px; 133.333% */
    cursor: pointer;
`

export const FlexColumn2 = styled.div`
display: flex;
flex-direction: column;
flex: 1;
justify-content: end;
gap: 20px;

`