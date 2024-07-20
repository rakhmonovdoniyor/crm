import styled from "styled-components";

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
/* border:  1px solid red; */
justify-content: space-between;
gap: 30px;
/* position: fixed; */
`
export const ColGrid = styled.div`
 display: flex;
 display: inline-flex;
justify-content: center;
align-items: flex-start;

    /* :hover{
        color:#2C2669 ;
        /* border-radius: 0px 6px 6px 0px; */
/* border: 1px solid var(--600, #2C2669);
background-color:  #2C2669;
    } */ 
     /* "0px 5px 5px 0px " : "5px 0px 0px 5px" */
 
`
// export const Colimg = styled.img`
// border: 1px solid blue;
// /* border-radius:  5px 0px 0px 5px ; */
// display: flex;
// padding: 10px 20px;
// flex-direction: column;
// align-items: flex-start;
// gap: 10px;
// width: 24px;
// height: 24px;
// color: #2C2669 ;
// border-radius: 6px 0px 0px 6px;
// border: 1px solid var(--600, #2C2669);
// `
// export const Gridimg = styled.img`
// border: 1px solid blue;
// /* border-radius:  0px 5px 5px 0px ; */
// display: flex;
// padding: 10px 20px;
// flex-direction: column;
// align-items: flex-start;
// gap: 10px;
// width: 24px;
// height: 24px;
// color: #2C2669 ;
// border-radius: 0px 6px 6px 0px;
// border: 1px solid var(--600, #2C2669);


// `


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
