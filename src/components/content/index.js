import React, { useState } from "react";
import styled from "styled-components";
import Filter from "../filter";
import Cards from "../countries-list";
import { useMediaQuery } from "react-responsive";

const Content = props => {
    const for860Width = useMediaQuery({query: '(max-width: 860px)'})
    const for500Width = useMediaQuery({query: '(max-width: 500px)'})

    const [text, setText] = useState('')

    return(
        <>
            {!for860Width &&
                <Div>
                    <Filter color={props.color} textColor={props.textColor} setText={setText}/>
                    <Cards color={props.color} textColor={props.textColor} text={text}/>
                </Div>
            }

            {(for860Width && !for500Width) &&
                <DivFor860Width>
                    <Filter color={props.color} textColor={props.textColor} setText={setText}/>
                    <Cards color={props.color} textColor={props.textColor} text={text}/>
                </DivFor860Width>
            }

            {(for860Width && for500Width) &&
                <DivFor500Width>
                    <Filter color={props.color} textColor={props.textColor} setText={setText}/>
                    <Cards color={props.color} textColor={props.textColor} text={text}/>
                </DivFor500Width>
            }
        </>
    )
}

const Div = styled.div`
    margin: 50px 100px 50px 100px;
    height: 150%;
`

const DivFor860Width = styled.div`
    margin: 50px 40px 50px 40px;
    height: 150%;
`

const DivFor500Width = styled.div`
    margin: 50px 20px 50px 20px;
    height: 150%;
`

export default Content