import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import './index.css'
import { useMediaQuery } from "react-responsive";

const Filter = props => {
   const for970Width = useMediaQuery({query: '(max-width: 970px)'})

    function handleChange(){
        const text = document.getElementById('input').value
        props.setText(text.toLowerCase())
    }

    return(
        <>
            {!for970Width &&
                <Div>
                    <DivInputText>
                        <Icon className="icon" icon={faMagnifyingGlass} style={{color: props.textColor, backgroundColor: props.color}}/>
                        <InputText textColor={props.textColor} color={props.color} onChange={handleChange} id="input" className="input-text" type="text" placeholder="Search for a country..."></InputText>
                    </DivInputText>
        
                    <div>
                        <Select className="select" id="select" textColor={props.textColor} color={props.color}>
                            <option value="" disabled selected>Filter by Region</option>
                            <option className="option" value="all">All</option>
                            <option className="option" value="africa">Africa</option>
                            <option className="option" value="america">America</option>
                            <option className="option" value="asia">Asia</option>
                            <option className="option" value="europe">Europe</option>
                            <option className="option" value="oceania">Oceania</option>
                        </Select>
                    </div>
                </Div>
            }

            {for970Width &&
                <DivFor970Width>
                    <DivInputTextFor970Width>
                        <IconFor970Width className="icon" icon={faMagnifyingGlass} style={{color: props.textColor, backgroundColor: props.color}}/>
                        <InputTextFor970Width textColor={props.textColor} color={props.color} onChange={handleChange} id="input" className="input-text" type="text" placeholder="Search for a country..."></InputTextFor970Width>
                    </DivInputTextFor970Width>
        
                    <div>
                        <SelectFor970Width textColor={props.textColor} color={props.color} className="select" id="select">
                            <option value="" disabled selected>Filter by Region</option>
                            <option className="option" value="all">All</option>
                            <option className="option" value="africa">Africa</option>
                            <option className="option" value="america">America</option>
                            <option className="option" value="asia">Asia</option>
                            <option className="option" value="europe">Europe</option>
                            <option className="option" value="oceania">Oceania</option>
                        </SelectFor970Width>
                    </div>
                </DivFor970Width>    
            }
        </>
    )
}

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const DivFor970Width = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const DivInputText = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
`

const DivInputTextFor970Width = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    max-width: 400px;
    border-radius: 5px;
    margin-bottom: 50px;
`

const InputText = styled.input`
    background-color: ${props => props.color};
    color: ${props => props.textColor};
    border: none;
    padding: 25px 20px 25px 10px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    font-size: 18px;
    min-width: 400px;
    font-weight: 500;
`

const InputTextFor970Width = styled.input`
    background-color: ${props => props.color};
    color: ${props => props.textColor};
    border: none;
    padding: 15px 20px 15px 10px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    font-size: 18px;
    width: 100%;
    font-weight: 500;
`

const Select = styled.select`
    background-color: ${props => props.color};
    color: ${props => props.textColor}; 
    border: none;
    padding: 25px 10px 25px 20px;
    font-size: 18px;
    border-radius: 5px;
    border-right: 18px solid transparent;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`

const SelectFor970Width = styled.select`
    background-color: ${props => props.color};
    color: ${props => props.textColor}; 
    border: none;
    padding: 15px 10px 15px 20px;
    font-size: 18px;
    border-radius: 5px;
    border-right: 18px solid transparent;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
`

const Icon = styled(FontAwesomeIcon)`
    width: 18px;
    height: 18px;
    cursor: pointer;
    background-color: white;
    padding: 26px 10px 27px 25px;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
`

const IconFor970Width = styled(FontAwesomeIcon)`
    width: 18px;
    height: 18px;
    cursor: pointer;
    background-color: white;
    padding: 16px 0px 17px 25px;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
`

export default Filter