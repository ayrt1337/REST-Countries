import React from "react";
import CountryDetails from "../country-details";
import BackBtn from "../back-button";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

const ContentDetails = props => {
    const for860Width = useMediaQuery({query: '(max-width: 860px)'})
    const for500Width = useMediaQuery({query: '(max-width: 500px)'})

    return(
        <>
            {!for860Width &&
                <Div>
                    <BackBtn color={props.color} textColor={props.textColor}/>
                    <CountryDetails color={props.color} textColor={props.textColor}/>
                </Div>
            }

            {(for860Width && !for500Width) &&
                <DivFor860Width>
                    <BackBtn color={props.color} textColor={props.textColor}/>
                    <CountryDetails color={props.color} textColor={props.textColor}/>
                </DivFor860Width>
            }

            {(for860Width && for500Width) &&
                <DivFor500Width>
                    <BackBtn color={props.color} textColor={props.textColor}/>
                    <CountryDetails color={props.color} textColor={props.textColor}/>
                </DivFor500Width>
            }
        </>
    )
}

const Div = styled.div`
    margin: 50px 100px 50px 100px;
    height: 100%;
`

const DivFor860Width = styled.div`
    margin: 50px 40px 50px 40px;
    height: 100%;
`

const DivFor500Width = styled.div`
    margin: 50px 20px 50px 20px;
    height: 100%;
`

export default ContentDetails