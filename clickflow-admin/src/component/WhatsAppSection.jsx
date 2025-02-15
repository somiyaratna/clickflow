import React, { useEffect } from "react";
import { useState } from "react";
import { Edit2 } from "lucide-react";
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import fetchWhatsappNumber from "../api/fetchWhatsappNumber";
import editWhatsappNumber from "../api/editWhatsappNumber";
import { toast } from "react-toastify";

export default function WhatsAppSection() {
  const [whatsappNumber, setWhatsappNumber] = useState("+1234567890") // Replace with actual WhatsApp number
  const [isEditing, setIsEditing] = useState(false)
  const [tempNumber, setTempNumber] = useState(whatsappNumber);
  const [numberDetails, setNumberDetails] = useState({});

  const handleEdit = () => {
    setIsEditing(true)
    setTempNumber(whatsappNumber)
  }

  const fetchNumber = async()=>{
    try{
      const number = await fetchWhatsappNumber();
      setNumberDetails(number);
      setWhatsappNumber(number.whatsappNumber);
    }catch(error){
      console.log(error.message)
    }
  }

  useEffect(()=>{
    fetchNumber()
  },[])

  const handleSave = async() => {
    try{
      const editNumber = await editWhatsappNumber(numberDetails?._id, tempNumber)
      if(editNumber?.message === "WhatsApp number updated successfully"){
        setWhatsappNumber(tempNumber)
        fetchNumber()
        toast.success(editNumber.message);
      }
    }catch(error){
      toast.error("Erorr in Updating Whatsapp Number.")
      console.error(error.message)
    }finally{
      setIsEditing(false)
    }
  }

  const handleCancel = () => {
    setIsEditing(false)
    setTempNumber(whatsappNumber)
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg p-4 sm:p-6">
      <h2 className="text-2xl font-semibold mb-4">WhatsApp Contact</h2>
      {isEditing ? (
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
          <div className="flex-grow mb-4 sm:mb-0">
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
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="mb-4 sm:mb-0">
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
  )
}