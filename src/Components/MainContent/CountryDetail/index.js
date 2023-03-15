import { useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { ThemeContext } from "../../ThemeContext/themeContext"
import styles from "./countryInfor.module.scss"
import { Link, useLocation } from "react-router-dom"

function CountryDetail() {
    const themeContext = useContext(ThemeContext)
    const location = useLocation()
    const navigate = useNavigate()

    const [countries, setCountries] = useState([])
    useEffect(() => {

        fetch('https://restcountries.com/v2/name/'.concat(location.pathname.slice(8)))
            .then(res => res.json())
            .then(countries => {
                setCountries(countries)
            })

    }, [location])

    const getLanguages = (country) => {
        let result = "";
        country.languages.forEach((language) => {
            if (result !== "") result = result + "-" + language.name;
            else result += language.name;
        });
        return result;
    };


    return (
        <Wrapper>
            <button onClick={() => navigate(-1)} className={`goback-btn ${themeContext.theme}`}>Go Back</button>

            {
                countries.map((country, index) => (
                    <CountryDetailContainer key={index}>
                        <div className="flagCountry">
                            <img src={country.flag} alt=''></img>
                        </div>


                        <div className={styles.countryInfor}>
                            <h3 className={styles.countryName}>{country.name}</h3>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className={styles.countryTitle}>Native Name:</td>
                                        <td className={styles.countryValue}>{country.nativeName}</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.countryTitle}>Are:</td>
                                        <td className={styles.countryValue}>{new Intl.NumberFormat().format(country.area)}</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.countryTitle}>Population:</td>
                                        <td className={styles.countryValue}>{new Intl.NumberFormat().format(country.population)}</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.countryTitle}>Region:</td>
                                        <td className={styles.countryValue}>{country.region}</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.countryTitle}>Sub Region:</td>
                                        <td className={styles.countryValue}>{country.subregion}</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.countryTitle}>Capital:</td>
                                        <td className={styles.countryValue}>{country.capital}</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.countryTitle}>Languages:</td>
                                        <td className={styles.countryValue}>{getLanguages(country)}</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.countryTitle}>Border Countries:</td>
                                        <td className={styles.borderList}>
                                            {country.borders &&
                                                country.borders.map((countryBorder, i) => (
                                                    <Link to={`/alpha/${countryBorder}`} key={i}>
                                                        <div className={`${styles.borderItem} ${themeContext.theme}`}>{countryBorder}</div>
                                                    </Link>
                                                ))
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </CountryDetailContainer>
                ))


            }
        </Wrapper>
    )
}

export default CountryDetail

const Wrapper = styled.div`
    padding-top: 20px;
    min-height: 76vh;
    .goback-btn{
        display: block;
        width: 80px;
        height: 28px;
        line-height: 28px;
        padding: 2px 4px;
        border-radius: 4px;
        text-align: center;
        font-weight: 500;
        filter: brightness(0.9);
        cursor: pointer;
        
        &:hover{
            filter: brightness(1);
        }
    }
`

const CountryDetailContainer = styled.div`
    display: flex;
    margin-top: 30px;
    @media (max-width: 800px){
        flex-direction: column;
        align-items: center;
    }
    .flagCountry{
        max-width: 400px;
        width: 100%;
        height: 100%;
        margin-bottom: 12px;
        box-shadow: var(--box-shadow);
        
        img{
            width: 100%;
            border-radius: 4px;
        }
    }

    a{
        text-decoration: none;
        color: black;
    }
`