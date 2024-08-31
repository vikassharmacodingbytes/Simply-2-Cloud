import React, { useContext, useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { CircularProgress, Rating } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import CreatableSelect from "react-select/creatable";
import Select from "react-select";
import InternJobProfilieInputArr from "./InJobProfInpArr";
import generateValidationSchema from "../../../../../Component/GenrateValidationSchema/genrateValidationSchema";
import genrateInitalValues from "../../../../../Component/genrateInitialValues/InitialValues";
import { DataContext } from "../../../../../context";
import API_BASE_URL from "../../../../../config";


const InternJobProfileForm = () => {

    const validationSchema = generateValidationSchema(InternJobProfilieInputArr);
    const initialValues = genrateInitalValues(InternJobProfilieInputArr);
    const [addButton, setAddButton] = useState();
    const {
        userDetails,
        profileFunc
    } = useContext(DataContext);

    useEffect(() => {
        profileFunc();
    }, []);

    const myCompleateJobProfileFunc = (values, { resetForm, setFieldValue }) => {
        setAddButton(true);
        axios
            .post(`${API_BASE_URL}/compleate-intern-job-profile/`, values, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(() => {
                toast.success("Profile Added Sucessfully!", {
                    position: "top-center",
                });
                profileFunc();
                resetForm();
            })
            .catch((err) => {
                toast.error("Internal Server Error", {
                    position: "top-center",
                });
                console.log(err);
            })
            .finally(() => {
                setAddButton(false);
                resetForm();
                setFieldValue("desc", []);
            });
    }


    return (
        <div>
            <div className="w-[100%] py-10 bg-blue-50">
                <div className="sm:w-[80%] w-[90%]  mx-auto bg-white rounded-lg shadow-2xl border border-solid border-gray-300">
                    <Formik
                        initialValues={initialValues}
                        onSubmit={myCompleateJobProfileFunc}
                        validationSchema={validationSchema}
                    >
                        {({
                            values,
                            handleSubmit,
                            resetForm,
                            setFieldValue,
                            handleBlur,
                        }) => (
                            <Form encType="multipart/form-data">
                                <div className="mb-4 grid md:grid-cols-2 grid-cols-1 gap-4 p-4">
                                    <div className="" key={index}>
                                        <h4 className="text-blue-600 mb-2">
                                            {element.placeholder}{" "}
                                            <span className="text-red-500">*</span>
                                        </h4>
                                        <div className={"w-full relative col-span-1 "}>
                                            {element.icon}
                                            {element.type == "textarea" ?
                                                <textarea
                                                    type={element.type}
                                                    name={element.name}
                                                    placeholder={element.name == 'title' ? element.helpingtext : element.placeholder}
                                                    required
                                                    className="pl-9 w-full py-2 peer px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600 h-[4rem]"
                                                /> : <input
                                                    type={element.type}
                                                    name={element.name}
                                                    placeholder={element.name == 'title' ? element.helpingtext : element.placeholder}
                                                    required
                                                    className="pl-9 w-full py-2 peer px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                                                />}
                                        </div>
                                        <ErrorMessage
                                            name={element.name}
                                            component="div"
                                            className="text-red-500"
                                        />
                                    </div>
                                </div>
                                <div className="mb-4 mx-5">
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                                    >
                                        {addButton ? (
                                            <CircularProgress size={19} color="inherit" />
                                        ) : (
                                            "Add Profile"
                                        )}
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default InternJobProfileForm
