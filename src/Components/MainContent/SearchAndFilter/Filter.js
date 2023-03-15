import { FaChevronDown, FaGlobeAfrica, FaGlobeAmericas, FaGlobeAsia, FaGlobeEurope } from 'react-icons/fa'
import { GiWorld, GiEarthAsiaOceania } from 'react-icons/gi'
import styled from 'styled-components'
import { useContext, useRef, useState, useEffect } from 'react'
import { ThemeContext } from '../../ThemeContext/themeContext'
import { Link } from 'react-router-dom'

function Filter() {
    const themeContext = useContext(ThemeContext)
    const refSelect = useRef(null)
    const [isSelect, setIsSelect] = useState(false);

    const handleSelect = () => {
        setIsSelect(!isSelect)
    }
    useEffect(() => {
        function handleClickOutside(e) {
            if (refSelect.current && !refSelect.current.contains(e.target)) {
                setIsSelect(false);
            }
        }

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [refSelect]);

    const regions = ['all', 'africa', 'americas', 'asia', 'europe', 'oceania']

    const [region, setRegion] = useState('')
    const nameUrl = window.location.href


    useEffect(() => {
        if (nameUrl.indexOf("region") < 0)
            setRegion('all')
        else {
            const nameCountry = nameUrl.slice(nameUrl.indexOf("region") + 7)
            setRegion(nameCountry)
        }
    }, [setRegion, nameUrl])

    return (
        <FilterPane>
            <h3>Filter by regions:</h3>
            <SelectPane >
                <Select className={themeContext.theme} onClick={handleSelect} ref={refSelect}>
                    <span >{region}</span>
                    <FaChevronDown />
                </Select>

                <SelectOption className={`${themeContext.theme} ${(isSelect ? '' : 'displayNone')} `}>
                    <Link to='/all'>
                        <SelectItem  >
                            <GiWorld />
                            <span>{regions[0]}</span>
                        </SelectItem>
                    </Link>

                    <Link to='/region/africa'>
                        <SelectItem  >
                            <FaGlobeAfrica />
                            <span>{regions[1]}</span>
                        </SelectItem>
                    </Link>

                    <Link to='/region/americas'>
                        <SelectItem   >
                            <FaGlobeAmericas />
                            <span>{regions[2]}</span>
                        </SelectItem>
                    </Link>

                    <Link to='/region/asia'>
                        <SelectItem  >
                            <FaGlobeAsia />
                            <span>{regions[3]}</span>
                        </SelectItem>
                    </Link>

                    <Link to='/region/europe'>
                        <SelectItem  >
                            <FaGlobeEurope />
                            <span>{regions[4]}</span>
                        </SelectItem>
                    </Link>

                    <Link to='/region/oceania'>
                        <SelectItem  >
                            <GiEarthAsiaOceania />
                            <span>{regions[5]}</span>
                        </SelectItem>
                    </Link>


                </SelectOption>

            </SelectPane>
        </FilterPane>
    )
}

export default Filter

const FilterPane = styled.div`
    max-width: 160px;
    width: 100%;
    margin-top: 20px;
    padding-right: 20px;
    h3{
        font-size: 1.8rem;
        font-weight: 600px;
        text-shadow: var(--text-shadow);
    }
`

const SelectPane = styled.div`
    width: 100%;
    margin-top: 8px;
    box-shadow: var(--box-shadow);
    position: ralative;
    cursor: pointer;

`
const Select = styled.div`
    padding: 0 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    height: 34px;
    user-select: none;

    span{
        font-size: 1.8rem;
        font-weight: bold;
    }
`

const SelectOption = styled.ul`
    width: 100%;
    max-width: 160px;
    margin-top: 2px;
    border-radius: 4px;
    position: absolute;
    overflow: hidden;
    z-index: 10;

    a{
        text-decoration: none;
        color: #000;
    }
`

const SelectItem = styled.li`
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    font-weight: 500;
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 4px;
    &:hover{
        font-weight: bold;
        background: var(--toggle-color);
    }

    span{
        margin-left: 4px;
    }
`
