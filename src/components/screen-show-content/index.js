import React from "react";
import Header from "../header";
import Content from "../content";
import { HashRouter, Route, Routes } from "react-router-dom";
import ContentDetails from "../content-details";

const AppRoutes = props => {
    return(
        <>
            <Header setColor={props.setColor} color={props.color} setTextColor={props.setTextColor} textColor={props.textColor}/>

            <HashRouter>
                <Routes>
                    <Route exact path='/' element={<Content color={props.color} textColor={props.textColor} />}/>
                    <Route exact path='/countries/:country' element={<ContentDetails color={props.color} textColor={props.textColor} />}/>
                </Routes>
            </HashRouter>
        </>
    )
}

export default AppRoutes