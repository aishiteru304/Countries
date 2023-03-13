import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeContext } from "../../ThemeContext/themeContext";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Countries() {

    const themeContext = useContext(ThemeContext)

    const [countries, setCountries] = useState([])

    const [Rou, setRou] = useState('all')



    useEffect(() => {

        if (document.getElementById('all'))
            document.getElementById('all').addEventListener('click', () => {
                setRou('all')
            })

        if (document.getElementById('africa'))
            document.getElementById('africa').addEventListener('click', () => {
                setRou('region/africa')
            })

        if (document.getElementById('americas'))
            document.getElementById('americas').addEventListener('click', () => {
                setRou('region/americas')
            })

        if (document.getElementById('asia'))
            document.getElementById('asia').addEventListener('click', () => {
                setRou('region/asia')
            })

        if (document.getElementById('europe'))
            document.getElementById('europe').addEventListener('click', () => {
                setRou('region/europe')
            })

        if (document.getElementById('oceania'))
            document.getElementById('oceania').addEventListener('click', () => {
                setRou('region/oceania')
            })

        if (document.getElementById('iSearch') && document.getElementById('search'))
            document.getElementById('iSearch').addEventListener('click', () => {
                if (document.getElementById('search').value !== '') {
                    setRou('name/'.concat(document.getElementById('search').value))
                }
            })


    }, [])

    useEffect(() => {

        fetch('https://restcountries.com/v2/'.concat(Rou))
            .then(res => res.json())
            .then(countries => {
                setCountries(countries)
            })
    }, [Rou])

    return (
        <CountriesContainer className="row">
            {
                countries.map((country, index) => (
                    <CountryItem key={index} className="col-lg-3 col-md-4 col-sm-6">
                        <Flag>
                            <img alt="" src={country.flag}></img>
                        </Flag>
                        <CountryInfor className={themeContext.theme}>
                            <Link to={`/country/${country.name}`}><h3>{country.name}</h3></Link>
                            <CountryPop>Dân số:
                                <span>{new Intl.NumberFormat().format(country.population)}</span>
                            </CountryPop>

                            <CountryPos>Châu lục:
                                <span>{country.region}</span>
                            </CountryPos>

                            <CountryCapital>Thủ đô:
                                <span>{country.capital}</span>
                            </CountryCapital>

                        </CountryInfor>
                    </CountryItem>
                ))
            }



        </CountriesContainer>
    )
}

export default Countries

const CountriesContainer = styled.div`
    padding-top: 20px;
`

const CountryItem = styled.div`
    filter: brightness(1);
    margin-bottom: 20px;
    &:hover{
    filter: brightness(0.9);
    }
`

const Flag = styled.div`
    overflow: hidden;
    height: 200px;
    img{
        width: 100%;
        height: 100%;
        &:hover{
            scale: 1.1;
        }
    }
`

const CountryInfor = styled.div`
    box-shadow: 0 2px 0.5px 0.5px rgba(0, 0, 0, 0.2);
    a{
        text-decoration: none;
        color: black;
    }
    h3{
        padding: 10px;
        font-size: 1.6rem;
        font-weight: 500;
        margin-bottom: 0;
        cursor: pointer;
    }
`

const CountryPop = styled.div`
    padding-left: 10px;
    font-size: 1.4rem;
    span{
        padding-left: 5px;
    }
`

const CountryPos = styled.div`
    padding-left: 10px;
    font-size: 1.4rem;
    span{
        padding-left: 5px;
    }
`

const CountryCapital = styled.div`
    padding-left: 10px;
    font-size: 1.4rem;
    padding-bottom: 10px;
    span{
        padding-left: 5px;
    }
`







