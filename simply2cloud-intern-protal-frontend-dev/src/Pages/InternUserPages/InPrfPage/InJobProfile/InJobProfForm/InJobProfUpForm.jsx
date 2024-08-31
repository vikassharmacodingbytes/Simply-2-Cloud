import React, { useContext, useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
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
import { NavLink, useParams } from "react-router-dom";
import LoadingPage from "../../../../../Component/LoadingPage/LodingPage";
import NoDataPage from "../../../../../Component/NoDataPage/NoDataPage";
import { ArrowBack, ArrowLeft, ArrowLeftOutlined, BackHand, ForkLeft, RampLeft, SwipeLeft } from "@mui/icons-material";


const InternJobProfileUpdate = () => {

  const validationSchema = generateValidationSchema(InternJobProfilieInputArr);
  const initialValues = genrateInitalValues(InternJobProfilieInputArr);
  const [addButton, setAddButton] = useState();
  const { userDetails, profileFunc,internProfileFullDetailsFunc } = useContext(DataContext);
  const [filterSubCategoeryOpt, setFilterSubCategoeryOpt] = useState([]);
  const [profilePhoto, setProfilePhoto] = useState();
  const [thumbnailPhoto, setThumbnailPhoto] = useState();
  const navigate = useNavigate();
    const { id } = useParams();

const defaultValue = {
    "expected_salary": userDetails?.intern_job_profile[0].expected_salary,
"experience_years":userDetails?.intern_job_profile[0].experience_years,
"github_profile":userDetails?.intern_job_profile[0]?.github_profile,
"job_categoery":{value: userDetails?.intern_job_profile[0].job_categoery?.id,  label: userDetails?.intern_job_profile[0].job_categoery?.job_category},
"sub_categoery":{value: userDetails?.intern_job_profile[0].sub_categoery?.id,  label: userDetails?.intern_job_profile[0].sub_categoery?.sub_category_name},
"linkedin_profile":userDetails?.intern_job_profile[0].linkedin_profile,
"portfolio_link":userDetails?.intern_job_profile[0]?.portfolio_link,
"title":userDetails?.intern_job_profile[0]?.title,
"user_image":userDetails?.intern_job_profile[0]?.user_image,
"desc" : userDetails?.intern_job_profile[0]?.desc
}


  useEffect(() => {
    profileFunc();
    internProfileFullDetailsFunc(id)
  }, [])
  Object.entries(initialValues).map(([key, value]) =>{
   
    initialValues[key] = defaultValue[key]
  })

  const myCompleateJobProfileFunc = (values, { resetForm, setFieldValue }) => {
    try {
      setAddButton(true);
      let data = values;
      Object.entries(data).map(([key, item]) => {
        if (Array.isArray(item)) {
          if (key == "desc") {
            data[key] = item.map((element) => element.value).join("\n");
          }
          else {
            data[key] = item.map(element => element.value);
          }
        }
      });
      data["intern"] = Cookies.get("user");
      data["expected_salary"] = `${data.expected_salary}.00`
      data["job_categoery"] = data["job_categoery"].value
      data["sub_categoery"] = data["sub_categoery"].value;
      if (Cookies.get("skills_ids") != "") {
        const skills_id = decodeURIComponent(Cookies.get("skills_ids")).split(",").map(Number);
        data["skills"] = skills_id ? skills_id : [];
      }
      if (Cookies.get("user_avaliable_skills_id") != "") {
        const user_avl_skl = decodeURIComponent(Cookies.get("user_avaliable_skills_id")).split(",").map(Number);
        data["available_skills"] = user_avl_skl ? user_avl_skl : [];
      }
      const token = Cookies.get("token");
      data["user_image"] = profilePhoto;
      data["thumbnail_image"] = thumbnailPhoto;

      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        if (key === 'user_image') {
          // Check if the value is a File object
          if (value instanceof File) {
            formData.append(key, profilePhoto);
          }
        }
        else if (key === "thumbnail_image") {
          if (value instanceof File) {
            formData.append(key, thumbnailPhoto);
          }
        }
        else {
          formData.append(key, value);
        }
      });

      axios
.put(`${API_BASE_URL}/compleate-intern-job-profile/${id}/`, formData, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
.then(() => {
  toast.success("Profile Updated Sucessfully!", {
    position: "top-center",
  });
  profileFunc();
  navigate('/profile')
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

    } catch (error) {
      console.log(error);
    }    
  }

  if (!userDetails){
    return <LoadingPage />
}

// else if (userDetails?.intern_job_profile?.length == 0){
//     return <NoDataPage />
// }

  return (
    <div>
      <ToastContainer />

      
      <div className="w-[100%] py-10 bg-blue-50">
        <NavLink to={'/profile'} className={'md:mx-10 mx-2 bg-white p-4 rounded-full'}>
          <ArrowBack />
        </NavLink>
        <div className="sm:w-[80%] w-[90%]  mx-auto bg-white rounded-lg shadow-2xl border border-solid border-gray-300">
          <h2 className="bg-gray-100 text-blue-600 text-3xl py-4 px-6 mb-6 font-semibold text-center">
            Update Profile
          </h2>
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
                  {InternJobProfilieInputArr.map((element, index) => {
                    if (element.type == "file") {
                      return (
                        <div className="" key={index}>
                          <h4 className="text-blue-600 mb-2">
                            {element.placeholder}{" "}
                            <span className="text-red-500">*</span>
                            {/* { <span className="text-xs">{element.helping_text}</span>} */}
                          </h4>
                          <div className={"w-full relative col-span-1 "}>
                            {element.icon}
                            <input
                              type="file"
                              name={element.name}
                              placeholder={element.name == 'title' ? element.helpingtext : element.placeholder}
                              onChange={(e) => {
                                const uploadedFile = e.target.files[0];
                                if (element.name == "user_image") {
                                  setProfilePhoto(uploadedFile);
                                }
                                if (element.name == "thumbnail_image") {
                                  setThumbnailPhoto(uploadedFile)
                                }
                              }}
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
                      )
                    }

                    if (element.type == "textarea") {
                      return <div className="" key={index}>
                        <h4 className="text-blue-600 mb-2">
                          {element.placeholder}{" "}
                          <span className="text-red-500">*</span>
                        </h4>

                        <Field
                        
                        as="textarea"
                          name={element.name}
                          onChange={(e) => {
                            setFieldValue("desc", e.target.value);
                          }} 
                          defaultValue={defaultValue[element.name]}
                          placeholder={element.name == 'title' ? element.helpingtext : element.placeholder}
                          required
                          className={" w-full py-2 peer px-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-600 h-[6rem]"}
                        />
                        <ErrorMessage
                          name={element.name}
                          component="div"
                          className="text-red-500"
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
                      )
                    }

                    if (element.type == "dynamic") {
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
                              options={element.name == "sub_categoery" ? filterSubCategoeryOpt?.map(
                                (subcatel, index) => {
                                  return {
                                    value: subcatel.id,
                                    label: subcatel.sub_category_name,
                                  };
                                }
                              ) : userDetails?.available_categoery?.map(
                                (skillElement, index) => {
                                  return {
                                    value: skillElement.id,
                                    label: skillElement.job_category,
                                  };
                                }
                              )}
                              onChange={(selectedOptions) => {
                                if (element.name == "job_categoery") {
                                  let fl = userDetails.available_sub_categoery?.filter((element, index) => {
                                    return element.category == selectedOptions.value
                                  });
                                  setFilterSubCategoeryOpt(fl);
                                  setFieldValue("sub_categoery", "");
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
                      )
                    }
                    return (
                      <div className="" key={index}>
                        <h4 className="text-blue-600 mb-2">
                          {element.placeholder}{" "}
                         {element.required ?  <span className="text-red-500">*</span> : <span className="text-gray-700"> (Optional)</span>}
                        </h4>
                        <div className={"w-full relative col-span-1 "}>
                          {element.icon}
                          <Field
                            type={element.type}
                            name={element.name}
                            placeholder={element.name == 'title' ? element.helpingtext : element.placeholder}
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
                      "Update Profile"
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

export default InternJobProfileUpdate
