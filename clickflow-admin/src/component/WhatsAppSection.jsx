import React from "react";
import { useState } from "react";
import { Edit2 } from "lucide-react";
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

export default function WhatsAppSection() {
  const [whatsappNumber, setWhatsappNumber] = useState("+1234567890"); // Replace with actual WhatsApp number
  const [isEditing, setIsEditing] = useState(false);
  const [tempNumber, setTempNumber] = useState(whatsappNumber);

  const handleEdit = () => {
    setIsEditing(true);
    setTempNumber(whatsappNumber);
  };

  const handleSave = () => {
    // Here you would typically make an API call to update the number
    setWhatsappNumber(tempNumber);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setTempNumber(whatsappNumber);
  };

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">WhatsApp Contact</h2>
      {isEditing ? (
        <div className="flex items-center space-x-4">
          <div className="flex-grow">
            <Label htmlFor="whatsapp-number">WhatsApp Number</Label>
            <Input
              id="whatsapp-number"
              value={tempNumber}
              onChange={(e) => setTempNumber(e.target.value)}
              placeholder="Enter WhatsApp number"
            />
          </div>
          <div className="flex space-x-2">
            <Button onClick={handleSave}>Save</Button>
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <div>
            <Label>Current WhatsApp Number</Label>
            <p className="text-lg font-medium">{whatsappNumber}</p>
          </div>
          <Button onClick={handleEdit} variant="outline">
            <Edit2 className="h-4 w-4 mr-2" />
            Edit
          </Button>
        </div>
      )}
    </div>
  );
}