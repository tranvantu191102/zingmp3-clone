import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

import Search from './Search'
import HeaderRight from './HeaderRight'

const HeaderContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    padding-left:240px;
    background-color: ${props => props.theme.bgColor};
    z-index: 99;
  

    @media (max-width: 1024px) {
        padding-left: 70px;
    }
`


const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 60px;
    box-shadow: 7px 5px 8px ${props => props.theme.borderColor};
    @media (max-width: 1024px) {
        padding: 0 20px;
    }
`
const HeaderLeftContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    width: 70%;
`

const HeaderLeftItem = styled.div`
  display: flex;
    align-items: center;
    justify-content: start;
    width: 16%;
    color:  ${props => props.theme.mainColor};
`
const HeaderRightContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 30%;
`

const Header = () => {
    return (
        <HeaderContainer >
            <HeaderWrapper>
                <HeaderLeftContainer>
                    {/* <HeaderLeftItem>

                        <FontAwesomeIcon icon={faArrowLeftLong}
                            style={{ marginRight: '10px', cursor: 'pointer', padding: '2px 5px' }} />

                        <FontAwesomeIcon icon={faArrowRightLong}
                            style={{ marginLeft: '10px', cursor: 'pointer', padding: '2px 5px' }} />
                    </HeaderLeftItem> */}
                    <Search />
                </HeaderLeftContainer>
                <HeaderRightContainer>
                    <HeaderRight />
                </HeaderRightContainer>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

export default Header