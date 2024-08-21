import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import bookValidationSchema from './BookValidation';

const BookForm = ({ onSubmit, initialValues }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={bookValidationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <Field name="title" type="text" className="form-control" />
            <ErrorMessage name="title" component="div" className="text-danger" />
          </div>

          <div className="form-group">
            <label htmlFor="author">Author</label>
            <Field name="author" type="text" className="form-control" />
            <ErrorMessage name="author" component="div" className="text-danger" />
          </div>

          <div className="form-group">
            <label htmlFor="isbn">ISBN</label>
            <Field name="isbn" type="text" className="form-control" />
            <ErrorMessage name="isbn" component="div" className="text-danger" />
          </div>

          <div className="form-group">
            <label htmlFor="publicationDate">Publication Date</label>
            <Field name="publicationDate" type="date" className="form-control" />
            <ErrorMessage name="publicationDate" component="div" className="text-danger" />
          </div>

          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default BookForm;
