import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Publisher {
  names: string;
  joinedDate: Date;
}

//get publishers
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

//get publisher
export const GET_ONE = async (req: Request, res: Response) => {
  const { id } = req.params;
  const publisher = await prisma.publisher.findUnique({
    where: {
      id: +id,
    },
    select: {
      names: true,
      joinedDate: true,
      newsPapers: {
        select: {
          id: true,
          link: true,
          abstract: true,
          creationDate: true,
          title: true,
        },
      },
    },
  });
  return publisher
    ? res.status(200).json({ publisher })
    : res.status(404).json({ message: "publisher not found" });
};

//create publisher
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
