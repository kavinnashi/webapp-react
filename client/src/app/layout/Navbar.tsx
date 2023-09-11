import React from "react";
import { Container, Menu } from "semantic-ui-react";

export default function Navbar(){
    return(
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png"></img>
                    IELSE 
                </Menu.Item>
                <Menu.Item name="Reading"></Menu.Item>
                <Menu.Item name="Listening"></Menu.Item>

            </Container>
        </Menu>
    )
} 

