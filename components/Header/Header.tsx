import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar bg='light' fixed='top' collapseOnSelect expand='lg'>
        <Container>
          <Navbar.Brand href='/'>DevBlock</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />

          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/menu'>Menu</Nav.Link>
              <Nav.Link href='/products'>Products</Nav.Link>
            </Nav>

            <Form className='d-flex'>
              <FormControl
                type='search'
                placeholder='Search'
                className='mr-2'
                aria-label='Search'
              />

              <Button variant='outline-success'>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
