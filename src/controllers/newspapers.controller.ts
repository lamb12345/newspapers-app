import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import awsHelpers from "../helpers/aws.helpers";

const prisma = new PrismaClient();

export const GET = async (_: Request, res: Response) => {
  const newspapers = await prisma.newsPaper.findMany({
    select: {
      id: true,
      link: true,
      abstract: true,
      creationDate: true,
      title: true,
      publisher: {
        select: {
          id: true,
          names: true,
          joinedDate: true,
        },
      },
    },
  });
  return res.status(200).json({ message: "all news papers", newspapers });
};

export const GET_ONE = async (_: Request, res: Response) => {
  return res.status(200).json({ message: "GET ONE NEWS PAPER" });
};

export const POST = async (req: Request, res: Response) => {
  return res.status(201).json({ message: "CREATE A NEWSPAPER" });
};

export const PUT = async (req: Request, res: Response) => {
  return res.status(200).json({ message: "UPDATE A NEWSPAPER" });
};

export const DELETE = async (req: Request, res: Response) => {
  return res.status(201).json({ message: "DELETE A NEWSPAPER" });
};
