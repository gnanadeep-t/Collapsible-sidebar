import React from "react";
import { Checkbox } from "@/components/ui/checkbox"

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
          htmlFor="gender"
          className="block text-sm font-medium text-gray-700"
        >
          Gender
        </label>
        <select
          id="gender"
          name="gender"
          className="mt-1 p-2 w-full border rounded-md bg-customFormField"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="flex items-center space-x-2">
      <Checkbox id="terms" className="text-primary" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>

    </div>
  );
};

export default Form;
