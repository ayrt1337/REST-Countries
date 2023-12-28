import React from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { useMediaQuery } from "react-responsive";

const Header = props => {
    const for860Width = useMediaQuery({query: '(max-width: 860px)'})
    const for500Width = useMediaQuery({query: '(max-width: 500px)'})

    return(
        <>
            {!for860Width &&
                <HeaderSection color={props.color}>
                    <H1Header textColor={props.textColor}>Where in the World?</H1Header>

                    <DivToggle onClick={() => {
                        if(props.color === 'white'){
                            props.setColor('#2b3743')
                            props.setTextColor('white')
                        }
                        else{
                            props.setColor('white')
                            props.setTextColor('black')
                        }
                    }}>
                        <FontAwesomeIcon icon={faMoon} style={{color: props.textColor}}/>
                        <PHeader textColor={props.textColor}>Dark Mode</PHeader>
                    </DivToggle>
                </HeaderSection>
            }

            {(for860Width && !for500Width) &&
                <HeaderSectionFor860Width color={props.color}>
                    <H1Header textColor={props.textColor}>Where in the World?</H1Header>

                    <DivToggle onClick={() => {
                        if(props.color === 'white'){
                            props.setColor('#2b3743')
                            props.setTextColor('white')
                        }
                        else{
                            props.setColor('white')
                            props.setTextColor('black')
                        }
                    }}>
                        <FontAwesomeIcon icon={faMoon} style={{color: props.textColor}}/>
                        <PHeader textColor={props.textColor}>Dark Mode</PHeader>
                    </DivToggle>
                </HeaderSectionFor860Width>
            }

            {(for860Width && for500Width) &&
                <HeaderSectionFor500Width color={props.color}>
                    <H1HeaderFor500Width textColor={props.textColor}>Where in the World?</H1HeaderFor500Width>

                    <DivToggle onClick={() => {
                        if(props.color === 'white'){
                            props.setColor('#2b3743')
                            props.setTextColor('white')
                        }
                        else{
                            props.setColor('white')
                            props.setTextColor('black')
                        }
                    }}>
                        <FontAwesomeIcon icon={faMoon} style={{color: props.textColor}}/>
                        <PHeaderFor500Width textColor={props.textColor}>Dark Mode</PHeaderFor500Width>
                    </DivToggle>
                </HeaderSectionFor500Width>
            }
        </>
    )
}

const HeaderSection = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 100px 30px 100px;
    background-color: ${props => props.color};
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.2);
`

const H1Header = styled.h1`
    font-size: 25px;
    color: ${props => props.textColor};
`

const H1HeaderFor500Width = styled.h1`
    font-size: 17px;
    color: ${props => props.textColor}; 
`

const PHeader = styled.p`
    margin-left: 9px;
    margin-bottom: 2px;
    font-weight: 500;
    font-size: 19px;
    color: ${props => props.textColor};
`

const PHeaderFor500Width = styled.p`
    margin-left: 5px;
    font-weight: 500;
    font-size: 15px;
    color: ${props => props.textColor};
`

const DivToggle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

const HeaderSectionFor860Width = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 40px 30px 40px;
    background-color: white;
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.2);
    background-color: ${props => props.color};
`

const HeaderSectionFor500Width = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 20px 30px 20px;
    background-color: white;
    box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.2);
    background-color: ${props => props.color};
`

export default Header
