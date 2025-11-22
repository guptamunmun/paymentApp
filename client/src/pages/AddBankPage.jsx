import React from "react";
import { Card, CardBody, Label, Input, Button } from "@windmill/react-ui";

export default function AddBankPage() {
  return (
    <div className="flex justify-center mt-20">
      <Card className="w-full max-w-sm">
        <CardBody>
          <h1 className="text-xl font-semibold mb-4">Add Bank Details</h1>

          <Label>
            <span>Account Holder Name</span>
            <Input className="mt-1 mb-3" placeholder="Enter full name" />
          </Label>

          <Label>
            <span>Account Number</span>
            <Input className="mt-1 mb-3" placeholder="Enter account number" />
          </Label>

          <Label>
            <span>IFSC Code</span>
            <Input className="mt-1 mb-3" placeholder="Enter IFSC" />
          </Label>

          <Button className="w-full mt-4">Save Details</Button>
        </CardBody>
      </Card>
    </div>
  );
}
