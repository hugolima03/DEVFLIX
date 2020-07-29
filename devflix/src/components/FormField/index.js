import React from "react";

function FormField({ placeholder, label, value, name, onChange, type}) {
    return (

        <div>
            <label>
                {label} : 
                <input
                    autocomplete="off"
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

export default FormField;