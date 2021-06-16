import { Link } from "react-router-dom";

import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { FormattedMessage, injectIntl } from "react-intl";

import { Animated } from "react-animated-css";

import * as Yup from "yup";

import * as auth from '../../../redux/reducers/authReducer';
import { login } from "./login.controller";

const initialValues = {
    email: "admin@demo.com",
    password: "demo",
};


const Login = ({ intl }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [loading, setLoading] = useState(false);

    const LoginSchema = Yup.object().shape({
        email: Yup.string()
            .email("Wrong email format"),
        password: Yup.string()
            .required(
                intl.formatMessage({ id: "AUTH.VALIDATION.REQUIRED_FIELD" })
            )
    });

    const getInputClasses = (fieldname) => {
        if (formik.touched[fieldname] && formik.errors[fieldname]) {
            return "is-invalid";
        }

        if (formik.touched[fieldname] && !formik.errors[fieldname]) {
            return "is-valid";
        }

        return "";
    };

    const enableLoading = () => {
        setLoading(true);
    }

    const disableLoading = () => {
        setLoading(false);
    }


    const formik = useFormik({
        initialValues,
        validationSchema: LoginSchema,
        onSubmit: async (values, { setStatus, setSubmitting }) => {
            enableLoading();
            setStatus(false);
            try {
                const { authToken } = await login(values.email, values.password);

                dispatch(auth.actions.login(authToken));

                history.push('../../');

            } catch (e) {
                setStatus(intl.formatMessage({ id: "AUTH.VALIDATION.INVALID_LOGIN" }));
            } finally {
                disableLoading();
                setSubmitting(false);
            }

        }
    });

    return (
        <div className="d-flex flex-column flex-root">
            <div className="Login d-flex flex-column flex-lg-row flex-column-fluid bg-white">
                <div className="Login--aside d-flex flex-row-auto bgi-size-cover bgi-no-repeat p-10 p-lg-10">

                    <div className="flex-column-fluid d-flex flex-column justify-content-center">
                        <h3 className="font-size-h1 mb-5 text-white">
                            Awesome App
                        </h3>
                    </div>

                </div>
                <div className="Login--content d-flex flex-column flex-row-fluid flex-center p-7 position-relative">
                    <div className="text-center mb-10 mb-lg-20">
                        <h3 className="font-size-h1">
                            <FormattedMessage id="AUTH.LOGIN.TITLE" />
                        </h3>
                        <p className="text-muted font-weight-bold">
                            Enter your username and password
                        </p>
                    </div>

                    <form className="form" onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e) }}>
                        {
                            formik.status ? (
                                <Animated animationIn="bounceIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={formik.status ? true : false}>
                                    <div className="mb-10 alert alert-light-danger alert-dismissible">
                                        <div className="alert-text font-weight-bold">{formik.status}</div>
                                    </div>
                                </Animated>
                            ) : (
                                formik.status ? (
                                    <Animated animationIn="bounceIn" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={formik.status ? true : false}>
                                        <div className="mb-10 alert alert-light-info alert-dismissible">
                                            <div>
                                                Use account <strong>admin@demo.com</strong> and password{" "} <strong>demo</strong> to continue.
                                        </div>
                                        </div>
                                    </Animated>
                                ) : ''
                            )
                        }

                        <div className="form-group">
                            <input
                                autoComplete="off"
                                placeholder="Email"
                                type="email"
                                className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses(
                                    "email"
                                )}`}
                                name="email"
                                {...formik.getFieldProps('email')} />

                            <Animated
                                animationIn="bounceIn"
                                animationOut="fadeOutDown"
                                isVisible={(formik.touched.email && formik.errors.email) ? true : false}>
                                <div className="message-container">
                                    <div className="message-text">{formik.errors.email}</div>
                                </div>
                            </Animated>

                        </div>

                        <div className="form-group">
                            <input
                                autoComplete="off"
                                placeholder="Password"
                                type="password"
                                className={`form-control form-control-solid h-auto py-5 px-6`}
                                name="password"
                                {...formik.getFieldProps('password')} />
                            <Animated
                                animationIn="bounceIn"
                                animationOut="fadeOutDown"
                                isVisible={(formik.touched.password && formik.errors.password) ? true : false}>
                                <div className="message-container">
                                    <div className="message-text">{formik.errors.password}</div>
                                </div>
                            </Animated>
                        </div>

                        <div className="form-group d-flex flex-wrap justify-content-between align-items-center">
                            <Link
                                to="/auth/forgot-password"
                                className="text-dark-50 text-hover-primary my-3 mr-2">
                                <FormattedMessage id="AUTH.GENERAL.FORGOT_BUTTON" />
                            </Link>
                            <button className={` btn btn-primary font-weight-bold px-9 py-4 my-3`} type="submit">
                                <span>Sign In</span>
                                {loading && <span className="ml-3 spinner spinner-white"></span>}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default injectIntl(Login);