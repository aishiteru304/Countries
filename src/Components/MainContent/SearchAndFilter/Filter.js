import {FaChevronDown, FaGlobeAfrica, FaGlobeAmericas, FaGlobeAsia, FaGlobeEurope} from 'react-icons/fa'
import {GiWorld, GiEarthAsiaOceania} from 'react-icons/gi'
import styled from 'styled-components'
import { useContext, useRef } from 'react'
import { ThemeContext } from '../../ThemeContext/themeContext'

function Filter(){
    const themeContext = useContext(ThemeContext)
    return(
        <FilterPane>
            <h3>Filter by regions:</h3>
            <SelectPane>
                <Select className={themeContext.theme}>
                    <span>All</span>
                    <FaChevronDown/>
                </Select>

                <SelectOption className={themeContext.theme}>

                    <SelectItem>
                        <GiWorld/>
                        <span>All</span>
                    </SelectItem>

                    <SelectItem>
                        <FaGlobeAfrica/>
                        <span>Africa</span>
                    </SelectItem>

                    <SelectItem>
                        <FaGlobeAmericas/>
                        <span>Americas</span>
                    </SelectItem>

                    <SelectItem>
                        <FaGlobeAsia/>
                        <span>Asia</span>
                    </SelectItem>

                    <SelectItem>
                        <FaGlobeEurope/>
                        <span>Europe</span>
                    </SelectItem>

                    <SelectItem>
                        <GiEarthAsiaOceania/>
                        <span>Oceania</span>
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
