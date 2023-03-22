import {React, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch} from "react-redux";
import {filterInfoByName, reset} from '../redux/actions';
import './css/SearchBar.css';

function SearchBar() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(reset());
    dispatch(filterInfoByName(title));
    setTitle("")
  };

  const handleReset = () => {
    dispatch(reset());
  };


  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Title</Navbar.Brand>
          <Nav
            className="navbar-nav me-auto my-2 my-lg-0"
            navbarScroll
          >
            <Form className="d-flex" onSubmit={(e) => handleSearch(e)}>
            <Form.Control
              type="search"
              placeholder="test2.csv"
              className="me-2"
              aria-label="Search"
              value={title}
              onChange={handleTitleChange}
            />
            <Button className="btn-primary" type="submit" disabled={!title ? true : false}>Search</Button>
          </Form>
          </Nav>
          <Button className="btn-primary" onClick={handleReset}>Reset</Button>
      </Container>
    </Navbar>
  );
}

export default SearchBar;