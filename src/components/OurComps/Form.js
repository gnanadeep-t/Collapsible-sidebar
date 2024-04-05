"use client";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
const Form = () => {
  return (
    <div className="p-4">
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="mt-1 p-2 w-full border rounded-md bg-customFormField"
          placeholder="Enter your name"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description (Optional)
        </label>
        <textarea
          id="description"
          name="description"
          rows="3"
          className="mt-1 p-2 w-full border rounded-md bg-customFormField"
          placeholder="Enter a description (optional)"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 p-2 w-full border rounded-md bg-customFormField"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-4">
        <div className="flex items-center space-x-2">
          <Label htmlFor="airplane-mode">Toggle</Label>
          <Switch id="airplane-mode"/>
        </div>
      </div>

      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="mt-1 p-2 w-full border rounded-md bg-customFormField"
          placeholder="Enter your password"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Menu
        </label>
        <Select>
          <SelectTrigger className="w-[180px] bg-customFormField">
            <SelectValue placeholder="Select Menu" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Menu</SelectLabel>
              <SelectItem value="Menu1">Menu1</SelectItem>
              <SelectItem value="Menu2">Menu2</SelectItem>
              <SelectItem value="Menu2">Menu2</SelectItem>
              <SelectItem value="Menu4">Menu4</SelectItem>
              <SelectItem value="Menu5">Menu5</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium  leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>
      </div>
    </div>
  );
};

export default Form;
