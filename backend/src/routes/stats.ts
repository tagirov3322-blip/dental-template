import { Router, Request, Response } from "express";
import prisma from "../prismaClient";
import { requireAdmin } from "../middleware/auth";

const router = Router();

// GET /api/stats — admin
router.get("/", requireAdmin, async (_req: Request, res: Response) => {
  const [totalBookings, newBookings, completedBookings, cancelledBookings] = await Promise.all([
    prisma.booking.count(),
    prisma.booking.count({ where: { status: "new" } }),
    prisma.booking.count({ where: { status: "completed" } }),
    prisma.booking.count({ where: { status: "cancelled" } }),
  ]);

  const popularServices = await prisma.booking.groupBy({
    by: ["serviceId"],
    _count: { serviceId: true },
    orderBy: { _count: { serviceId: "desc" } },
    take: 5,
  });

  res.json({
    totalBookings,
    newBookings,
    completedBookings,
    cancelledBookings,
    popularServices,
  });
});

export default router;
