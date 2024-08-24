import styled from "styled-components";

export const ConGroup = styled.div`
display: flex;
flex-direction: column;
/* align-items: center; */
`
export const GroupContainer = styled.div`
padding: 40px 0px;
`
export const Table1 = styled.div`

    width: 1084px;
    background: #fff;
    overflow: hidden;
    border-radius: 16px;
    font-family:"Public Sans" ;
    border-collapse: collapse;
    box-shadow: 0px 0px 1px 0px rgba(12, 26, 75, 0.24), 0px 3px 8px -1px rgba(50, 50, 71, 0.05);

`
export const ConfGroup = styled.div`
  display: flex;
/* padding: 4px 12px; */
width: 200px;
height: 25px;
/* justify-content: center; */
align-items: center;
gap: 10px;
 
font-family: "Public Sans";
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 16px; /* 133.333% */
color: var(--600, #2C2669);

/* Bold/14px -> 16px */
font-family: "Public Sans";
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 16px; /* 114.286% */
`

export const Active = styled.div`
display: flex;
flex-direction:column;
/* justify-content: center; */
gap: 10px;
justify-content: flex-start;
/* padding-right: ; */
h1{
    color: var(--600, #2C2669);

/* Bold/14px -> 16px */
font-family: "Public Sans";
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 16px; /* 114.286% */
}

`
export const H4Active = styled.div`
  display: flex;
/* padding: 4px 12px; */
width: 90px;
height: 25px;
justify-content: center;
align-items: center;
gap: 10px;
color: var(--500, #6053B9);
border-radius: 4px;
background: var(--100, #EFEEF8);
/* Regular/12px -> 16px */
font-family: "Public Sans";
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 16px; /* 133.333% */
`
export const View = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 36px;
height: 24px;
flex-shrink: 0;
border-radius: 4px;
background: var(--Green-color, #0AB711);
color: var(--50, var(--Color-7, #FFF));
text-align: center;
font-family: Inter;
font-size: 7px;
font-style: normal;
font-weight: 600;
line-height: 16px; /* 228.571% */
letter-spacing: 0.42px;
/* margin-left:20px ; */
`
export const Border = styled.div`
 /* padding: 10px ; */
 width: 50px;
 height: 30px;
 border: 1px solid black;
 border-radius: 4px;
`
export const BorderGray = styled.div`
 /* padding: 10px ; */
 width: 50px;
 height: 30px;
 border: 1px solid #CFCBEA;
 border-radius: 4px;
margin-left: 10px;
`
export const Sep5 = styled.div`
display: flex;
width: 8px;
height: 14px;
/* flex-direction: column; */
/* align-items: center; */
/* justify-content: center; */
flex-shrink: 0;
color: #B7140A;
text-align: center;
font-family: Inter;
font-size: 10px;
font-style: normal;
font-weight: 700;
line-height: 16px; /* 160% */
text-transform: uppercase;
margin-left: 20px;
`

export const HeadAtt = styled.div`
display: flex;
gap: 30px;
padding:10px; 
/* align-items: center; */
justify-content: center;
padding-left: 200px;

`

export const Headborder = styled.div`

width: 156px;
height: 30px;
flex-shrink: 0;
border-radius: 99px;
border: 1px solid var(--600, #2C2669);
display: flex;
justify-content: center;
align-items: center;
gap: 8px;
h2{
  color: var(--600, #2C2669);
text-align: right;

/* Regular/12px -> 16px */
font-family: "Public Sans";
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 16px; /* 133.333% */
}
img{
  color: var(--600, #2C2669);
text-align: right;

/* Regular/12px -> 16px */
font-family: "Public Sans";
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 16px; /* 133.333% */
}
`
export const Headborder2 = styled.div`

width: 116px;
height: 30px;
flex-shrink: 0;
border-radius: 99px;
border: 1px solid var(--600, #2C2669);
display: flex;
justify-content: center;
align-items: center;
gap: 8px;
img{
  width: 14px;
height: 14px;
}
h2{
  color: var(--600, #2C2669);
/* Regular/12px -> 16px */
font-family: "Public Sans";
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 16px; /* 133.333% */
}
 

 
`
export const ThAll = styled.th`
/* display: flex; */
/* justify-content: center; */
/* align-items: center; */
color: #A098D5;
text-align: center;
font-family: "Public Sans";
font-size: 10px;
font-style: normal;
font-weight: 600;
line-height: 16px; /* 160% */
letter-spacing: 0.6px;
text-transform: uppercase;
`
export const HistoryTable = styled.div`

padding: 30px;
/* width: 1084px; */
height: 282px;
flex-shrink: 0;
border-radius: 16px;
background: var(--Color-7, #FFF);
box-shadow: 0px 3px 8px 0px rgba(50, 50, 71, 0.05), 0px 0px 1px 0px rgba(12, 26, 75, 0.24);
`
export const Flex1 = styled.div`
display: flex;
flex-direction:column;
 gap: 20px;
flex: 1;
h2{
  color: var(--500, #6053B9);

/* Regular/16px -> 20px */
font-family: "Public Sans";
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 125% */
}
p{
  color: var(--500, #6053B9);

/* Regular/12px -> 16px */
font-family: "Public Sans";
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 16px; /* 133.333% */
}
`
export const Flex2 = styled.div`
display: flex;
flex: 1;
align-items: flex-end;
flex-direction:column ;

/* justify-content: flex-end; */
`
export const Line =styled.div`
width: 1100px;
flex-shrink: 0;
height: 2px;
background-color: var(--300, #BFBAE3);
margin-top: 30px;
`
export const FlexWrap = styled.div`
display: flex;

`