import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import debug from "sabio-debug";


const _logger = debug.extend("App");
const _loggerPage = _logger.extend("SPA");


const basicSchema = Yup.object().shape({
    fullName: Yup.string().min(2).max(50).required("is required"),
    email: Yup.string().email('in valid email').required('required'),    
})

function Basic() {
  const [formData] = useState({
    fullName: "",
    email: "",
  });

  const handleSubmit=(values)=>{
    _loggerPage("this is the values" , values);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">

          <Formik 
          enableReinitialize={true} 
          initialValues={formData}
          onSubmit={handleSubmit}
          validationSchema={basicSchema}
          >
            <Form>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <Field type="text" name="fullName" />
                <ErrorMessage 
                name="fullName"
                component="div"
                className="has-error"
                />
              </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Field type="email" name="email" />
                  <ErrorMessage 
                name="email"
                component="div"
                className="has-error"
                />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Basic;
