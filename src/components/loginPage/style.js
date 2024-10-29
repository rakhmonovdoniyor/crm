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
export const DemoAc = styled.div`
display: flex;
justify-content: space-between;
`
export const DemoAc2 = styled.div`
display: flex;
/* flex-direction: column; */
`
export const DemoAc3 = styled.div`

`
 

export const DemoAc2Wrapper = styled('div')({
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: '20px auto',
    textAlign: 'center',
    border: '1px solid #e0e0e0',
 
  });
  
  export const EmailText = styled('h4')({
    fontSize: '18px',
    color: '#333',
    margin: '10px 0',
    fontWeight: 'bold',
    cursor: "pointer",
    '&:hover': {
    color: '#6053B9',
  },
  });
  
  export const PasswordLabel = styled('p')({
    fontSize: '16px',
    color: '#666',
    margin: '10px 0 5px',
  });
  
  export const PasswordText = styled('h4')({
    fontSize: '18px',
    color: '#333',
    margin: '5px 0',
    fontWeight: 'bold',
    cursor: "pointer",
    '&:hover': {
    color: '#6053B9',
  },
  });

export  const InfoWrapper = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    margin: '10px 0',
  });
  