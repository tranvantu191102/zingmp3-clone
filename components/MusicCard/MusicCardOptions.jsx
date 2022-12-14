import React, { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus, faComment, faArrowsDownToLine, faShare } from '@fortawesome/free-solid-svg-icons'
import { faClone } from '@fortawesome/free-regular-svg-icons'
import styled from 'styled-components'

const MusicCardOptionsContainer = styled.div`
    position: absolute;
    top:0;
    right: ${props => props.lastItem ? '0' : '-230px'};
    z-index: 99999;
    width: 250px;
    padding: 14px 0;
    border-radius: 16px;
    background-color: ${props => props.theme.bgColor};
    visibility: ${props => props.active ? 'visible' : 'hidden'};
    opacity: ${props => props.active ? '100' : '0'};
    pointer-events: ${props => props.active ? 'auto' : 'none'};
    transition: all .2s ease;
    box-shadow: 0 2px 5px rgba(0,0,0,0.4);

    @media (max-width: 1024px) {
        right: ${props => props.lastItem ? '0' : '-150px'};
    }
`
const MusicCardOptionsItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 10px 14px;
    background-color: ${props => props.theme.bgColor};
    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme.sidebarColor};
    }
`
const MusicCardOptionsItemIcon = styled.div`
    margin-right: 20px;
    color: ${props => props.theme.mainColor};
    font-size: 13px;
    width: 20px;
`
const MusicCardOptionsText = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: ${props => props.theme.mainColor};
`

const MusicCardOptions = ({ active, setShowOptions, toggleRef, lastItem }) => {
    const contentRef = useRef()
    useEffect(() => {
        const hanlder = (e) => {
            if (!contentRef.current.contains(e.target) && !toggleRef.current.contains(e.target)) {
                setShowOptions(false)
            }
        }

        document.addEventListener('click', hanlder)
        return () => {
            document.removeEventListener('click', hanlder)
        }
    }, [])
    return (
        <MusicCardOptionsContainer ref={contentRef} active={active} lastItem={lastItem}>
            <MusicCardOptionsItem>
                <MusicCardOptionsItemIcon>
                    <FontAwesomeIcon icon={faSquarePlus} />
                </MusicCardOptionsItemIcon>
                <MusicCardOptionsText>Th??m v??o danh s??ch ph??t</MusicCardOptionsText>
            </MusicCardOptionsItem>
            <MusicCardOptionsItem>
                <MusicCardOptionsItemIcon>
                    <FontAwesomeIcon icon={faComment} />
                </MusicCardOptionsItemIcon>
                <MusicCardOptionsText>B??nh lu???n</MusicCardOptionsText>
            </MusicCardOptionsItem>
            <MusicCardOptionsItem>
                <MusicCardOptionsItemIcon>
                    <FontAwesomeIcon icon={faArrowsDownToLine} />
                </MusicCardOptionsItemIcon>
                <MusicCardOptionsText>T???i xu???ng</MusicCardOptionsText>
            </MusicCardOptionsItem>
            <MusicCardOptionsItem>
                <MusicCardOptionsItemIcon>
                    <FontAwesomeIcon icon={faClone} />
                </MusicCardOptionsItemIcon>
                <MusicCardOptionsText>Sao ch??p link</MusicCardOptionsText>
            </MusicCardOptionsItem>
            <MusicCardOptionsItem>
                <MusicCardOptionsItemIcon>
                    <FontAwesomeIcon icon={faShare} />
                </MusicCardOptionsItemIcon>
                <MusicCardOptionsText>Chia s???</MusicCardOptionsText>
            </MusicCardOptionsItem>
        </MusicCardOptionsContainer>
    )
}

export default MusicCardOptions