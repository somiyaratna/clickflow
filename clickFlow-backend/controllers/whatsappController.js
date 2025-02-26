const WhatsappNumber = require("../models/whatsappNumberModal");
const express = require("express");
const router = express.Router();

async function addWhatsappNumber(req, res) {
  try {
    const { whatsappNumber: number } = req.body;

    if (!number) {
      return res.status(400).json({ message: "WhatsApp number is required" });
    }

    const newWhatsappNumber = new WhatsappNumber({ whatsappNumber: number });
    await newWhatsappNumber.save();

    res.status(201).json({ message: "WhatsApp number added successfully", newWhatsappNumber });
  } catch (error) {
    console.error("Error adding WhatsApp number:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function editWhatsappNumber(req, res) {
  const { id } = req.params;
  const { whatsappNumber: number } = req.body;

  try {
    if (!number) {
      return res.status(400).json({ message: "WhatsApp number is required" });
    }

    const updatedWhatsappNumber = await WhatsappNumber.findByIdAndUpdate(
      {_id: id},
      { whatsappNumber: number } // Return the updated document
    );

    if (!updatedWhatsappNumber) {
      return res.status(404).json({ message: "WhatsApp number not found" });
    }

    res.status(200).json({ message: "WhatsApp number updated successfully", updatedWhatsappNumber });
  } catch (error) {
    console.error("Error updating WhatsApp number:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function fetchWhatsappNumbers(req, res) {
  try {
    const whatsappNumbers = await WhatsappNumber.findOne({});
    res.status(200).json(whatsappNumbers);
  } catch (error) {
    console.error("Error fetching WhatsApp numbers:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}


module.exports = {addWhatsappNumber, editWhatsappNumber, fetchWhatsappNumbers}
