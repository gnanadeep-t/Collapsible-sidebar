import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TasksSection = () => {
  return (
    <div className="w-3/5 p-8 bg-customGrayCard border-2 m-6 flex justify-center items-center rounded-md">
      <Table className=" w-full box-border border-customBorder overflow-scroll">
        <TableCaption className="text-xl text-left mb-6 text-customFontHeading">
          Tasks
        </TableCaption>
        <TableHeader className="bg-muted text-customFontHeading">
          <TableRow className="p-3">
            <TableHead className="text-center">Name</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-center">Starts</TableHead>
            <TableHead className="text-center">Priority</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-customFont">
          <TableRow className="hover:bg-muted border-b-customBorder border-b-2">
            <TableCell className="text-center ">INV001</TableCell>
            <TableCell className="text-center">Paid</TableCell>
            <TableCell className="text-center">Credit Card</TableCell>
            <TableCell className="text-center">$250.00</TableCell>
          </TableRow>
          <TableRow className="hover:bg-muted border-b-customBorder border-b-2">
            <TableCell className="text-center">INV001</TableCell>
            <TableCell className="text-center">Paid</TableCell>
            <TableCell className="text-center">Credit Card</TableCell>
            <TableCell className="text-center">$250.00</TableCell>
          </TableRow>
          <TableRow className="hover:bg-muted border-b-customBorder border-b-2">
            <TableCell className="text-center">INV001</TableCell>
            <TableCell className="text-center">Paid</TableCell>
            <TableCell className="text-center">Credit Card</TableCell>
            <TableCell className="text-center">$250.00</TableCell>
          </TableRow>
          <TableRow className="hover:bg-muted border-b-customBorder border-b-2">
            <TableCell className="text-center">INV001</TableCell>
            <TableCell className="text-center">Paid</TableCell>
            <TableCell className="text-center">Credit Card</TableCell>
            <TableCell className="text-center">$250.00</TableCell>
          </TableRow>
          
        </TableBody>
      </Table>
    </div>
  );
};

export default TasksSection;
