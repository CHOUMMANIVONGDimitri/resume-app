import React, { ReactNode, useState } from "react";
import { Label, TextInput } from "flowbite-react";

interface FormItemProps {
  name: string;
  label?: string;
  defaultValue?: string;
  children?: ReactNode;
  readOnly?: boolean;
  required?: boolean;
}

const FormItem: React.FC<FormItemProps> = ({
  defaultValue,
  label,
  name,
  children,
  readOnly,
  required
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
  required: false
};

export default FormItem;
