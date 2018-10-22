import React from 'react';
import {Panel} from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const ArashPanel = (props) => {
    return (
        <Panel bsStyle="primary">
             <Panel.Heading>
                <Panel.Title componentClass="h3">props.title</Panel.Title>
            </Panel.Heading>
            <Panel.Body>props.body</Panel.Body>
        </Panel>
    );
}

export default ArashPanel;