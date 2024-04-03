import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import { type FormProps } from "@/utils";

function FormCheckbox({ name, label, defaultValue }: FormProps) {
  const defaultChecked = defaultValue === "on" ? true : false;

  return (
    <div className="mb-2 flex justify-between self-end">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Checkbox id={name} name={name} defaultChecked={defaultChecked} />
    </div>
  );
}
export default FormCheckbox;