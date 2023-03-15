import { MdSearch } from 'react-icons/md'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Search() {

    const [valueInput, setValueInput] = useState('')
    const handleSearch = () => {
        setValueInput('')
    }
    return (
        <SearchPane>
            <h3>Search Country:</h3>
            <SearchElement>

                <input
                    onChange={e => setValueInput(e.target.value)}
                    value={valueInput}
                    type="text" placeholder='Input and enter to search...'>
                </input>
                <Link to={valueInput !== '' ? `/name/${valueInput}` : '/all'} >
                    <div onClick={handleSearch} style={{ height: '100%', width: '48px' }}><MdSearch className='iconSearch' /></div>
                </Link>
            </SearchElement>
        </SearchPane>
    )
}

export default Search

const SearchPane = styled.div`
    max-width: 280px;
    width: 100%;
    margin-top: 20px;
    padding-left: 20px;
    h3{
        font-size: 1.8rem;
        font-weight: 600;
        text-shadow: var(--text-shadow);
    }
`


const SearchElement = styled.div`
    margin-top: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 34px;
    background: #fff;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: var(--box-shadow);

    a{
        color: #ccc;
        width: 38px;
    }

    .iconSearch{
        height: 80%;
        width: 80%;
        padding: 2px;
        text-align: center;
        background: #aaa;
        box-shadow: none;
        opacity: 0.75;
        transition: opacity 0.2s linear;

        &:hover{
            opacity: 1;
            cursor: pointer;
        }
    }

    input{
        border: 0;
        outline: none;
        width: 100%;
        font-size: 1.8rem;
        font-weight: 500;
        margin: 0 8px;
    }
`