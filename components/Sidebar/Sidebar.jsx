import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { headerDataTop, headerDataBottom } from '../../utils/data/header-data'
import logoPrimary from '../../assets/images/logo-primary.svg'
import logoSecond from '../../assets/images/logo-second.svg'

const SidebarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 240px;
    height: 100vh;
    background-color: ${props => props.theme.sidebarColor};
    color: ${props => props.theme.mainColor};
    z-index: 999;
`

const SidebarImageWrap = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    height: 70px;
    width: 100%;
    padding: 0 25px;
`

const SidebarMenu = styled.div`
     padding-bottom: 20px;
`
const SidebarMenuBottom = styled.div`
    padding-top: 20px;
    border-top: 1px solid ${props => props.theme.borderColor};
`
const SidebarMenuItem = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    cursor: pointer;
   padding: 4px 25px;
   position: relative;
   color: ${props => props.active ? props.theme.activeColor : 'unset'};

   &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 3px;
    transform: ${props => props.active ? 'scale(1)' : 'scale(0)'};
    background-color: ${props => props.theme.activeColor};
   }

   &:hover::before {
    transform: scale(1);
    transition: transform .2s ease;
   }
   
   &:hover {
    color: ${props => props.theme.activeColor};
    transition: color .2s ease;
   }
`
const SidebarMenuItemIcon = styled.div`
    margin-right: 10px;
`
const SidebarMenuItemText = styled.p`
    color: unset;
    font-size: 13px;
    font-weight: 700;
`


const Sidebar = () => {

    const { pathname } = useRouter()
    const [activeItem, setActiveItem] = useState(pathname)

    useEffect(() => {
        setActiveItem(pathname)
    }, [pathname])

    return (
        <SidebarContainer>
            <div>
                <SidebarImageWrap >
                    <Image
                        src={logoPrimary}
                        width={120}
                        height={40}
                    />
                </SidebarImageWrap>
                <SidebarMenu>
                    {
                        headerDataTop.map((item, index) => (
                            <Link href={item.path} key={index}>
                                <SidebarMenuItem active={activeItem === item.path}>
                                    <SidebarMenuItemIcon >
                                        <Image
                                            src={item.icon}
                                            width={25}
                                            height={25}
                                        />
                                    </SidebarMenuItemIcon>
                                    <SidebarMenuItemText className="">
                                        {item.display}
                                    </SidebarMenuItemText>
                                </SidebarMenuItem>
                            </Link>
                        ))
                    }
                </SidebarMenu>
                <SidebarMenuBottom>
                    {
                        headerDataBottom.map((item, index) => (
                            <Link href={item.path} key={index}>
                                <SidebarMenuItem active={activeItem === item.path}>
                                    <SidebarMenuItemIcon >
                                        <Image
                                            src={item.icon}
                                            width={25}
                                            height={25}
                                        />
                                    </SidebarMenuItemIcon>
                                    <SidebarMenuItemText className="">
                                        {item.display}
                                    </SidebarMenuItemText>
                                </SidebarMenuItem>
                            </Link>
                        ))
                    }
                </SidebarMenuBottom>
            </div>
        </SidebarContainer>
    )
}

export default Sidebar