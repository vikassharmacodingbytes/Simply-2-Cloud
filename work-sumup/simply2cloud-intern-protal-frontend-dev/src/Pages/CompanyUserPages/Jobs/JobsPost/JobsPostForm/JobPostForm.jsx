import React, { useContext, useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { CircularProgress, Rating } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import JobsPostFormArr from "./JobsPostFormArr";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import generateValidationSchema from "../../../../../Component/GenrateValidationSchema/genrateValidationSchema";
import genrateInitalValues from "../../../../../Component/genrateInitialValues/InitialValues";
import { DataContext } from "../../../../../context";
import API_BASE_URL from "../../../../../config";

const JobPostForm = (props) => {
  const validationSchema = generateValidationSchema(JobsPostFormArr);
  const initialValues = genrateInitalValues(JobsPostFormArr);
  const [filterSubCategoery, setFilterSubCategoery] = useState([]);
  const [addButton, setAddButton] = useState(false);

  const {
    jobSubCategoeryOpt,
    companyJobPageFunc,
    avaibleSkills,
    getJobsPostedByCompanyFunc,
    jobCategoeryOpt,
    companyProfileFunc
  } = useContext(DataContext);
  const token = Cookies.get("token");


  useEffect(() => {
    companyJobPageFunc();
    if (!Cookies.get("company")) {
      companyProfileFunc();
    }
  }, []);

  const jobPostFunc = (values, { resetForm, setFieldValue }) => {
    setAddButton(true);
    const data = values;
    Object.entries(data).map(([key, item]) => {
      if (Array.isArray(item)) {
          data[key] = item.map((element) => element.value);
      }
    });

    data["company"] = Cookies.get("company");
    data["company_user"] = Cookies.get("user");
    data["job_categoery"] = data["job_categoery"].value;
    data["sub_categoery"] = data["sub_categoery"].value;

    console.log(values);
    axios
      .post(`${API_BASE_URL}/job-post/`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        toast.success("Job Posted Successfully", { position: "top-center" });
        resetForm();
        getJobsPostedByCompanyFunc();
        try {
          props.setIsModalOpen(false);
        } catch (error) { }
      })
      .catch((err) => {
        console.log(err);
        console.log(values.job_categoery);
        toast.error("Internal Server Error", { position: "top-center" });
      })
      .finally(() => {
        setAddButton(false);
        try {
          setFieldValue("responsibilities","");
          setFieldValue("benifits", "");
          setFieldValue("skills_required", []);
          setFieldValue("skills_preferred", []);
          setFieldValue("sub_categoery", []);
          setFilterSubCategoery([]);
        } catch (error) { 
          console.log(error);
        }
      });
  };

  return (
    <div>
      <div className="w-[100%] py-10 bg-blue-50">
        <div className="sm:w-[80%] w-[90%]  mx-auto bg-white rounded-lg shadow-2xl border border-solid border-gray-300">
          <h2 className="bg-gray-100 text-blue-600 text-3xl py-4 px-6 mb-6 font-semibold text-center">
            Post Job
          </h2>
          <Formik
            initialValues={initialValues}
            onSubmit={jobPostFunc}
            validationSchema={validationSchema}
          >
            {({
              values,
              handleSubmit,
              resetForm,
              setFieldValue,
              handleBlur,
            }) => (
              <Form>
                <div className="mb-4 grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-4 p-4">
                  {JobsPostFormArr.map((element, index) => {

                    if (element.type == "textarea") {
                      return <div className="" key={index}>
                        <h4 className="text-blue-600 mb-2">
                          {element.placeholder}{" "}
                          <span className="text-red-500">*</span>
                        </h4>
                        <Field
                        as="textarea"
                          type={element.type}
                          name={element.name}
                          placeholder={element.name == 'title' ? element.helpingtext : element.placeholder}
                          required
                          className={" w-full py-2 peer px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600 h-[6rem]"}
                        />
                      </div>
                    }
                    if (element.type == "array") {
                      return (
                        <div className="" key={index}>
                          <h4 className="text-blue-600 mb-2">
                            {element.placeholder}
                            <span className="text-red-500">*</span>
                          </h4>
                          <CreatableSelect
                            isMulti
                            value={values[element.name]}
                            placeholder={element.placeholder}
                            options={values[element.name]}
                            onChange={(selectedOptions) => {
                              setFieldValue(element.name, selectedOptions);
                            }}
                            getOptionLabel={(option) => option.label}
                            getOptionValue={(option) => option.value}
                            formatCreateLabel={(inputValue) =>
                              `Add ${element.placeholder} : ${inputValue}`
                            }
                            isValidNewOption={(
                              inputValue,
                              selectValue,
                              selectOptions
                            ) =>
                              inputValue.trim() !== "" &&
                              !selectOptions.some(
                                (option) => option.label === inputValue
                              )
                            }
                          />
                          <ErrorMessage
                            name={element.name}
                            component="div"
                            className="text-red-500"
                          />
                        </div>
                      );
                    }
                    if (element.type == "dynamic") {
                      if (element.name == "job_categoery" || element.name == "sub_categoery") {
                        return (
                          <div className="" key={index}>
                            <h4 className="text-blue-600 mb-2">
                              {element.placeholder}
                              <span className="text-red-500">*</span>
                            </h4>
                            <div className={"w-full relative col-span-1 "}>
                              {element.icon}
                              <Select
                                name={element.name}
                                value={values[element.name]}
                                options={element.name == "sub_categoery" ? filterSubCategoery?.map(
                                  (subcatel, index) => {
                                    return {
                                      value: subcatel.id,
                                      label: subcatel.sub_category_name,
                                    };
                                  }
                                ) : jobCategoeryOpt?.map(
                                  (skillElement, index) => {
                                    return {
                                      value: skillElement.id,
                                      label: skillElement.job_category,
                                    };
                                  }
                                )}
                                onFocus={() => {
                                  if ((!values.job_categoery || values.job_categoery == []) & element.name == "sub_categoery") {
                                    toast.error("Please Select Job Categoery First", { position: "top-center" });
                                  }
                                  console.log(values.job_categoery)
                                }}
                                onChange={(selectedOptions) => {

                                  if (element.name == "job_categoery") {
                                    let fl = jobSubCategoeryOpt.filter((element, index) => {
                                      return element.category == selectedOptions.value
                                    })
                                    setFilterSubCategoery(fl);
                                    setFieldValue("sub_categoery", "")
                                  }
                                  setFieldValue(element.name, selectedOptions);

                                }}
                                placeholder={element.placeholder}
                                required
                                className=""
                              />
                            </div>
                            <ErrorMessage
                              name={element.name}
                              component="div"
                              className="text-red-500"
                            />
                          </div>
                        );
                      }

                      return (
                        <div className="" key={index}>
                          <h4 className="text-blue-600 mb-2">
                            {element.placeholder}
                            <span className="text-red-500">*</span>
                          </h4>
                          <Select
                            isMulti
                            name={element.name}
                            value={values[element.name]}
                            options={avaibleSkills?.map(
                              (skillElement, index) => {
                                return {
                                  value: skillElement.id,
                                  label: skillElement.name,
                                };
                              }
                            )}
                            onChange={(selectedOptions) => {
                              setFieldValue(element.name, selectedOptions);
                            }}
                            placeholder={element.placeholder}
                            required
                            className=""
                          >
                            <option value="">Please Select</option>
                            {element.options?.map((elementOpt, index) => (
                              <option
                                value={
                                  (element.name = "job_categoery"
                                    ? elementOpt.value
                                    : elementOpt)
                                }
                                key={index}
                              >
                                {elementOpt}
                              </option>
                            ))}
                          </Select>
                          <ErrorMessage
                            name={element.name}
                            component="div"
                            className="text-red-500"
                          />
                        </div>
                      );
                    }

                    if (element.type == "select") {
                      return (
                        <div className="" key={index}>
                          <h4 className="text-blue-600 mb-2">
                            {element.placeholder}
                            <span className="text-red-500">*</span>
                          </h4>
                          <div className={"w-full relative col-span-1 "}>
                            {element.icon}
                            <Field
                              as="select"
                              name={element.name}
                              placeholder={element.placeholder}
                              required
                              className="pl-9 w-full py-2 peer px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                            >
                              <option value="">Please Select </option>
                              {element.options?.map((elementOpt, index) => (
                                <option value={elementOpt.value} key={index}>
                                  {elementOpt.label}
                                </option>
                              ))}
                            </Field>
                          </div>
                          <ErrorMessage
                            name={element.name}
                            component="div"
                            className="text-red-500"
                          />
                        </div>
                      );
                    }
                    return (
                      <div className="" key={index}>
                        <h4 className="text-blue-600 mb-2">
                          {element.placeholder}{" "}
                          <span className="text-red-500">*</span>
                        </h4>
                        <div className={"w-full relative col-span-1 "}>
                          {element.icon}
                          <Field
                            type={element.type}
                            name={element.name}
                            placeholder={element.placeholder}
                            required
                            className="pl-9 w-full py-2 peer px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600"
                          />
                        </div>
                        <ErrorMessage
                          name={element.name}
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="mb-4 mx-5">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                  >
                    {addButton ? (
                      <CircularProgress size={19} color="inherit" />
                    ) : (
                      "Post Jobs"
                    )}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default JobPostForm;
