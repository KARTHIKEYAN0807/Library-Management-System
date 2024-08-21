import * as Yup from 'yup';

const AuthorValidation = Yup.object().shape({
  name: Yup.string()
    .required('Author name is required')
    .min(2, 'Author name must be at least 2 characters long')
    .max(100, 'Author name must be less than 100 characters long'),
  birthDate: Yup.date()
    .required('Birth date is required')
    .max(new Date(), 'Birth date cannot be in the future'),
  biography: Yup.string()
    .required('Biography is required')
    .min(10, 'Biography must be at least 10 characters long')
    .max(1000, 'Biography must be less than 1000 characters long'),
});

export default AuthorValidation;
