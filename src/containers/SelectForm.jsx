import React from 'react'
import { useField } from "formik";

const InputSelectArea = ({label, ...props}) => {
  const [field, meta] = useField(props);
  return (
    <div className='flex flex-col'>
      <label className='text-darkRoseBrown mt-2'>{label}</label>
      <select
        {...field}
        {...props}
        className={`bg-black focus:bg-oddBgColor bg-opacity-0 p-1 rounded-md border-solid border-lightRoseBrown border-2 ${meta.touched && meta.error ? "border-rose-600" : ""}`}
      />
      {meta.touched && meta.error && <div className="text-rose-600 font-[12px]">{meta.error}</div>}
    </div>
  );
}

export default InputSelectArea