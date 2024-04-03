import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Label } from "./ui/label";

import { type FormProps } from "@/utils";

type FormSelectProps = FormProps & { options: string[] };

// type SelectInputProps = {
//   name: string;
//   label?: string;
//   defaultValue?: string;
//   options: string[];
// };

function FormSelect({ name, label, defaultValue, options }: FormSelectProps) {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {label || name}
      </Label>
      <Select defaultValue={defaultValue || options[0]} name={name}>
        <SelectTrigger id={name}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {options.map((item) => {
            return (
              <SelectItem key={item} value={item}>
                {item}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}
export default FormSelect;
