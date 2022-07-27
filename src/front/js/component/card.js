import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({img, title, text}) {
    return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://static.nike.com/a/images/f_jpg,q_auto:eco/61b4738b-e1e1-4786-8f6c-26aa0008e80b/swoosh-logo-black.png" />
        <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
        {text}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
);
}

export {Cards};