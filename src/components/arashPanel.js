import React from 'react';
import {Panel} from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default class ArashPanel extends React.Component {
    constructor(props) {
        super()

        this.state = {
            made: "Audi",
            model: "Q7"
        }
    }

    render() {
        return (
            <Panel bsStyle="primary">
                 <Panel.Heading>
                    <Panel.Title componentClass="h3">this.props.title</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    <h2>Car: {this.state.made}{this.state.model} </h2>
                    this.props.body&nbsp;
                    <Button onClick={this.props.customAlert}>props</Button>&nbsp;
                    <button className="salam" onClick={this.props.customAlert}>run</button>
                </Panel.Body>
            </Panel>
        );  
    }
}
