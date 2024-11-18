import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'

import Style from './header.module.scss'
import { Link, useLocation, useNavigation } from 'react-router-dom'

const Header = () => {

    const menuItems = [
        {label:"Home", link:"/"},
        {label:"Features", link:"/features"},
        {label:"Pricing", link:"/pricing"},
        {label:"Blog", link:"/blog"},
        {label:"Resource", link:"/resource"},
    ]
    const location = useLocation();
    const currentPath = location.pathname;
    console.log('location=',location.pathname);
    
  return (
    <>
    <Container>
    <Row className={Style.header}>
        <Col xs={6} lg={2} md={2}>
        <Image src='/assets/images/logo.png' />
        </Col>
        <Col xs lg={8} md={8}>
            <div className={Style.navbar}>
                <ul >
                    {
                        menuItems?.map((items,i)=>{
                            return (
                                <li key={i}>
                                    <Link className={currentPath ===items?.link? Style.active: ""} to={items?.link}>{items?.label}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </Col>
        <Col lg={2} md={2}>
        <div><span>SignIn</span></div>
        </Col>
    </Row>
    </Container>
    </>
  )
}

export default Header
