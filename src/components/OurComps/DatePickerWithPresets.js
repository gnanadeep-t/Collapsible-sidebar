"use client";

import React, { useState } from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  PlusIcon
 } from "@heroicons/react/24/outline";
export function DatePickerWithPresets() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="flex">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            // className={cn(
            //   " justify-start text-left font-normal bg-customGrayCard",
            //   !date && ""
            // )}
          >
            <CalendarIcon className=" h-4 w-4 text-primary" />
            {/* <Input type="text" className="bg-customGrayCard w-full text-primary" placeholder="Pick a date" /> */}
            {/* <span className="bg-customGrayCard">Pick a date</span> */}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="flex w-[280px] flex-col space-y-2 p-2 bg-customGrayBackground rounded-lg border border-white-100">
          <Select
            onValueChange={(value) =>
              setDate(addDays(new Date(), parseInt(value)))
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="0">Today</SelectItem>
              <SelectItem value="1">Tomorrow</SelectItem>
              <SelectItem value="3">In 3 days</SelectItem>
              <SelectItem value="7">In a week</SelectItem>
            </SelectContent>
          </Select>
          <div className="rounded-md border flex w-full">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md w-full flex gap-3"
            />
          </div>
        </PopoverContent>
      </Popover>
      <Input
        type="text"
        className="bg-customGrayCard w-full text-primary outline-none"
        placeholder="Schedule meeting"
      />
      <Button variant={"outline"}><PlusIcon className="w-4 h-4"/></Button>
    </div>
  );
}
