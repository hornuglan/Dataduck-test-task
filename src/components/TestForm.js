import React from 'react';
import {render} from 'react-dom';
import {Formik, Field, Form, FieldArray, ErrorMessage, withFormik} from 'formik';
import Debug from './Debugger';
import * as Yup from 'yup';
import FormValid from './FormValid';

const TestForm = ({values, errors, touched, isSubmitting}) => (
    <Form>
        <div>
            {touched.email && errors.email && <p>{errors.email}</p>}
            <Field type="email" name="email" placeholder="Email" />
        </div>
        <div>
            {touched.password && errors.password && <p>{errors.password}</p>}   
            <Field type="password" name="password" placeholder="Password" />
        </div>
        <div>
        <label>
            {touched.newsletter && errors.newsletter && <p>{errors.newsletter}</p>}
            <Field type="checkbox" name="newsletter" checked={values.newsletter} />
          Join our newsletter
        </label>
        </div>
        <button type="submit" disabled={isSubmitting}>Submit</button>
    </Form>
)

const FormikApp = withFormik({
    mapPropsToValues({ email, password, newsletter }) {
        return {
            email: email || '',
            password: password || '',
            newsletter: newsletter || false
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(4).required(),
        newsletter: Yup.boolean().oneOf([true], "Must accept the policy")
    }),
    handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
        setTimeout(() => { 
            if(values.email === 'zai@milai.com') {
                setErrors({ email: "This e-mail is already taken" })
            } else {
                resetForm()
            }
            setSubmitting(false)
        }, 2000)
    }
})(TestForm)

export default FormikApp;