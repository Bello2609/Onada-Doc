// import React from "react";
import { PhoneInput, CountrySelector } from 'react-international-phone';
import 'react-international-phone/style.css';
type FormNumber = {
    label: string,
    value: string,
    onChange: ()=> void
}
const FormNumber = ({ label, value, onChange }: FormNumber)=>{
    // const [value, setValue] = useState()
    return(
        <>
            <div className="flex flex-col gap-5 w-full mt-3 mb-7">
                <div className="flex">
                <label className="font-medium text-[#252524] mb-[-10px]">{label}</label>
                </div>
                {/* <div className="flex border-solid rounded-lg border border-[#DFDFDF]  h-11 w-full p-2"> */}
                    <PhoneInput
                        // inputStyle={{
                        //     outline: "none",
                        //     border: "none",
                        //     height: "100%",
                        //     width: "100%"
                        // }}
                        inputClassName='!w-full !h-[44px]'
                        className='!w-[400px] !h-[44px] !rounded-lg'
                        value={value}
                        defaultCountry={"ng"}
                        onChange={onChange}
                        countrySelectorStyleProps={{
                            buttonClassName: "!h-[44px]"
                        }}
                        />
                {/* </div> */}
            </div>
         </>
    );
   
  
}
export default FormNumber;
