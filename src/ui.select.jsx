import React, { Component } from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';
import './ui.select.css';
import TooltipButton from 'react-bootstrap-tooltip-button';

class UISelect extends Component {
    
    render() {
        var Popover = require('react-bootstrap').Popover;
        var Button = require('react-bootstrap').Button;
        var OverlayTrigger = require('react-bootstrap').OverlayTrigger;
        var MenuItem = require('react-bootstrap').MenuItem;
        var Glyphicon = require('react-bootstrap').Glyphicon;
        var Table = require('react-bootstrap').Table;
        const popoverBottom11 = (
            <Popover id="popover-positioned-bottom" >
               <NumberList numbers={this.props.options} /> 
            </Popover>
          );
        const popoverBottom = (
            <Popover id="popover-positioned-bottom" >
            <Table striped bordered condensed hover>
            <tbody>
            <NumberList numbers={this.props.options} /> 
                       </tbody>
          </Table>
            </Popover>
          );
        var divStyle = {
            background: " #ooooo",
            padding: "20px",
            margin: "40px",
            textAlign: "center",
            fontSize:"12px",
            fontFamily: "Arial",
            width: "200px",
            height: "20px"
          };

        return (
            
            <div  style={divStyle}>    
               <OverlayTrigger  trigger={['click']} placement="bottom" overlay={popoverBottom}>
                  <Button bsSize="small" className="button">{this.props.options[0].name} <Glyphicon glyph="triangle-bottom" /> </Button>
               </OverlayTrigger>
            </div>
            
        )
    }
}

function NumberList(props) {
    const numbers = props.numbers;
    return (
        numbers.map((number,index) =>
          <tr>
            <td>{number.name}</td>
          </tr>
       )
    );
  }
export default UISelect

/*
<option key={number.id} title={number.name} value = {number.id}>{number.name}</option >
*/