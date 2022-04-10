import React from 'react'
import {SidebarContainer, SidebarMenu, SidebarMenuLink, Icon, CloseIcon, SidebarRoute, SideBtnWrapp} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
            <CloseIcon/>
        </Icon>
            <SidebarMenu>
                <SidebarMenuLink to="/">Pizza</SidebarMenuLink>
                <SidebarMenuLink to="/">Desserts</SidebarMenuLink>
                <SidebarMenuLink to="/">Full Menu</SidebarMenuLink>
            </SidebarMenu>
            <SideBtnWrapp>
                <SidebarRoute to="/">Order Now</SidebarRoute>
            </SideBtnWrapp>
    </SidebarContainer>
  )
}
export default Sidebar
