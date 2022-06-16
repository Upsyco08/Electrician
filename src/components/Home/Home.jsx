import React from 'react'
import NavBar from '../NavBar/NavBar'
import "./index.scss"
import house from "../../assets/house.jpg"
import { Field, Form, Formik } from 'formik'
import BoltIcon from '@mui/icons-material/Bolt';

function Home() {
  return (
    <>
      <div className="homepage">
          <img className='home-image' src={house} alt="house" />
          <p className='home-uppertext'>we can light everything</p>
          <h1 className='home-lowertext1'>Nothing is</h1>
          <h1 className='home-lowertext2'>Impossible for Us</h1>
          <div className='request'>
            <div className='request-top'>
              <h1>Request Service Today</h1>
            </div>
            <div className='request-bottom'>
            <Formik
              initialValues={{
              name: '',
              email: '',
              number: '',
              }}
              onSubmit=""
            >
              <Form className='home-form'>
                <Field className="form-component" id="name" name="name" placeholder="Your Name" />
                <Field className="form-component" id="email" name="email" placeholder="Your e-mail" type="email" />
                <Field className="form-component" id="number" name="number" placeholder="Your Number" type="number" />
                <Field className="form-component" id="date" name="date" placeholder="Date" />
                <button className="form-button" type="submit"><BoltIcon className='link-icon'/>Get Service</button>
              </Form>
            </Formik>
            </div>
          </div>
        </div>
    </>
  )
}

export default Home