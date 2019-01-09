import React from 'react';
import {Field, Form, withFormik} from 'formik';
import * as Yup from 'yup';
import ErrorMessage from './ErrorMessage';
import ErrorPopUp from './ErrorPopUp';
import Debug from './Debugger';


const FormValid = ({values, errors, touched}) => (
                <Form className="form">
                    <div className="form__wrapper">
                        <div className="form__email">
                            {touched.email && errors.email && <ErrorPopUp error={errors.email} />}
                            <Field type="email" name="email" placeholder="" />
                            <label className="form__email-label" htmlFor="email">Your e-mail</label>
                        </div>
                    </div>
                    <div className="form__wrapper">
                    <div className="form__password">
                            {touched.password && errors.password && <ErrorPopUp error={errors.password} />}
                            <Field type="password" name="password" placeholder="" />
                            <label className="form__password-label" htmlFor="password">Введите пароль</label>
                        </div>
                    </div>
                    <div className="form__wrapper">
                        <p className="form__label-currency">Валюта для ввода и вывода средств</p>
                        <div id="currency" className="currency">
                            <label>
                                <div className="currency__type">
                                    <Field type="radio" name="currency" value="ruble" checked={values.currency === 'ruble'} />
                                    <span>Р</span>
                                </div>
                            </label>
                            <label>
                            <div className="currency__type">
                                    <Field type="radio" name="currency" value="dollar" checked={values.currency === 'dollar'} />
                                    <span>$</span>
                                </div>
                            </label>
                            <label>
                            <div className="currency__type">
                                    <Field type="radio" name="currency" value="euro" checked={values.currency === 'euro'} />
                                    <span>E</span>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="form__wrapper">
                        <label className="checkbox">
                        {touched.checkbox && errors.checkbox && <ErrorPopUp error={errors.checkbox} />}
                            <Field className="checkbox__input" type="checkbox" name="checkbox" checked={values.checkbox} />
                            <span className="checkbox__label"></span>
                            <p className="checkbox__assignment">Я совершеннолетний, ознакомился и принимаю соглашение об оказании услуг.</p>
                        </label>
                    </div>
                    {errors.emailAlreadyTaken && <ErrorMessage error={errors.emailAlreadyTaken}/>}
                    <div className="form__button-wrapper">
                        <button className="form__button" component="button" name="submit" type="submit">Зарегистрироваться</button>
                    </div>
                    <Debug />

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
            if(values.email === 'test@gmail.com') {
                setErrors({ emailAlreadyTaken: "Учётная запись с указанным e-mail уже существует" })
            } else {
                resetForm()
            }
            setSubmitting(false)
    }
})(FormValid)


export default SignUpForm;