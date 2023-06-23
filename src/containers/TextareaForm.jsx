import React from 'react'
import { useField } from "formik";

const InputTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(meta)
  return (
    <div className='flex flex-col'>
      <label className='text-darkRoseBrown mt-2'>{label}</label>
      <textarea
        rows="3"
        {...field}
        {...props}
        className={`bg-black focus:bg-oddBgColor bg-opacity-0 p-1 rounded-md border-solid border-lightRoseBrown border-2 ${meta.touched && meta.error ? "border-rose-600" : ""}`}
      />
      {meta.touched && meta.error && <div className="text-rose-600 font-[12px]">{meta.error}</div>}
    </div>
  );
}

export default InputTextArea