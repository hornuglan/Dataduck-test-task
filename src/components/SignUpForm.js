import React from 'react';
import { Field, Form, withFormik } from 'formik';
import * as Yup from 'yup';
import ErrorMessage from './ErrorMessage';
import ErrorPopUp from './ErrorPopUp';


const FormValid = ({ values, errors, touched }) => (
  <Form className="form" method="POST">
    <div className="form__wrapper">
      <div className="form__email">
        {touched.email && errors.email && <ErrorPopUp error={errors.email} />}
        <Field type="email" name="email" placeholder="" id="email" />
        <label className="form__email-label" htmlFor="email">Enter your e-mail</label>
      </div>
    </div>
    <div className="form__wrapper">
      <div className="form__password">
        {touched.password && errors.password && <ErrorPopUp error={errors.password} />}
        <Field type="password" name="password" placeholder="" id="password" />
        <label className="form__password-label" htmlFor="password">Enter your password</label>
      </div>
    </div>
    <div className="form__wrapper">
      <p className="form__label-currency">Choose currency</p>
      <div id="currency" className="currency">
        <label>
          <div className="currency__type">
            <Field type="radio" name="currency" value="ruble" checked={values.currency === 'ruble'} />
            <span>&#8381;</span>
          </div>
        </label>
        <label>
          <div className="currency__type">
            <Field type="radio" name="currency" value="dollar" checked={values.currency === 'dollar'} />
            <span>&#36;</span>
          </div>
        </label>
        <label>
          <div className="currency__type">
            <Field type="radio" name="currency" value="euro" checked={values.currency === 'euro'} />
            <span>&euro;</span>
          </div>
        </label>
      </div>
    </div>
    <div className="form__wrapper">
      <label className="checkbox">
        {touched.checkbox && errors.checkbox && <ErrorPopUp error={errors.checkbox} />}
        <Field className="checkbox__input" type="checkbox" name="checkbox" checked={values.checkbox} />
        <span className="checkbox__label"></span>
        <p className="checkbox__assignment">Click here to&nbsp;indicate that you have read and agree to&nbsp;the terms presented in&nbsp;the Terms and Conditions agreement</p>
      </label>
    </div>
    {errors.emailAlreadyTaken && <ErrorMessage error={errors.emailAlreadyTaken} />}
    <div className="form__button-wrapper">
      <button className="form__button" component="button" name="submit" type="submit">Sign&nbsp;Up</button>
    </div>
  </Form>
)

const SignUpForm = withFormik({
  mapPropsToValues({ email, password, currency, checkbox }) {
    return {
      email: email || '',
      password: password || '',
      currency: currency || 'ruble',
      checkbox: checkbox || false
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email("Неверный e-mail").required("Поле обязательно для заполнения"),
    password: Yup.string().min(4, "Неверный пароль").required("Поле обязательно для заполнения"),
    checkbox: Yup.boolean().oneOf([true], "Необходимо принять условия Соглашения")
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    if (values.email === 'test@gmail.com') {
      setErrors({ emailAlreadyTaken: "Учётная запись с указанным e-mail уже существует" })
    } else {
      resetForm()
    }
    setSubmitting(false)
  }
})(FormValid)

export default SignUpForm;