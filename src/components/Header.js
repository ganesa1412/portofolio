import React from 'react'
import SocialIcon from './SocialIcon'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'

import AOS from 'aos'
import 'aos/dist/aos.css'

class Header extends React.Component{
    componentDidMount() {
        AOS.init({
            duration: 800
        })
    }
    render(){
        return(
            <div class={"header " + this.props.className}>
                <Container className="container">
                    <Row>
                        <Col md={{span:6, offset: 0}} xs={{span:10, offset: 1}}>
                            <Stack direction="horizontal" gap={3}>
                                <div data-aos="fade"><img src={this.props.images} class="header-logo" /></div>
                                <div>
                                    <h1 data-aos="fade-down">{this.props.title}</h1>
                                    <p data-aos="fade-down" data-aos-delay="250">{this.props.subtitle}</p>
                                </div>
                            </Stack>
                        </Col>
                        <Col md="6" xs="12" className="text-right social-button" data-aos="fade-left">
                            <Button variant="outline-light" size="sm" outline href="https://github.com/ganesa1412" target="_blank">
                                <SocialIcon icon="github"></SocialIcon>
                            </Button>
                            <Button variant="outline-light" size="sm" outline href="https://www.linkedin.com/in/esafriansya/" target="_blank">
                                <SocialIcon icon="linkedin"></SocialIcon>
                            </Button>
                            <Button variant="outline-light" size="sm" outline href="https://wa.me/+6281991373200" target="_blank">
                                <SocialIcon icon="whatsapp"></SocialIcon>
                            </Button>
                            <Button variant="outline-light" size="sm" outline href={require('../files/cv_esa_dandy_a.pdf')}target="_blank">
                                <SocialIcon icon="download"></SocialIcon> Download my CV
                            </Button>

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Header