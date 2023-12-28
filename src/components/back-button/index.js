import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; 
import './index.css'

const BackBtn = props => {
    return(
        <Div>
            <Link to='/' id="link">
                <DivLink color={props.color}>
                    <FontAwesomeIcon icon={faArrowRight} id="icon" rotation={180} style={{color: props.textColor}}/>
                    <P textColor={props.textColor}>Back</P>
                </DivLink>
            </Link>
        </Div>
    )
}

const Div = styled.div`
    display: flex;
    align-items: center;
`

const DivLink = styled.div`
    display: flex;
    padding: 8px 60px 9px 60px;
    align-items: center;
    box-shadow: 2px 2px 15px 0px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background-color: ${props => props.color};
`

const P = styled.p`
    font-size: 19px;
    color: ${props => props.textColor};
`

export default BackBtn