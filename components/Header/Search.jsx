import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const SearchContainer = styled.div`
    margin-left: 10px;
    width: 70%;
`
const SearchWrap = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 10px 5px;
    background-color: ${props => props.theme.sidebarColor};
    border-radius: 10px;
    height: 40px;
`
const SearchIcon = styled.div`
    padding: 0 8px;
    cursor: pointer;
`

const SearchInput = styled.input`
    outline: none;
    border: none;
    background-color: transparent;
    padding: 10px 0;
    width: 100%;
`

const Search = () => {
    return (
        <SearchContainer>
            <SearchWrap>
                <SearchIcon>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </SearchIcon>
                <SearchInput
                    type="text"
                    placeholder='Tìm kiếm bài hát, nghệ sĩ, lời bài hát...'

                />
            </SearchWrap>
        </SearchContainer>
    )
}

export default Search