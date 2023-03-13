import { useState, useEffect } from "react"
import styles from "./countryInfor.module.scss"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import styled from "styled-components"

function CountryCode() {
    const navigate = useNavigate()

    const nameUrl = window.location.href
    const nameCountry = nameUrl.slice(nameUrl.indexOf("alpha") + 6).toLowerCase()

    const [countryCode, setCountryCode] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v2/alpha/'.concat(nameCountry))
            .then(res => res.json())
            .then(countryCode => {
                setCountryCode(countryCode)
            })

    }, [nameCountry])


    const getLanguages = (country) => {
        let result = "";
        if (country.languages)
            country.languages.forEach((language) => {
                if (result !== "") result = result + "-" + language.name;
                else result += language.name;
            });
        return result;
    }

    return (
        <Wrapper>
            <button onClick={() => navigate(-1)} className={`goback-btn `}>Go Back</button>


            <CountryDetailContainer >
                <div className="flagCountry">
                    <img src={countryCode.flag} alt=''></img>
                </div>


                <div className={styles.countryInfor}>
                    <h3 className={styles.countryName}>{countryCode.name}</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td className={styles.countryTitle}>Native Name:</td>
                                <td className={styles.countryValue}>{countryCode.nativeName}</td>
                            </tr>
                            <tr>
                                <td className={styles.countryTitle}>Are:</td>
                                <td className={styles.countryValue}>{new Intl.NumberFormat().format(countryCode.area)}</td>
                            </tr>
                            <tr>
                                <td className={styles.countryTitle}>Population:</td>
                                <td className={styles.countryValue}>{new Intl.NumberFormat().format(countryCode.population)}</td>
                            </tr>
                            <tr>
                                <td className={styles.countryTitle}>Region:</td>
                                <td className={styles.countryValue}>{countryCode.region}</td>
                            </tr>
                            <tr>
                                <td className={styles.countryTitle}>Sub Region:</td>
                                <td className={styles.countryValue}>{countryCode.subregion}</td>
                            </tr>
                            <tr>
                                <td className={styles.countryTitle}>Capital:</td>
                                <td className={styles.countryValue}>{countryCode.capital}</td>
                            </tr>
                            <tr>
                                <td className={styles.countryTitle}>Languages:</td>
                                <td className={styles.countryValue}>{getLanguages(countryCode)}</td>
                            </tr>
                            <tr>
                                <td className={styles.countryTitle}>Border Countries:</td>
                                <td className={styles.borderList}>
                                    {countryCode.borders &&
                                        countryCode.borders.map((countryBorder, i) => (
                                            <Link to={`/alpha/${countryBorder}`} key={i} >
                                                <div className={styles.borderItem}>{countryBorder}</div>
                                            </Link>
                                        ))
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </CountryDetailContainer>




        </Wrapper>

    )
}

export default CountryCode

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