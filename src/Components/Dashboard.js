import React from 'react';
import styled from 'styled-components';

const Dashboard = () => {
  return (
    <CT>
      <Container>
        <Wrap>
          <img src="/img/star-warsdash.jpg" alt="" />
        </Wrap>
        <H1>
          Welcome to Star Wars Dashboard
        </H1>
        <Description>
          Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.
        </Description>
      </Container>
    </CT>
  )
}

export default Dashboard;

const CT = styled.div`
justify-content: center;
align-items: center;
display: flex;
height:100vh;
margin-left: 70px;
`;


const Container = styled.div`
width: 695px;
height: 386px;
padding: 24px;
border-radius: 12px;
border: 2px;
gap: 12px;
background-color: #f1f1f1;


`;

const Wrap = styled.div`
padding-top: 40%;
 border-radius: 10px;
 cursor: pointer;
 overflow:hidden;
 position : relative;
 
 transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
 border: 3px solid rgba(249, 249, 249, 0.1);
 img{
    inset: 0px;
    display: block;
    height: 100%;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index:1;
    top: 0;
 }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
     transform: scale(1.05);
     border-color: rgba(249, 249, 249, 0.8);
  }
`;

const Description = styled.div`
width: 647px
height: 40px
opacity: 0.800000011920929px
font-family: Open Sans;
font-size: 14px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0.14000000059604645px;
text-align: left;
color: #3B3F5C;
`;

const H1 = styled.section`
padding-top: 3%;
padding-bottom: 1%;
color: #3B3F5C;
font-family: Open Sans;
font-size: 26px;
font-weight: 800;
line-height: 24px;
letter-spacing: 0.14000000059604645px;
text-align: left;
`;
