import { Router } from "express";
import prisma from "../lib/prisma.js";
import { authenticate } from "../middleware/authMiddleware.js";

const router = Router();

// Public - submit inquiry
router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      company,
      projectType,
      budget,
      message,
    } = req.body;

    if (!name || !email || !projectType || !message) {
      return res.status(400).json({
        message: "Please fill all required fields.",
      });
    }

    const inquiry = await prisma.inquiry.create({
      data: {
        name,
        email,
        company,
        projectType,
        budget,
        message,
      },
    });

    res.status(201).json({
      message: "Inquiry submitted successfully!",
      inquiry,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Something went wrong.",
    });
  }
});

// Protected - get all inquiries
router.get("/", authenticate, async (req, res) => {
  try {
    const inquiries = await prisma.inquiry.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(inquiries);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch inquiries.",
    });
  }
});

// Protected - update inquiry status
router.patch("/:id", authenticate, async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { status } = req.body;

    const inquiry = await prisma.inquiry.update({
      where: { id },
      data: { status },
    });

    res.json({
      message: "Inquiry updated successfully.",
      inquiry,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to update inquiry.",
    });
  }
});

export default router;