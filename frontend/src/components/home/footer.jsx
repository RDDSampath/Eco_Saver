import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'  style={{marginTop:'5vw'}} >
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' id='footerhead'>
        <div className='me-5 d-none d-lg-block' >
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                EcoSaver
              </h6>
              <p>
              Your destination for sustainable waste management. 
              Discover tips, resources, and solutions to reduce waste,
               recycle effectively, and protect the environment. 
               Join us in creating a greener future. Together, let's make a positive 
              impact on our planet. Visit our website today!
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Shoes
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Clothes
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Materials
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 offers
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  www.wm.com
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  www.springer.com
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 dribbble.com
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                themeforest.net
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                 LakeRoad, Malabe ,Srilanka
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                Ecosaver@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 94 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 94 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' id='foterbottom'>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='/'>
          EcoSaver.com
        </a>
      </div>
    </MDBFooter>
  );
}