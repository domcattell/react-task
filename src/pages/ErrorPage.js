import React from 'react';
import {Container, Jumbotron} from 'react-bootstrap';

//short error page using some bootstrap classes and inline classes
const ErrorPage = () => {
    return (
        <Container className="mt-5">
            <Jumbotron className="d-flex justify-content-center flex-column align-items-center">
                <h1 className="p-4" style={{"fontSize": "32px"}}>Error - 404</h1>
                <p>Page Not Found</p>
            </Jumbotron>
        </Container>
    );
}

export default ErrorPage;
