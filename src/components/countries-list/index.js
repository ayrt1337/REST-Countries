import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const ContriesList = props => {
    const for380Width = useMediaQuery({query: '(max-width: 380px)'})

    return(
        <>
            {
                props.countries.map((country, index) => {
                    return(
                        <DivCountry key={index} color={props.color}>
                            <Link to={`/countries/${country.name.official.toLowerCase()}`}>
                                {!for380Width &&
                                    <Img src={country.flags.png} alt={country.flags.alt}></Img>
                                }

                                {for380Width &&
                                    <ImgFor380Width src={country.flags.png} alt={country.flags.alt}></ImgFor380Width>
                                }

                                {!for380Width &&
                                    <DivInfo>
                                        <H2 textColor={props.textColor}>{country.name.common}</H2>

                                        <P textColor={props.textColor}>Population: <Span textColor={props.textColor}>{country.population}</Span></P>

                                        <P textColor={props.textColor}>Region: <Span textColor={props.textColor}>{country.region}</Span></P>

                                        <P textColor={props.textColor}>Capital: <Span textColor={props.textColor}>{(country.name.common === 'Palestine' || country.name.common === 'South Africa')
                                        ? 
                                        <>
                                            {country.name.common === 'Palestine' && `${country.capital[0]}, ${country.capital[1]}`}
                                            {country.name.common === 'South Africa' && `${country.capital[0]}, ${country.capital[1]}, ${country.capital[2]}`}
                                        </> 
                                        : country.capital}</Span></P>
                                    </DivInfo>
                                }

                                {for380Width &&
                                    <DivInfoFor380Width>
                                        <H2 textColor={props.textColor}>{country.name.common}</H2>

                                        <P textColor={props.textColor}>Population: <Span textColor={props.textColor}>{country.population}</Span></P>

                                        <P textColor={props.textColor}>Region: <Span textColor={props.textColor}>{country.region}</Span></P>

                                        <P textColor={props.textColor}>Capital: <Span textColor={props.textColor}>{(country.name.common === 'Palestine' || country.name.common === 'South Africa')
                                        ? 
                                        <>
                                            {country.name.common === 'Palestine' && `${country.capital[0]}, ${country.capital[1]}`}
                                            {country.name.common === 'South Africa' && `${country.capital[0]}, ${country.capital[1]}, ${country.capital[2]}`}
                                        </> 
                                        : country.capital}</Span></P>
                                    </DivInfoFor380Width>
                                }
                            </Link>
                        </DivCountry>
                    )
                })
            }
        </>
    )
}

const Cards = props => {
    const [countries, setCountries] = useState([])
    const [region, setRegion] = useState('all')

    useEffect(() => {
        const select = document.getElementById('select')
        
        select.addEventListener('change', () => {
            setRegion(select.value)
        })
    }, [region])

    useEffect(() => {
        async function getData() {
            var url
            if(region !== 'all'){
                url = `https://restcountries.com/v3.1/region/${region}`
            }
            else{
                url = 'https://restcountries.com/v3/all?fields=name,cca2,cca3,callingCodes'
            }
            const response = await fetch(url)
            const output = await response.json()

            const result = output.filter(element => {
                return element.name.common.toLowerCase().includes(props.text)
            })
            setCountries(result)
        }
        getData()
    }, [region, props.text])

    return(
        <Div>
            <ContriesList countries={countries} color={props.color} textColor={props.textColor}/>
        </Div>
    )
}

const Div = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 50px;
`

const Img = styled.img`
    height: 213px;
    width: 320px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.2);
`

const ImgFor380Width = styled.img`
    height: 213px;
    width: 300px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.2);
`

const DivCountry = styled.div`
    background-color: ${props => props.color};
    cursor: pointer;
    margin: 50px 25px 0px 25px;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    box-shadow: 2px 2px 15px 0px rgba(0, 0, 0, 0.2);
`

const DivInfo = styled.div`
    padding: 20px 20px 40px 20px;
    width: 320px;
    height: 210px;
`

const DivInfoFor380Width = styled.div`
    background-color: ${props => props.color};
    padding: 20px 20px 40px 20px;
    width: 300px;
    height: 210px;
`

const P = styled.p`
    color: ${props => props.textColor};
    font-size: 17px;
    font-weight: 500;
    margin-top: 5px;
`

const Span = styled.span`
    font-weight: 400;
`

const H2 = styled.h2`
    color: ${props => props.textColor};
    margin-bottom: 12px;
    font-size: 22px;
`

export default Cards
