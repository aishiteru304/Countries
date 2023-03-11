import { FaChevronDown, FaGlobeAfrica, FaGlobeAmericas, FaGlobeAsia, FaGlobeEurope } from 'react-icons/fa'
import { GiWorld, GiEarthAsiaOceania } from 'react-icons/gi'
import styled from 'styled-components'
import { useContext, useRef, useState, useEffect } from 'react'
import { ThemeContext } from '../../ThemeContext/themeContext'

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

    const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania']

    const [region, setRegion] = useState('All')

    return (
        <FilterPane>
            <h3>Filter by regions:</h3>
            <SelectPane>
                <Select className={themeContext.theme} onClick={handleSelect} ref={refSelect}>
                    <span id='region'>{region}</span>
                    <FaChevronDown />
                </Select>

                <SelectOption className={`${themeContext.theme} ${(isSelect ? '' : 'displayNone')} `}>

                    <SelectItem onClick={() => setRegion(regions[0])} >
                        <GiWorld />
                        <span>{regions[0]}</span>
                    </SelectItem>

                    <SelectItem id='africa' onClick={() => { setRegion(regions[1]); console.log('A') }} >
                        <FaGlobeAfrica />
                        <span>{regions[1]}</span>
                    </SelectItem>

                    <SelectItem onClick={() => setRegion(regions[2])} >
                        <FaGlobeAmericas />
                        <span>{regions[2]}</span>
                    </SelectItem>

                    <SelectItem onClick={() => setRegion(regions[3])} >
                        <FaGlobeAsia />
                        <span>{regions[3]}</span>
                    </SelectItem>

                    <SelectItem onClick={() => setRegion(regions[4])} >
                        <FaGlobeEurope />
                        <span>{regions[4]}</span>
                    </SelectItem>

                    <SelectItem onClick={() => setRegion(regions[5])} >
                        <GiEarthAsiaOceania />
                        <span>{regions[5]}</span>
                    </SelectItem>


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
