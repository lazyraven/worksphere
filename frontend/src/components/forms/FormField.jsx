function FormField({
id,
name,
label,
type= 'text',
value,
onChange,
placeholder,
disabled = false,
required = false
}){
    return(
        <div className="form-field">
            <label htmlFor="{id}">{label}</label>
            <input 
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}  
            disabled= {disabled}
            required = {required}
            />
            
        </div>
    )
}

export default FormField;