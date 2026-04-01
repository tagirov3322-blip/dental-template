import { Router, Request, Response } from "express";
import prisma from "../prismaClient";
import { requireAdmin } from "../middleware/auth";
import { validate } from "../middleware/validate";
import { createDoctorSchema, updateDoctorSchema } from "../lib/validators";
import { sanitizeObject } from "../lib/sanitize";

const router = Router();

// GET /api/doctors — публичный
router.get("/", async (req: Request, res: Response) => {
  const { active } = req.query;
  const where = active === "false" ? {} : { isActive: true };

  const doctors = await prisma.doctor.findMany({
    where,
    orderBy: { name: "asc" },
  });
  res.json(doctors);
});

// GET /api/doctors/:id — публичный
router.get("/:id", async (req: Request, res: Response): Promise<void> => {
  const doctor = await prisma.doctor.findUnique({
    where: { id: Number(req.params.id) },
  });
  if (!doctor) {
    res.status(404).json({ error: "Врач не найден" });
    return;
  }
  res.json(doctor);
});

// POST /api/doctors — admin
router.post("/", requireAdmin, validate(createDoctorSchema), async (req: Request, res: Response) => {
  const data = sanitizeObject(req.body);
  const doctor = await prisma.doctor.create({ data });
  res.status(201).json(doctor);
});

// PUT /api/doctors/:id — admin
router.put("/:id", requireAdmin, validate(updateDoctorSchema), async (req: Request, res: Response) => {
  const data = sanitizeObject(req.body);
  const doctor = await prisma.doctor.update({
    where: { id: Number(req.params.id) },
    data,
  });
  res.json(doctor);
});

// DELETE /api/doctors/:id — admin
router.delete("/:id", requireAdmin, async (req: Request, res: Response) => {
  await prisma.doctor.delete({ where: { id: Number(req.params.id) } });
  res.json({ message: "Врач удалён" });
});

export default router;
