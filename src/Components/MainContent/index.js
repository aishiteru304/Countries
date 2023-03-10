import SearchAndFilter from "./SearchAndFilter/index"
import Countries from "./Countries/Countries"
import styled from "styled-components"

function MainContent() {
    return (
        <MainContentPane >
            <SearchAndFilter />
            <Countries />
        </MainContentPane>
    )
}

export default MainContent

const MainContentPane = styled.div`
    margin-top: 8vh;
    z-index: 5;
`