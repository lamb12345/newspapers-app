import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Publisher {
  names: string;
  joinedDate: Date;
}

export const GET = async (_: Request, res: Response) => {
  const publishers = await prisma.publisher.findMany({
    select: {
      id: true,
      names: true,
      joinedDate: true,
      _count: {
        select: {
          newsPapers: true,
        },
      },
    },
  });
  return res.status(200).json({ message: "all publishers", publishers });
};

export const POST = async (req: Request, res: Response) => {
  const { names, joinedDate }: Publisher = req.body;
  const newPublisher = await prisma.publisher.create({
    data: {
      names: names,
      joinedDate: new Date(joinedDate),
    },
  });
  return res
    .status(201)
    .json({ message: "new publisher saved successfully", newPublisher });
};
