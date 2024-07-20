import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: flex-end;
/* align-items: center; */
`
export const Container2 = styled.div`
display: flex;
flex: 1;
justify-content: flex-end;
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
export const LogBtnWrap = styled.div`
display: flex;
:hover{
    color:  ${(props) => (props.$ptag ? "yellow" : "white")};
    background-color:  ${(props) => (props.$ptag ? "white" : "#2C2669 ")};
    border-radius: 5px;
}
    /* button:before {
	content:'';
	position: absolute;
	top: 0;
	left: 0;
	width: 0;
	height: 42px;
	background: rgba(255,255,255,0.3);
	border-radius: 5px;
	transition: all 2s ease;
}
button:hover:before {
	width: 100%;
} */

`
export const LogBtn = styled.div`
display: flex;
width: 136px;
height: 44px;
padding: 10px 0px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
border-radius: 6px;
border: 1px solid var(--600, #2C2669);
color: var(--600, #2C2669);
cursor: pointer;
/* Regular/18px -> 24px */
font-family: "Public Sans";
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 133.333% */

`
export const Reqdemo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 50px;
h1{
    color: var(--600, #2C2669);

/* Bold/28px -> 36px */
font-family: "Public Sans";
font-size: 28px;
font-style: normal;
font-weight: 700;
line-height: 36px; /* 128.571% */
}
p{
    color: var(--500, #6053B9);

/* Regular/18px -> 24px */
font-family: "Public Sans";
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 133.333% */
}
`
export const PhoneEmail = styled.div`
display: flex;
gap: 20px;
align-items: center;
cursor: pointer;
img{
    display: flex;
/* width: 44px;
height: 44px; */
/* border: 1px solid blue; */
border-radius: 6px;
background-color: var(--300, #BFBAE3);
padding: 10px 10px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
}
p{
    color: var(--500, #6053B9);

/* Regular/18px -> 24px */
font-family: "Public Sans";
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 133.333% */
}
`
export const AS  = styled.div`
display: flex;
flex-direction: column;
gap: 30px;
padding-top: 30px;
`
export const Btnwrap = styled.div`
:hover{
    color: white;
    background-color: #2C2669 ;
   
}
`

export const SendRequest = styled.button`
display: flex;
width: 226px;
height: 44px;
padding: 10px 40px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
border-radius: 6px;
background-color: var(--600, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #2C2669);
color: black;
cursor: pointer;
/* Regular/18px -> 24px */
font-family: "Public Sans";
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 24px; /* 133.333% */
border: 1px solid;
background-color: white;
`

export const ModalInputContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 6px;

    &.phone:hover{
        background: none;
    }
`;

export const ModalLabel = styled.label`
    color: #6053b9;
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 16px;
`;