import express from "express";
import PhonesController from "../controllers/phones.js"; // Import the PhonesController

const router = express.Router();

router.get("/", PhonesController.getPhones); // Update route to get phones
router.get("/:phoneId", PhonesController.getPhoneById); // Update route to get phone by ID

router.post("/", PhonesController.createPhone); // Update route to create a phone
router.delete("/:id", PhonesController.deletePhone); // Update route to delete a phone
router.patch("/:id", PhonesController.updatePhone); // Update route to update a phone

export default router;
