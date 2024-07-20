import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import { Container,  ContainerWrapper, LangButton, LogButton, NaavRight, NavLeft } from '../../styles/homeStyle/style';
// import BackggroundImg from './backgroun';
import Request2 from '.';


const ReqPage = () => {
  return (
    

        <ContainerWrapper>
            <Container>
                <NavLeft>
                    <h1>EduManSim</h1>
                </NavLeft>
                <NaavRight>
                    <p>01097575501</p>
                    <LangButton><LanguageIcon/> <h1>ENG</h1></LangButton>
                    
                    <LogButton>Log in</LogButton>
                </NaavRight>

            </Container>
            

            <Request2/>
        </ContainerWrapper>
     
     
  )
}

export default ReqPage;