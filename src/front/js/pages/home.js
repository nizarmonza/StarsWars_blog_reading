import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Planets } from "./planets";
import { People } from "./people";
import { Container, Col } from "react-bootstrap";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
    <Container fluid>
      <h1 className="offset-2">People</h1>
      <Col>
        <People />
      </Col>
      <h1 className="offset-2">Planets</h1>
      <Col>
        <Planets />
      </Col>
		
    </Container>
	);
};
