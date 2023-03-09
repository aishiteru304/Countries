import {RiMoonFill} from 'react-icons/ri'
import {BsFillSunFill} from 'react-icons/bs'
import { useRef, useState,useEffect, useContext } from 'react'
import styles from './Header.module.scss'
import {ThemeContext} from '../ThemeContext/themeContext.js'

function Header(){
    const themeContext = useContext(ThemeContext)
    const refInput = useRef()
    const refCircle = useRef()
    const refToggle = useRef()
    const [isDark,setIsDark] = useState(false)



    const handleToggle = () =>{
        refInput.current.checked = !refInput.current.checked
        setIsDark(refInput.current.checked)
        themeContext.toggleTheme()
    }
    
    useEffect(()=>{
        const changeStyle = () =>{
            if(isDark){
                refCircle.current.style.background = '#222'
                refToggle.current.style.background = '#fff'
            }
            else{
                refCircle.current.style.background = '#fff'
                refToggle.current.style.background = 'var(--toggle-color)'
            }
        }

        changeStyle()

    },[isDark])

    
    return (
        <div className = {`${styles.header} ${themeContext.theme}`}>
             <span>Where is the world?</span> 
        <div className = {styles.toggleButton} ref={refToggle} onClick={handleToggle}>
            <input type='checkbox' className = {styles.input} ref={refInput}></input>
            <div className = {styles.iconMoon}>
                {
                    (isDark) ? <RiMoonFill/> : <BsFillSunFill/>
                }
            </div>
            <div className={styles.circle} ref={refCircle}></div>
        </div>

        </div>    
    )
}


export default Header

    
