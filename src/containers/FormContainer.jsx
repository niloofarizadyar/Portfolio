import React from "react";
import { Form, Formik } from "formik";
import { schema } from "../schema";
import { InputForm, SelectForm, TextareaForm } from "./../containers";
import axios from "axios";

const date = new Date();
var dateFormat = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();


const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
  //put your own url
  axios.post(
      "https://sheet.best/api/sheets/95fd3cdf-9b74-47e1-a952-816ae00f5b94",
      {
        name: values.name,
        email: values.email,
        type: values.type,
        description: values.description,
        date: dateFormat,
      }
    )
    .then((res) => {
      console.log(res);
    });
};

const FormContainer = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        type: "",
        description: "",
      }}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          <InputForm
            label="Name"
            name="name"
            type="text"
            placeholder="Enter your name"
          />
          <InputForm
            label="Email (optional)"
            name="email"
            type="text"
            placeholder="Enter your Email"
          />
          <SelectForm
            label="Type"
            name="type"
            placeholder="Please select a job"
          >
            <option value="">Please select a job type</option>
            <option value="card">Card Design</option>
            <option value="catalog">Catalog Design</option>
            <option value="video">Video Editing</option>
            <option value="other">Other</option>
          </SelectForm>
          <TextareaForm
            label="Description"
            name="description"
            type="text"
            placeholder="Enter your username"
          />
          <button disabled={isSubmitting} type="submit" className="text-[10px] text-black font-semibold md:text-sm text-center p-2 px-4 mt-2 bg-lightRoseBrown hover:bg-darkRoseBrown transition-colors duration-500 ease-in-out rounded">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormContainer;
