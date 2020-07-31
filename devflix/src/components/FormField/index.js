import React from "react";

function FormField({ placeholder, label, value, name, onChange, type }) {
    if (type === 'textarea') {
        return(
            <div>
                <label>
                    {label} : 
                </label><br></br>
                <textarea
                    autoComplete="off"
                    placeholder={placeholder}
                    value={value}
                    name={name}
                    onChange={onChange}
                >
                </textarea>
            </div>
        )
    } else {
        return (

            <div>
                <label>
                    {label} : <br></br>
                <input
                        autoComplete="off"
                        placeholder={placeholder}
                        type={type}
                        value={value}
                        name={name}
                        onChange={onChange}
                    />
                </label>
            </div>
        )
    }
}

export default FormField;