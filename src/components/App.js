import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from './Header'
import Bg from './Bg'
import Item from './Item'

class App extends React.Component{
    componentDidMount() {
        AOS.init({
            duration: 800
        })
    }
    render(){
        return(
            <div data-aos="fade">
                <Bg/>
                <Header title="Esa Dandy Afriansya"
                        subtitle="Front End Web Developer"
                        images={require('../images/photo.JPG')}
                        className="header-photo"
                        />
                <Container className="main">
                    <Row>
                        <Col className="text-center">
                            <h3 data-aos="fade">My Portofolios</h3>
                        </Col>
                    </Row>
                    <Row className="main-items">
                        <Item title="FHCI Summit 2021" porto="fhci"></Item>
                        <Item title="International Swam 2021" porto="iswam"></Item>
                        <Item title="RRSTEK Home Automation System" porto="rrstek"></Item>
                        <Item title="Dongeng.in" porto="dongengin"></Item>
                        <Item title="Kopi.id" porto="kopi"></Item>
                        <Item title="Edvolution" porto="edvolution"></Item>
                    </Row>
                    <Row className="footer">
                        <Col md="12">
                            <hr/>
                            <p>&copy; ganezu.my.id</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default App