import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

const ShowDetails = props => {
    const for1300Width = useMediaQuery({query: '(max-width: 1300px)'})
    const for650Width = useMediaQuery({query: '(max-width: 650px)'})

    return(
        <>
            {
                props.countryDetails.map((country, index) => {
                    const currencies = Object.values(country.currencies)
                    const currenciesName = Object.values(currencies[0])

                    const languages = Object.values(country.languages)

                    return(
                        <>
                            {!for1300Width &&
                                <Div key={index}>
                                    <DivImg>
                                        <Img src={country.flags.svg}></Img>
                                    </DivImg>

                                    <DivInfo>
                                        <H2 textColor={props.textColor}>{country.name.common}</H2>

                                        <DivInline>
                                            <DivDetails>
                                                <P textColor={props.textColor}>Population: <Span textColor={props.textColor}>{country.population}</Span></P>

                                                <P textColor={props.textColor}>Region: <Span textColor={props.textColor}>{country.region}</Span></P>

                                                <P textColor={props.textColor}>Sub Region: <Span textColor={props.textColor}>{country.subregion}</Span></P>

                                                <P textColor={props.textColor}>Capital: <Span textColor={props.textColor}>{country.capital}</Span></P>
                                            </DivDetails>

                                            <div>
                                                <P textColor={props.textColor}>Top Level Domain: <Span textColor={props.textColor}>{country.tld}</Span></P>

                                                <P textColor={props.textColor}>Currencies: <Span textColor={props.textColor}>{currenciesName[0]}</Span></P>

                                                <P textColor={props.textColor}>Languages: 
                                                    <Span textColor={props.textColor}>
                                                        {
                                                            languages.map((element, index) => {
                                                                if(index === languages.length - 1){
                                                                    return ` ${element}`
                                                                }
                                                                return ` ${element},`
                                                            }) 
                                                        }
                                                    </Span>
                                                </P>
                                            </div>
                                        </DivInline>

                                        <DivBorder>
                                            <PBorder textColor={props.textColor}>Border Countries:</PBorder>
                                                {props.borders === "Doesn't have borders" ? 
                                                    <SpanNoBorder textColor={props.textColor}>{props.borders}</SpanNoBorder>
                                                : props.borders.map((border, index) => {
                                                        return <SpanBorder textColor={props.textColor} key={index}>{border}</SpanBorder>
                                                    })  
                                                }
                                        </DivBorder>
                                    </DivInfo>
                                </Div>
                            }

                            {for1300Width &&
                                <DivFor1300Width key={index}>
                                    <DivImgFor1300Width>
                                        <Img src={country.flags.svg}></Img>
                                    </DivImgFor1300Width>

                                    <DivInfoFor1300Width>
                                        <H2 textColor={props.textColor}>{country.name.common}</H2>

                                        {(!for650Width && for1300Width) &&
                                            <DivInline>
                                                <DivDetails>
                                                    <P textColor={props.textColor}>Population: <Span textColor={props.textColor}>{country.population}</Span></P>

                                                    <P textColor={props.textColor}>Region: <Span textColor={props.textColor}>{country.region}</Span></P>

                                                    <P textColor={props.textColor}>Sub Region: <Span textColor={props.textColor}>{country.subregion}</Span></P>

                                                    <P textColor={props.textColor}>Capital: <Span textColor={props.textColor}>{country.capital}</Span></P>
                                                </DivDetails>

                                                <div>
                                                    <P textColor={props.textColor}>Top Level Domain: <Span textColor={props.textColor}>{country.tld}</Span></P>

                                                    <P textColor={props.textColor}>Currencies: <Span textColor={props.textColor}>{currenciesName[0]}</Span></P>

                                                    <P textColor={props.textColor}>Languages: 
                                                        <Span textColor={props.textColor}>
                                                            {
                                                                languages.map((element, index) => {
                                                                    if(index === languages.length - 1){
                                                                        return ` ${element}`
                                                                    }
                                                                    return ` ${element},`
                                                                }) 
                                                            }
                                                        </Span>
                                                    </P>
                                                </div>
                                            </DivInline>
                                        }

                                        {(for650Width && for1300Width) &&
                                            <DivBlock>
                                                <DivDetailsFor650Width>
                                                    <P textColor={props.textColor}>Population: <Span textColor={props.textColor}>{country.population}</Span></P>

                                                    <P textColor={props.textColor}>Region: <Span textColor={props.textColor}>{country.region}</Span></P>

                                                    <P textColor={props.textColor}>Sub Region: <Span textColor={props.textColor}>{country.subregion}</Span></P>

                                                    <P textColor={props.textColor}>Capital: <Span textColor={props.textColor}>{country.capital}</Span></P>
                                                </DivDetailsFor650Width>

                                                <DivDetailsFor650Width>
                                                    <P textColor={props.textColor}>Top Level Domain: <Span textColor={props.textColor}>{country.tld}</Span></P>

                                                    <P textColor={props.textColor}>Currencies: <Span textColor={props.textColor}>{currenciesName[0]}</Span></P>

                                                    <P textColor={props.textColor}>Languages: 
                                                        <Span textColor={props.textColor}>
                                                            {
                                                                languages.map((element, index) => {
                                                                    if(index === languages.length - 1){
                                                                        return ` ${element}`
                                                                    }
                                                                    return ` ${element},`
                                                                }) 
                                                            }
                                                        </Span>
                                                    </P>
                                                </DivDetailsFor650Width>
                                            </DivBlock>
                                        }

                                        <DivBorder>
                                            <PBorder textColor={props.textColor}>Border Countries:</PBorder>
                                                {props.borders === "Doesn't have borders" ? 
                                                    <SpanNoBorder textColor={props.textColor}>{props.borders}</SpanNoBorder>
                                                : props.borders.map((border, index) => {
                                                        return <SpanBorder textColor={props.textColor} key={index}>{border}</SpanBorder>
                                                    })  
                                                }
                                        </DivBorder>
                                    </DivInfoFor1300Width>
                                </DivFor1300Width>
                            }
                        </>
                    )
                })
            }
        </>
    )
}

const CountryDetails = props => {
    const [countryDetails, setCountryDetails] = useState([])
    const [borders, setBorders] = useState([])
    const arr = []

    var { country } = useParams()

    useEffect(() => {
        async function getData(country){
            const url = `https://restcountries.com/v3.1/name/${country}?fullText=true`
            const response = await fetch(url)
            const output = await response.json()

            setCountryDetails(output)

            if(output[0].borders === undefined){
                setBorders("Doesn't have borders")
            }
            else{
                const resultBorders = output[0].borders.map(async (code) => {
                    async function getBorder(){
                        const url = `https://restcountries.com/v3.1/alpha/${code}`
                        const response = await fetch(url)
                        const output = await response.json()
                        return output[0].name.common
                    }
                    const nameBorders = await getBorder()
                    return nameBorders
                })
    
                resultBorders.map((element) => {
                    element.then((name) => {
                        if(!arr.includes(name)){
                            arr.push(name)
                            if(arr.length === resultBorders.length){
                                setBorders(arr)
                            }
                        }
                    })
                })
            }
        }
        getData(country)
    }, [])

    return(
        <>
            <ShowDetails countryDetails={countryDetails} borders={borders} color={props.color} textColor={props.textColor}/>
        </>
    )
}

const Div = styled.div`
    display: flex;
    align-items: center;
    height: 63vh;
`

const Img = styled.img`
    width: 100%;
    max-width: 550px;
    height: auto;
    max-height: 450px;
    box-shadow: 2px 2px 15px 0px rgba(0, 0, 0, 0.2);
`

const P = styled.p`
    color: ${props => props.textColor};
    font-size: 19px;
    font-weight: 500;
    margin-top: 18px;
`

const Span = styled.span`
    color: ${props => props.textColor};
    font-weight: 400;
    font-size: 18px;
`

const H2 = styled.h2`
    color: ${props => props.textColor};
    margin-bottom: 20px;
    font-size: 30px;
`

const DivImg = styled.div`
    margin-right: 80px;
`

const DivInfo = styled.div`
    display: flex;
    flex-direction: column;
`

const DivInline = styled.div`
    display: flex;
`

const DivBlock = styled.div`
    display: flex;
    flex-direction: column;
`

const DivDetails = styled.div`
    margin: 0px 70px 70px 0px;
`

const DivDetailsFor650Width = styled.div`
    margin: 0px 0px 35px 0px;
`

const SpanBorder = styled.span`
    color: ${props => props.textColor};
    border: solid 3px #ccc;
    font-weight: 400;
    font-size: 18px;
    display: flex;
    align-items: center;
    margin-right: 10px;
    margin-top: 13px;
    padding: 8px 15px 8px 15px;
    border-radius: 5px;
`

const DivBorder = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`

const PBorder = styled.p`
    color: ${props => props.textColor};
    font-size: 19px;
    font-weight: 500;
    margin-top: 10px;
    margin-right: 10px;
`

const SpanNoBorder = styled.span`
    color: ${props => props.textColor};
    font-weight: 400;
    font-size: 18px;
    margin-top: 10px;
`

const DivFor1300Width = styled.div`
    display: flex;
    flex-direction: column;
`

const DivImgFor1300Width = styled.div`
    margin-top: 50px;
    margin-bottom: 30px;
`

const DivInfoFor1300Width = styled.div`
    margin-bottom: 30px;
`

export default CountryDetails