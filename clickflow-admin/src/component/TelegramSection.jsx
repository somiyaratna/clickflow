import React, { useEffect } from "react";
import { useState } from "react";
import { Edit2 } from "lucide-react";
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import fetchWhatsappNumber from "../api/fetchWhatsappNumber";
import editTelegramUsername from "../api/editTelegamUsername";
import { toast, ToastContainer } from "react-toastify";

export default function TelegramSection() {
  const [telegramNumber, setTelegramNumber] = useState("") // Replace with actual Telegram number
  const [isEditing, setIsEditing] = useState(false)
  const [tempNumber, setTempNumber] = useState(telegramNumber);
  const [numberDetails, setNumberDetails] = useState({});

  const handleEdit = () => {
    setIsEditing(true)
    setTempNumber(telegramNumber)
  }

  const fetchNumber = async()=>{
    try{
      const number = await fetchWhatsappNumber();
      setNumberDetails(number.telegramNumbers);
      setTelegramNumber(number.telegramNumbers.telegramNumber);
    }catch(error){
      console.log(error.message)
    }
  }

  useEffect(()=>{
    fetchNumber()
  },[])

  const handleSave = async() => {
    try{
        console.log("first")
      const editNumber = await editTelegramUsername(numberDetails?._id, tempNumber)
      if(editNumber?.message === "Telegram number updated successfully"){
        setTelegramNumber(tempNumber)
        fetchNumber()
        toast.success(editNumber.message);
      }
    }catch(error){
      toast.error("Error in Updating Telegram Number.")
      console.error(error.message)
    }finally{
      setIsEditing(false)
    }
  }

  const handleCancel = () => {
    setIsEditing(false)
    setTempNumber(telegramNumber)
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg p-4 sm:p-6">
      <h2 className="text-2xl font-semibold mb-4">Telegram Contact</h2>
      {isEditing ? (
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
          <div className="flex-grow mb-4 sm:mb-0">
            <Label htmlFor="whatsapp-number">Telegram Username</Label>
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
            <Label>Current Telegram Username</Label>
            <p className="text-lg font-medium">{telegramNumber}</p>
          </div>
          <Button onClick={handleEdit} variant="outline">
            <Edit2 className="h-4 w-4 mr-2" />
            Edit
          </Button>
        </div>
      )}
      <ToastContainer/>
    </div>
  )
}