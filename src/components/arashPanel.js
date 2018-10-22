import React from 'react';
import {Panel} from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default class ArashPanel extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Panel bsStyle="primary">
                 <Panel.Heading>
                    <Panel.Title componentClass="h3">this.props.title</Panel.Title>
                </Panel.Heading>
                <Panel.Body>
                    this.props.body&nbsp;
                    <Button onClick={this.props.customAlert}>props</Button>&nbsp;
                    <button className="salam" onClick={this.props.customAlert}>run</button>
                </Panel.Body>
            </Panel>
        );  
    }
}
