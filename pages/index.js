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
        username: values.username,
        password: values.password,
      };
      const response = await axiosGeneral.post("/login", body);
      const { status, data } = response;
      // console.log(data);
      if (status === 200) {
        dispatch(setUser(data.data.user_metadata));
        dispatch(setAccessToken(data.data.token));
        Router.replace("/dashboard");
        dispatch(setLoading(false));
      }
    } catch (error) {
      dispatch(setLoading(false));
      addToast(error.response.data.message, { appearance: "error" });
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: FormSchema,
    onSubmit: (values) => doLogin(values),
  });

  return (
    <>
      <div>
        <div className="container mt-52">
          <div className="row justify-content-center">
            <div className="col-md-6 bg-blue-300 my-10 ">
              <h1 className="text-center text-green-600 my-4">LISTRIK</h1>
              <form
                className="my-10"
                onSubmit={formik.handleSubmit}
                method="POST"
              >
                <div className="form-group">
                  <label>Username </label>
                  <input
                    className="custom-input form-control"
                    type="text"
                    placeholder="Username"
                    autoComplete="false"
                    name="username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                  />
                  {formik.errors.username && (
                    <span className="text-xs text-red-500">
                      {formik.errors.username}
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  {formik.errors.password && (
                    <span className="text-xs text-red-500">
                      {formik.errors.password}
                    </span>
                  )}
                </div>
                <Button
                  // disabled={formik.isSubmitting}
                  variant="warning"
                  type="submit"
                  className="mt-4 font-bold text-base"
                  block
                >
                  Login
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// return (
// <>
//   <Head>
//     <title>Login - LISTRIK</title>
//   </Head>
//   <Container className="bg-green-500 justify-content-md-center mt-28 ">
//     <Row>
//         <h1>Listrik</h1>
//         <h3 className="font-semibold">Masuk</h3>
//         <form onSubmit={formik.handleSubmit} method="POST">
//           <div className="mt-5">
//             <Form.Label>Username</Form.Label>
//             <Form.Control
//               className="custom-input"
//               type="text"
//               autoComplete="false"
//               name="email"
//               onChange={formik.handleChange}
//               value={formik.values.email}
//             />
//             {formik.errors.email && (
//               <span className="text-xs text-red-500">
//                 {formik.errors.email}
//               </span>
//             )}
//           </div>
//           <div>
//             <Form.Label htmlFor="password">Password</Form.Label>
//             <Form.Control
//               className="custom-input"
//               type="password"
//               autoComplete="true"
//               name="password"
//               onChange={formik.handleChange}
//               value={formik.values.password}
//             />
//             {formik.errors.password && (
//               <span className="text-xs text-red-500">
//                 {formik.errors.password}
//               </span>
//             )}
//           </div>
//           <Button
//             disabled={formik.isSubmitting}
//             variant="warning"
//             type="submit"
//             className="mt-4"
//             block
//           >
//             Login
//           </Button>
//         </form>
//     </Row>
//   </Container>
//   <style>{`
//     .imigrasi-logo {
//       width:90%;
//       height: 50vh;
//       object-fit: contain;
//       margin-top:20vh;
//       margin-left: auto;
//       margin-right: auto;
//       display:block;
//     }
//     .col-right {
//       background: #03045E;
//       height: 100vh;
//     }
//     .col-left {
//       background: #0e979c;
//       height: 100vh;
//       max-height: 100vh;
//       padding-left: 36px;
//       padding-right: 36px;
//     }
//     h1 {
//       font-family: "Poppins", sans-serif;
//       font-weight: bold;
//       font-size: 3.75rem;
//       color: #0e979c;
//       text-align:center;
//       margin-bottom: 75px;
//     }
//     h3 {
//       font-weight: 600;
//     }
//     .inline-icon {
//       position: absolute;
//       bottom: .45rem;
//       right: .45rem;
//       font-size: 24px;
//       cursor:pointer;
//     }
//     .btn-warning {
//       color: #2B2D42 !important;
//       font-weight: bold !important;
//       border-radius: 10px;
//       text-transform: uppercase;
//       height:40px;
//       font-size: 14px;
//     }
//     .custom-input {
//       background: #f5f5f5;
//       border: 1px solid #a8dadc !important;
//       border-radius: 10px !important;
//       font-size: 14px !important;
//       color: #445455 !important;
//       height:40px;
//       padding-left:17px;
//     }
//     .custom-input:focus {
//       background: #f5f5f5;
//     }
//   `}</style>
// </>
// );
// }
