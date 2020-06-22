import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";

const SearchBar = () => {
    return (
        <div className={"search-box mb-3"}>
            <div className={"search-box-background"}>

            </div>
            <div className={"search-box-foreground"}>
                <Row className={"m-4 mb-5 align-items-center"}>
                    <Col><h5 className={"logo ml-4"}><strong>netflix</strong>roulette</h5></Col>
                    <Col className={"text-right"}><Button className={"btn-add-movie"}>+ Add movie</Button></Col>
                </Row>

                <Container className={"ml-5"}>
                    <Col><h1 className={"title mb-4"}>Find your movie</h1></Col>
                    <InputGroup className={"align-items-center"}>
                        <Col><input className={"input-lg"} placeholder={"What do you want to watch?"}/></Col>
                        <Col><Button size={"lg"} className={"ml-2 pl-5 pr-5"}>Search</Button></Col>
                    </InputGroup>
                </Container>
            </div>
        </div>
    );
};

export default SearchBar
