import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { type FormProps } from "@/utils";

type FormInputProps = FormProps & { type: string };

// type FormInputProps = {
//   label?: string;
//   defaultValue?: string;
//   name: string;
//   type: string;
// };

function FormInput({ label, defaultValue, name, type }: FormInputProps) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Input id={name} name={name} type={type} defaultValue={defaultValue} />
    </div>
  );
}
export default FormInput;
