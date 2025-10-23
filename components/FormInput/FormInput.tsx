// import React from "react";
"use client";
type FormInput = {
    label: string,
    type: string,
    name: string,
    placeholder: string,
    onChange: ()=> void,
    value: string
}
const FormInput = ({
   label,
   type,
   name,
   placeholder,
   onChange,
   value,
}: FormInput) => {
   return (
      <div className="flex flex-col gap-4 mb-7 w-full sm:w-full font-sans ">
         <div className="flex flex-auto">
            <label className="font-medium text-[#252524] mb-[-10px]">{label}</label>
         </div>
         <div className="flex-auto border-solid border border-[#CCCCCC] rounded-lg px-2 h-11">
            <input
               className="w-[100%] sm:w-fit text-[10px] h-full border-0 outline-0"
               placeholder={placeholder}
               type={type}
               name={name}
               onChange={onChange}
               value={value}
            />
         </div>

      </div>
   );
};

export default FormInput;
