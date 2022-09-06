import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

import Image from 'next/image'
import styled from 'styled-components'
import gearImage from '../../assets/images/gear.svg'
import userImage from '../../assets/images/user.svg'

const HeaderRightMenu = styled.div`
     display: flex;
    align-items: center;
    justify-content: end;
`
const HeaderRightItem = styled.div`
    padding: 9px 12px;
    background-color: ${props => props.theme.sidebarColor};
    border-radius: 50%;
    margin-right: 10px;
    cursor: pointer;
`
const ToggleThemeContainer = styled.div`
    margin-right: 20px;
`
const InputCheckbox = styled.input`
     opacity: 100;
    position: absolute;
`

const Label = styled.label`
  width: 30px;
  height: 16px;
  background-color:${props => props.theme.bgColor};
  display: flex;
  border-radius:50px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid  ${props => props.theme.mainColor};
  padding: 5px;
  cursor: pointer;
  position: relative;
  transform: scale(1.5);
`
const Ball = styled.div`
     width: 16px;
  height: 16px;
  background-color: ${props => props.theme.mainColor};
  position: absolute;
  top: -1px;
  left: 0;
  border-radius: 50%;
  transition: transform 0.2s linear;
  transform: ${props => props.active ? 'translateX(12px)' : 'translateX(0)'};
`

const HeaderRight = () => {

    const { theme, setTheme } = useContext(ThemeContext)
    const handleOnChangeTheme = (e) => {
        if (e.target.checked) {
            setTheme('dark')
        } else setTheme('light')
    }

    return (
        <HeaderRightMenu>
            <ToggleThemeContainer>
                <InputCheckbox type="checkbox" className="checkbox" id="checkbox"
                    checked={theme === 'dark'}
                    onChange={(e) => handleOnChangeTheme(e)} />
                <Label htmlFor="checkbox" className="label">
                    <Ball className='ball' active={theme === 'dark'}></Ball>
                </Label>
            </ToggleThemeContainer>
            <HeaderRightItem>
                <Image
                    src={gearImage}
                    width={24}
                    height={24}
                />
            </HeaderRightItem>
            <HeaderRightItem>
                <Image
                    src={userImage}
                    width={24}
                    height={24}
                />
            </HeaderRightItem>
        </HeaderRightMenu>
    )
}

export default HeaderRight