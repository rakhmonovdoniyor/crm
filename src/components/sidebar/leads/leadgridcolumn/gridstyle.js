import styled from "styled-components";

export const GridCon = styled.div`
display: flex;
gap: 100px;
padding-right: 280px;
`
export const GridCon2 = styled.div`
display: flex;
flex: 1;
justify-content: flex-start;
align-items: center;

`
export const Grid1 = styled.div`
width: 387px;
height: 662px;
flex-shrink: 0;
border-radius: 16px;
background: var(--Color-7, #FFF);
padding: 20px;
gap: 20px;
display: flex;
flex-direction: column;
`
export const FromWhere = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
padding-bottom: 20px;
h1{
    color: var(--600, #2C2669);

/* Bold/22px -> 30px */
font-family: "Public Sans";
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: 30px; /* 136.364% */
}
`
export const BtnWrap = styled.div`
display: flex;
:hover{
    color: white;
    background-color: #2C2669 ;
}
` 
export const Buttonplus = styled.button`
display: flex;
width: 347px;
height: 44px;
padding: 10px 40px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
border-radius: 6px;
border: 2px solid var(--600, #2C2669);
font-size: 20px;
background: var(--Color-7, #FFF);
`

export const Telegram30Wrap = styled.div`
width: 347px;
height: 64px;
flex-shrink: 0;
border-radius: 6px;
border: 1px solid var(--300, #BFBAE3);
justify-content: space-between;
display: flex;
align-items: center;
padding: 20px;
svg:hover{
    cursor: pointer;
    
}
`
export const Telegram30 = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
p{color: var(--600, #2C2669);

/* Regular/14px -> 16px */
font-family: "Public Sans";
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 16px; /* 114.286% */

}
h1{
    color: var(--500, #6053B9);

/* Bold/22px -> 30px */
font-family: "Public Sans";
font-size: 22px;
font-style: normal;
font-weight: 700;
line-height: 30px; /* 136.364% */
}
`