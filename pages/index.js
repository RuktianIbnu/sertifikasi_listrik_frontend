import Head from "next/head";
import Router from "next/router";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { axiosGeneral } from "../helpers/global";
import { setAccessToken, setUser, setLoading } from "../store/actionCreator";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useToasts } from "react-toast-notifications";

const FormSchema = Yup.object().shape({
  password: Yup.string().required("* Password tidak boleh kosong"),
});

const FormSchemaPassword = Yup.object().shape({
  password: Yup.string().required("* Password tidak boleh kosong"),
  ulangi_password: Yup.string().required("*Ulangi Password tidak boleh kosong"),
  ulangi_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password tidak sama!"
  ),
});

export default function Home() {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.accessToken);
  const { addToast } = useToasts();

  useEffect(() => {
    if (accessToken) {
      Router.replace("/dashboard");
    }

    const url = new URLSearchParams(location.search);
    if (url.get("token") != null) {
      setTokenVerify(url.get("token").toString());
      setIsNewPassword(true);
    }
  }, []);

  const doLogin = async (values) => {
    try {
      dispatch(setLoading(true));
      const body = {
        email: values.email,
        password: values.password,
        app_id: "admin-panel",
      };
      const response = await axiosGeneral.post("/login", body);
      const { status, data } = response;
      // console.log(data);
      if (status === 200) {
        setTokenTemp(data.data.temp_token);
        dispatch(setLoading(false));
        setIsOtp(true);
        setOTP("");
      }
    } catch (error) {
      dispatch(setLoading(false));
      addToast(error.response.data.message, { appearance: "error" });
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: FormSchema,
    onSubmit: (values) => doLogin(values),
  });

  const formikPassword = useFormik({
    initialValues: {
      password: "",
      ulangi_password: "",
    },
    validationSchema: FormSchemaPassword,
    enableReinitialize: false,
    onSubmit: (values) => doChangePassword(values),
  });

  return (
    <>
      <Head>
        <title>Login - LISTRIK</title>
      </Head>
      <Container fluid>
        <Row className="overflow-hidden">
          <Col className="col-left" xl="3" lg="3">
            <>
              <div className="on-center">
                <h1>Listrik</h1>
                <h3 className="font-semibold">Masuk</h3>
                <form onSubmit={formik.handleSubmit} method="POST">
                  <Form.Group className="mt-5">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      className="custom-input"
                      type="text"
                      autoComplete="false"
                      name="email"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                    {formik.errors.email && (
                      <span className="text-xs text-red-500">
                        {formik.errors.email}
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group>
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control
                      className="custom-input"
                      type="password"
                      autoComplete="true"
                      name="password"
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                    {formik.errors.password && (
                      <span className="text-xs text-red-500">
                        {formik.errors.password}
                      </span>
                    )}
                  </Form.Group>
                  {/* <Link href="/forgot-password">
                          <span className="forgot-password-link">
                            Lupa Password?
                          </span>
                        </Link> */}
                  <Button
                    disabled={formik.isSubmitting}
                    variant="warning"
                    type="submit"
                    className="mt-4"
                    block
                  >
                    Login
                  </Button>
                </form>
              </div>
            </>
          </Col>
          <Col className="col-right" xl="9" lg="9">
            <Image
              src="https://www.imigrasi.go.id/uploads/logo/10-52-13-logo-imigrasi_-_Copy.png"
              alt="Logo Imigrasi"
              className="imigrasi-logo mx-auto"
              fluid
            />
          </Col>
        </Row>
      </Container>
      <style>{`
        .forgot-password-link {
          font-size: 13px;
          color: #4361EE;
          text-align: right;
          display:block;
          cursor: pointer;
        }
        .imigrasi-logo {
          width:90%;
          height: 50vh;
          object-fit: contain;
          margin-top:20vh;
          margin-left: auto;
          margin-right: auto;
          display:block;
        }
        .on-center {
          margin-top:60%;
        }
        .col-right {
          background: #03045E;
          height: 100vh;
        }
        .col-left {
          background: #FDFDFD;
          height: 100vh;
          max-height: 100vh;
          padding-left: 36px;
          padding-right: 36px;
        }
        h1 {
          font-family: "Poppins", sans-serif;
          font-weight: bold;
          font-size: 3.75rem;
          color: #323232;
          text-align:center;
          margin-bottom: 75px;
        }
        h3 {
          font-weight: 600;
        }
        .inline-icon {
          position: absolute;
          bottom: .45rem;
          right: .45rem;
          font-size: 24px;
          cursor:pointer;
        }
        .btn-warning {
          color: #2B2D42 !important;
          font-weight: bold !important;
          border-radius: 10px;
          text-transform: uppercase;
          height:40px;
          font-size: 14px;
        }
        .custom-input {
          background: #f5f5f5;
          border: 1px solid #a8dadc !important;
          border-radius: 10px !important;
          font-size: 14px !important;
          color: #445455 !important;
          height:40px;
          padding-left:17px;
        }
        .custom-input:focus {
          background: #f5f5f5;
        }
      `}</style>
    </>
  );
}
