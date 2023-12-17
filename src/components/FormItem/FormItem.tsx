import React, { ReactNode, useState } from "react";
import { Label, TextInput } from "flowbite-react";

interface FormItemProps {
  name: string;
  label?: string;
  defaultValue?: string;
  children?: ReactNode;
  readOnly?: boolean;
  required?: boolean;
  placeholder?: string;
}

const FormItem: React.FC<FormItemProps> = ({
  defaultValue,
  label,
  name,
  children,
  readOnly,
  required,
  placeholder
}) => {
  const [item, setItem] = useState<string>(defaultValue || "");

  return (
    <div className="mb-2 block">
      {label && <Label htmlFor={name}>{label}</Label>}
      {children || (
        <TextInput
          id={name}
          type="text"
          name={name}
          value={item}
          onChange={(e) => setItem(e.target.value)}
          readOnly={readOnly}
          required={required}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

FormItem.defaultProps = {
  defaultValue: "",
  label: "",
  children: undefined,
  readOnly: false,
  required: false,
  placeholder: ""
};

export default FormItem;
