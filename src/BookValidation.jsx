import * as Yup from 'yup';

const BookValidation = Yup.object().shape({
  title: Yup.string()
    .required('Title is required')
    .min(2, 'Title must be at least 2 characters long')
    .max(100, 'Title must be less than 100 characters long'),
  author: Yup.string()
    .required('Author is required')
    .min(2, 'Author name must be at least 2 characters long')
    .max(100, 'Author name must be less than 100 characters long'),
  isbn: Yup.string()
    .required('ISBN is required')
    .matches(/^\d{13}$/, 'ISBN must be exactly 13 digits'),
  publicationDate: Yup.date()
    .required('Publication date is required')
    .max(new Date(), 'Publication date cannot be in the future'),
});

export default BookValidation;
