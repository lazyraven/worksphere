function FormField({
    id,
    name,
    label,
    type = 'text',
    value,
    onChange,
    placeholder,
    disabled = false,
    required = false,
    error = ''
}) {
    return (
        <div className="form-field">
            <label htmlFor="{id}">{label}
                {required && <span>*</span>}
            </label>
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                required={required}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? `${id}-error` : undefined}
            />
            {error && (
                <p id={`${id}-error`}>
                    {error}
                </p>
            )}
        </div>
    )
}

export default FormField;