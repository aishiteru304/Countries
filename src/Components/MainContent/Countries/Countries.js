import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeContext } from "../../ThemeContext/themeContext";
import { useContext, useEffect, useState } from "react";

function Countries() {

    const themeContext = useContext(ThemeContext)

    const [countries, setCountries] = useState([])



    useEffect(() => {


        fetch('https://restcountries.com/v2/'.concat('all'))
            .then(res => res.json())
            .then(countries => {
                setCountries(countries)
            })
    }, [])




    return (
        <CountriesContainer className="row">
            {

                countries.map((country, index) => (
                    <CountryItem key={index} className="col-lg-3 col-md-4 col-sm-6">
                        <Flag>
                            <img alt="" src={country.flag}></img>
                        </Flag>
                        <CountryInfor className={themeContext.theme}>
                            <h3>{country.name}</h3>
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
    padding-top: 50px;
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
    h3{
        padding: 10px;
        font-size: 1.6rem;
        font-weight: 500;
        margin-bottom: 0;
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







