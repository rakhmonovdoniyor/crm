import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import { Container,  ContainerWrapper, LangButton, LogButton, NaavRight, NavLeft } from '../../styles/homeStyle/style';
import BackggroundImg from './backgroun';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    

        <ContainerWrapper>
            <Container>
                <NavLeft>
                    <h1>EduManSim</h1>
                </NavLeft>
                <NaavRight>
                    <p>01097575501</p>
                    <LangButton><LanguageIcon/> <h1>ENG</h1></LangButton>
                    <Link to="/signlogin">
                    <LogButton>Log in</LogButton>
                    </Link>
                </NaavRight>

            </Container>
            

            <BackggroundImg/>
        </ContainerWrapper>
     
     
  )
}

export default Navbar;