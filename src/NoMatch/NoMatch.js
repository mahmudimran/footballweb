import React from 'react';
import { Alert, Container } from 'react-bootstrap';


const NoMatch = () => {
    return (
        <div>
            <Container>
                <Alert variant="danger">
                    <h3> 404 - Page not found</h3>
                    <hr />
                    <h4>Please try again! Thank You !!</h4>
                </Alert>
            </Container>
        </div>
    );
};

export default NoMatch;