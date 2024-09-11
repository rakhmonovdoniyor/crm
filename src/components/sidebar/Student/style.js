 

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
 

export const LeadsCon = styled.div`
display: flex;
margin-left: 250px ;
padding-top: 60px;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 50px;
`
export const LeadsCon2 = styled.div`
display: flex;
align-items: center;
 
justify-content: space-between;
gap: 15px;
 
`
export const ColGrid = styled.div`
 display: flex;
 display: inline-flex;
justify-content: center;
align-items: flex-start;

     
 
`


export const GridButton = styled.div`
  padding: 10px 20px;
  height: 43px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px 0px 0px 6px;
  border: 1px solid var(--600, #2c2669);
  background-color: #2c2669;
  background-color: ${(props)=> props.activeColor ? `#2c2669` : `transparent`};
  color: blue;
  cursor: pointer;
`;

export const ColumnButton = styled.div`
  padding: 10px 20px;
  height: 43px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 0px 6px 6px 0px;
  border: 1px solid var(--600, #2c2669);
  background-color: #2c2669;
  background-color: ${(props)=> props.activeColor ? `transparent` : `#2c2669`};
  color: blue;
  cursor: pointer;
`;

export const LeadsCon4 = styled.div`
display: flex;
margin-left: 300px ;
`
export const LeadsCon5 = styled.div`
display: flex;
margin-left: 300px ;
`

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const InputStyledIcon = styled.input`
  width: 200px;
  max-width: ${(props) => (props.$maxWidth318 ? `318px` : ``)};
  max-width: ${(props) => (props.$maxWidth170 ? `170px` : ``)};
  padding: 14px 8px 14px 36px;
  height: 44px;
  border: 1px solid var(--300, #bfbae3);
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
  border-radius: 8px;
  background: var(--Color-7, #fff);
  ///font

  /* &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  } */

  &::placeholder {
    color: var(--300, #bfbae3);
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 114.286% */
  }
`;

export const SearchIcon = styled.img`
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
`;

export const ResetButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* width: ${(props) => (props.$maxWidth ? "50%" : ``)};
  width: ${(props) => (props.$maxWidth100px ? "150px" : ``)}; */
  gap: 8px;
  padding: 12px;
  height: 44px;
  border-radius: 8px;
  border: 1px solid var(--300, #bfbae3);
  background: var(--Color-7, #fff);
  cursor: pointer;

  color: var(--300, #bfbae3);
  font-family: "Public Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 114.286% */
`;

export const SearchSection = styled.select`
    border-radius: 8px;
    border: 1px solid var(--300, #BFBAE3);
    background: var(--Color-7, #FFF);
    /* min-width: 200px; */
    height: 100%;
    padding: 14px 8px 14px 36px;
    cursor: pointer;
    color:  #2c2669;

`

export const SearchSectionOption = styled.option`
  width: 100%;
  max-width: ${(props) => (props.$maxWidth318 ? `318px` : ``)};
  max-width: ${(props) => (props.$maxWidth170 ? `170px` : ``)};
  padding: 14px 8px 14px 36px;
  height: 44px;
  border: 1px solid var(--300, #bfbae3);
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;
  border-radius: 8px;
  background: var(--Color-7, #fff);
  ///font

  /* &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  } */

   
    color: var(--300, #bfbae3);
    font-family: "Public Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 114.286% */
  
   /* 114.286% */ 
`
export const Addlead = styled.button`
display: flex;
/* padding: 4px 40px; */
height: 43px;
width: 150px;
/* flex-direction: column; */
align-items: center;
justify-content: center;
gap: 10px;
border-radius: 6px;
background: var(--600, linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #2C2669);
p{
    color: var(--Color-7, #FFF);
display: flex;
/* Medium/14px -> 20px */
font-family: "Public Sans";
font-size: 14px;
font-style: normal;
font-weight: 500;
/* line-height: 16px; 114.286% */
}
`

export const Leadhead = styled.div`
  /* border: 1px solid black; */
  display: flex;
  justify-content: start;
  align-items: start;
`;
