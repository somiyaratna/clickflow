const TelegramNumber = require("../models/telegramNumberModal");
const express = require("express");
const router = express.Router();

async function addTelegramNumber(req, res) {
  try {
    const { telegramNumber: number } = req.body;

    if (!number) {
      return res.status(400).json({ message: "WhatsApp number is required" });
    }

    const newTelegramNumber = new TelegramNumber({ telegramNumber: number });
    await newTelegramNumber.save();

    res.status(201).json({ message: "Telegram number added successfully", newTelegramNumber });
  } catch (error) {
    console.error("Error adding Telegram number:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function editTelegramNumber(req, res) {
  const { id } = req.params;
  const { telegramNumber: number } = req.body;

  try {
    if (!number) {
      return res.status(400).json({ message: "Telegram number is required" });
    }

    const updatedTelegramNumber = await TelegramNumber.findByIdAndUpdate(
      {_id: id},
      { telegramNumber: number } // Return the updated document
    );

    if (!updatedTelegramNumber) {
      return res.status(404).json({ message: "Telegram number not found" });
    }

    res.status(200).json({ message: "Telegram number updated successfully", updatedTelegramNumber });
  } catch (error) {
    console.error("Error updating Telegram number:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = {addTelegramNumber, editTelegramNumber}