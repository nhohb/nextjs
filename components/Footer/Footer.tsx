import React from 'react';
import { Container, Row } from 'react-bootstrap';

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <div className='col-12 col-md'>
            <small className='d-block mb-3 text-muted'>&copy;DevBlock VietNam 2017–2021</small>
          </div>

          <div className='col-xs-12 col-sm-6 col-md-4'>
            <h5>Features</h5>

            <ul className='list-unstyled text-small'>
              <li className='mb-1'>
                <a className='link-secondary text-decoration-none' href='#'>
                  Cool stuff
                </a>
              </li>
              <li className='mb-1'>
                <a className='link-secondary text-decoration-none' href='#'>
                  Random feature
                </a>
              </li>
              <li className='mb-1'>
                <a className='link-secondary text-decoration-none' href='#'>
                  Team feature
                </a>
              </li>
            </ul>
          </div>

          <div className='col-xs-12 col-sm-6 col-md-4'>
            <h5>Resources</h5>

            <ul className='list-unstyled text-small'>
              <li className='mb-1'>
                <a className='link-secondary text-decoration-none' href='#'>
                  Resource
                </a>
              </li>
              <li className='mb-1'>
                <a className='link-secondary text-decoration-none' href='#'>
                  Resource name
                </a>
              </li>
              <li className='mb-1'>
                <a className='link-secondary text-decoration-none' href='#'>
                  Another resource
                </a>
              </li>
            </ul>
          </div>

          <div className='col-xs-12 col-sm-6 col-md-4'>
            <h5>About</h5>

            <ul className='list-unstyled text-small'>
              <li className='mb-1'>
                <a className='link-secondary text-decoration-none' href='#'>
                  Team
                </a>
              </li>
              <li className='mb-1'>
                <a className='link-secondary text-decoration-none' href='#'>
                  Locations
                </a>
              </li>
              <li className='mb-1'>
                <a className='link-secondary text-decoration-none' href='#'>
                  Privacy
                </a>
              </li>
              <li className='mb-1'>
                <a className='link-secondary text-decoration-none' href='#'>
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
