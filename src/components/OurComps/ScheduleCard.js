import React from "react";
import { DatePickerWithPresets } from "./DatePickerWithPresets";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ScheduleCard = () => {
  let scheduleData = [
    {
      name: "Meeting 1",
      from: "10:00 AM",
      to: "11:00 AM",
    },
    {
      name: "Meeting 2",
      from: "02:00 PM",
      to: "03:00 PM",
    },
    {
      name: "Meeting 3",
      from: "03:30 PM",
      to: "04:30 PM",
    },
    // Add more objects as needed
  ];
  return (
    <div className="w-2/5 p-3 bg-customGrayCard border-2 rounded-md">
      <DatePickerWithPresets />
      <Table>
        <TableBody lassName="text-customFont">
          {scheduleData.map((item) => (
            <TableRow
              key={item.name}
              className="hover:bg-muted border-b-customBorder border-b-2"
            >
              <TableCell className="font-medium">
                Meeting with {item.name}
              </TableCell>
              <TableCell>
                <div>{item.from}</div>
                {/* <div className="text-center">to</div> */}
                <div>{item.to}</div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ScheduleCard;
