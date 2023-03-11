import { useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "../ThemeContext/themeContext"

function Footer() {
    const themeContext = useContext(ThemeContext)
    return (
        <FooterPane className={themeContext.theme}>
            <h4>copyright</h4>
            <p>aishiteru@gmail.com</p>
        </FooterPane>
    )
}

export default Footer

const FooterPane = styled.div`
    width: 100%;
    display: flex;
    height: 16vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: var(--box-shadow);
    margin-top: 100px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
`