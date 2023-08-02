import React, { useState } from "react";
import {Link} from 'react-router-dom'
import styled from 'styled-components'
 const SubMenu=({item, onClick, selectedCategory})=>{
    const [subNav, setSubNav]= useState(false)
    const showSubNav=()=> setSubNav(!subNav);
   
    return(
        <>
        <SidebarLink 
        to={item.path}
         onClick={item.subNav && showSubNav}
         >
            <div>
                {item.icon}
                <SidebarLabel>{item.title}</SidebarLabel>
            </div>
            <div>
                {item.subNav && subNav 
                ? item.iconClosed 
                : item.subNav 
                ? item.iconOpened
                : null }
            </div>
        </SidebarLink>
        {subNav && item.subNav.map((item, index)=>{
            return(
                <DropdownLink 
                to={item.path} 
                key={index}       
                >
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </DropdownLink>
            )
        })}
        </>
    )
 }
 export default SubMenu;

 const SidebarLink = styled(Link)`
 display:flex;
 color:#e1e9fc;
 justify-content: space-between;
 align-items: center;
 padding: 5px;
 list-style: none;
 height: 60px;
 text-decoration: none;
 font-size: 18px;
border-radius: 6px;
 &:hover{
    background: #CB1A80;
 cursor: pointer;
 }
 `;

 const SidebarLabel=styled.span`
  margin-left: 16px;
 `;
 const DropdownLink= styled(Link)`
 
 height: 60px;
 padding-left: 3rem;
 display: flex;
 align-items: center;
 text-decoration: none;
 color: #f1f1f1;
 font-size: 16px;

 &:hover{
    background: #808080;
    cursor: pointer;
 }
 `;