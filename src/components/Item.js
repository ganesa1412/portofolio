import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from './Header'
import Bg from './Bg'

class Item extends React.Component{
    componentDidMount() {
        AOS.init({
            duration: 800
        })
    }
    render(){
        return(
            <Col md="6" xs="12" className="text-center portofolio" data-aos="zoom-in">
                <a href={"https://ganezu.my.id/"+this.props.porto}>
                    <img src={require('../images/'+ this.props.porto +'.jpg')} title={this.props.title} />
                </a>
            </Col>
        )
    }
}

export default Item