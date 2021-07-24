import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import styles from './Header.module.scss';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar bg='light' fixed='top' collapseOnSelect expand='lg'>
        <Container>
          <Link href='/' passHref>
            <Navbar.Brand>DevBlock</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />

          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Link href='/' passHref>
                <Nav.Link>Home</Nav.Link>
              </Link>

              <Link href='/menu?storeId=1d0d7f4a-bd6d-11e8-8717-0242ac1a0002' passHref>
                <Nav.Link>Menu</Nav.Link>
              </Link>

              <Link href='/products' passHref>
                <Nav.Link>Products</Nav.Link>
              </Link>
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
