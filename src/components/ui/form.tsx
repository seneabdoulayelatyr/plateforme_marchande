import * as React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "./input";
import { Label } from "./label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PhoneInput, { type Country } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Checkbox } from "@/components/ui/checkbox";

interface FormFieldProps {
  name: string;
  label?: string;
  type?: string;
  placeholder?: string;
  className?: string;
}

export function FormField({
  name,
  label,
  type = "text",
  placeholder,
  className,
}: FormFieldProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Input
          {...field}
          id={field.name}
          type={type}
          label={label}
          className={className}
          placeholder={placeholder}
          error={error}
          value={field.value || ""}
        />
      )}
    />
  );
}

interface PhoneFieldProps {
  name: string;
  label: string;
  defaultCountry?: Country;
}

export function PhoneField({
  name,
  label,
  defaultCountry = "SN" as Country,
}: PhoneFieldProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;

  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <PhoneInput
            defaultCountry={defaultCountry}
            value={value || ""}
            onChange={(val) => onChange(val || "")}
            international
            className="flex gap-2"
            countrySelectProps={{
              className: "border border-input rounded-md bg-gray-100 px-2",
            }}
            numberInputProps={{
              className:
                "flex-1 h-9 w-full rounded-md border border-input bg-gray-100 px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            }}
          />
        )}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

interface SelectFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  options: { value: string; label: string }[];
  className?: string;
}

export function SelectField({
  name,
  label,
  placeholder = "Sélectionnez une option",
  options,
  className,
}: SelectFieldProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;

  return (
    <div className="space-y-2 w-full">
      <Label htmlFor={name}>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className={`bg-gray-100 w-full ${className || ""}`}>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

interface checkboxFieldProps {
  name: string;
  label: string;
}

export function CheckboxField({ name, label }: checkboxFieldProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const error = errors[name]?.message as string | undefined;
  return (
    <div className="space-y-2 w-full">
      <Label htmlFor={name}>{label}</Label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Checkbox
            id={name}
            checked={field.value}
            onCheckedChange={field.onChange}
          />
        )}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
