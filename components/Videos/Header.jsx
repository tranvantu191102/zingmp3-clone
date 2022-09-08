import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import { headerDataMV } from '../../utils/data/header-data'
const Container = styled.div`
    padding-left: 240px;
    margin-top: 70px;
    height: 64px;
    background-color: ${props => props.theme.bgColor};
`
const Wrap = styled.div`
    display: flex;
    height: 64px;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid  ${props => props.theme.borderColor};
    
`
const TitleWrap = styled.div`
    margin-left: 54px;
`
const Title = styled.h2`
    font-size: 26px;
    font-weight: 700;
    color: ${props => props.theme.mainColor};
    padding-right: 20px;
    border-right: 1px solid  ${props => props.theme.borderColor};
`
const Menu = styled.div`
      display: flex;
    align-items: center;
    justify-content: flex-start;
`
const Item = styled.p`
    padding:0 15px;
    margin: 0 10px;
    text-transform: uppercase;
    cursor: pointer;
    color: ${props => props.active ? props.theme.activeColor : props.theme.mainColor};
    position: relative;

    &::before {
        position: absolute;
        content: "";
        top: calc(100% + 20px);
        left: 0;
        width: 100%;
        height: 2px;
        background-color: ${props => props.theme.activeColor};
        visibility: ${props => props.active ? 'visible' : 'hidden'};
        opacity: ${props => props.active ? '100' : '0'};
        transform:${props => props.active ? 'scale(1)' : 'scale(0)'};
        transition: all .3s ease;
    }

`

const Header = () => {
    const id = useRouter().query.id
    return (
        <Container>
            <Wrap>
                <TitleWrap>
                    <Title>MV</Title>
                </TitleWrap>
                <Menu>
                    {
                        headerDataMV.map((item, index) => (
                            <Link href={`/videos/${item.id}`} key={index}>
                                <Item active={item.id === id}>{item.display}</Item>
                            </Link>
                        ))
                    }
                </Menu>
            </Wrap>
        </Container>
    )
}

export default Header