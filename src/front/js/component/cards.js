import React, { useContext} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Cards1 = ({img, title, climate, terrain, population, index}) => {
    const { store, actions}= useContext(Context);
    let found = store.favorites.find(item => item == title);
    return (
    <Col>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://static.nike.com/a/images/f_jpg,q_auto:eco/61b4738b-e1e1-4786-8f6c-26aa0008e80b/swoosh-logo-black.png" />
        <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text> 
			<Row>Climate: {climate}</Row>
			<Row>Terrain: {terrain}</Row>
            <Row>Population: {population}</Row>
        </Card.Text>
        <Link to={`/planetdetails/${index}`}>
        <Button variant="primary">Go somewhere</Button>
        </Link>
        <Button onClick={() => actions.addFavorites(title) } variant={found ? "success" : "primary"}>Favorites</Button>
        </Card.Body>
    </Card>
    </Col>
);
}



export const Cards2 = ({img, title, gender, haircolor, eyecolor, birthyear}) => {
    const { store, actions}= useContext(Context);
    let found = store.favorites.find(item => item == title);
    return (
    <Col>
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://static.nike.com/a/images/f_jpg,q_auto:eco/61b4738b-e1e1-4786-8f6c-26aa0008e80b/swoosh-logo-black.png" />
        <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            <Row>Gender: {gender}</Row>
			<Row>Hair-Color: {haircolor}</Row>
			<Row>Eye-Color: {eyecolor}</Row>
            <Row>Birth-Year: {birthyear}</Row>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        <Button onClick={() => actions.addFavorites(title) } variant={found ? "success" : "primary"}>Favorites</Button>
        </Card.Body>
    </Card>
    </Col>
);
}

