import React from "react";
import { Accordion } from "reactstrap";

function AdminDbNav(){
    return( 
        <React.Fragment>
            <div>AdminDbNav</div>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Dashboard</Accordion.Header>
                    <Accordion.Body>
                        Overview
                    </Accordion.Body>
                    <Accordion.Body>
                        Analytics
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </React.Fragment>
    )
}
export default AdminDbNav