import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as AiIcons from 'react-icons/ai';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import {  useNavigate } from 'react-router-dom';
import { SidebarData } from './SidebarData';

    const Sidebar = ({ categories, setSelectedCategory}) => {
    const [sidebar, setSidebar] = useState(false);
   
    const showSidebar = () => setSidebar(!sidebar);
    const navigate = useNavigate();

    const handleOptionSelect = (category) => {
      setSelectedCategory(category);
      navigate(`/${category.toLowerCase()}`); // Redirect to the respective page
    };
    return (
        <>
        
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavIcon to='#'>
                        <Logo>
                            <img src='/img/viewers-starwars.png' alt="Disney+" onClick={showSidebar} />
                        </Logo>
                    </NavIcon>
                </Nav>
                <SearchContainer>
                    <SearchInput type="text" placeholder="Search..." />
                    <SearchButton>
                        <AiIcons.AiOutlineSearch size={20} />
                    </SearchButton>
                </SearchContainer>
                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <NavIcon to='#'>
                            <AiIcons.AiOutlineClose onClick={showSidebar} />
                        </NavIcon>
                        {/* SidebarData */}
                        {categories.map((item, index) => {
                            return <SubMenu
                             item={item} 
                             key={index} 
                             onClick={() => handleOptionSelect(item.title)}
                              />
                            // {item.title}
                       })}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
            <Link to="/films/movies1">Movies1</Link>
            {/* <Link to={`/${category.toLowerCase()}`}>{category}</Link> */}
        </>
    );
};

export default Sidebar;

const Nav = styled.div`
position  : fixed;
top: 0;
left: 0;
right: 0;
height: 76px;
background-color: #03123D;

;
display: flex;
justify-content: space-between;
align-items: center;
padding : 20 px;
z-index: 3; 
`;

const NavIcon = styled(Link)`
margin-left: 0.5rem;
align-items: center;

height: 80px;
font-size : 2rem;
display: flex;
justify-content: flex-start;
`;

const Logo = styled(Link)`
padding: 0;
width : 100px;
height: 50px;
font-size : 0;
display: inline-block;

img{
    display: block;
    width: 100%
}
`;
const SearchContainer = styled.div`
  position: absolute;
  top: 40px;
  right: 20px;
  border-radius:5px;
  display: flex;
  margin-right:40px;
  align-items: center;
  @media screen and (max-width: 768px) {
    top: 16px;
    right: 16px;
  }
  
`;


const SearchInput = styled.input`
  padding: 6px 30px 6px 10px;
  border-radius: 5px;
  border: 2px solid #ccc;
  background-color: transparent;
  color: #f1f1f1;
  width: 200px;
  z-index:9;
`;

const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  background-color: transparent;
  color: #f1f1f1;
  border: none;
  cursor: pointer;
  z-index:5;
  @media screen and (max-width: 768px) {
    right: 4px;
  }
`;

const SidebarNav = styled.nav`
margin-bottom: 29px;
background:#03123D;
width:250px;
height:100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0;
margin-left:20px;
left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
transition : 350ms;
z-index: 2;
overflow-y:auto;
&::-webkit-scrollbar {
  display: none;
}

@media screen and (max-width: 768px) {
    width: 100%;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  }

`;
const SidebarWrap = styled.div`
width: 100%;
`;
