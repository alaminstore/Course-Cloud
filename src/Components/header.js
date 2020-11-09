import React from 'react';
import {Container, Row} from "react-bootstrap";

import NavMenu from "./navmenu";
import "../Styles/_header.css";
import SideMenu from "./sidemenu";




export default function Header() {


    return (
        <React.Fragment>

           <header className="main_header">
               <Container >
                   <Row>
                       <NavMenu/>
                   </Row>
               </Container>
           </header>
        <SideMenu/>
        </React.Fragment>

    )
}