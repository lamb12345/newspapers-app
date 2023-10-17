import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import awsHelpers from "../helpers/aws.helpers";

const prisma = new PrismaClient();

enum Language {
  ENG,
  ES,
  FR,
}

interface NewsPaper {
  link: string;
  abstract: string;
  creationDate: Date;
  title: string;
  publisherId: number;
  languages: Language[];
}

// get all news papers
export const GET = async (_: Request, res: Response) => {
  const newspapers = await prisma.newsPaper.findMany({
    select: {
      id: true,
      image: true,
      creationDate: true,
      title: true,
      publisher: {
        select: {
          names: true,
        },
      },
    },
  });
  return res.status(200).json({ message: "all news papers", newspapers });
};

// get a newspaper
export const GET_ONE = async (req: Request, res: Response) => {
  const { id } = req.params;
  const newsPaper = await prisma.newsPaper.findUnique({
    where: {
      id: +id,
    },
    select: {
      id: true,
      image: true,
      creationDate: true,
      title: true,
      abstract: true,
      link: true,
      publisher: {
        select: {
          id: true,
          names: true,
        },
      },
    },
  });

  return newsPaper
    ? res.status(200).json({ newsPaper })
    : res.status(404).json({ message: "news paper not found" });
};

// create news paper
export const POST = async (req: Request, res: Response) => {
  const {
    abstract,
    creationDate,
    link,
    languages,
    publisherId,
    title,
  }: NewsPaper = req.body;

  const file = req?.files?.file as {
    name: string;
    data: Buffer;
    mimetype: string;
  };

  const image = await awsHelpers.uploadFile(file);
  const newNewsPaper = await prisma.newsPaper.create({
    data: {
      abstract,
      creationDate: new Date(creationDate),
      image,
      link,
      title,
      publisherId: +publisherId,
    },
  });
  return res
    .status(201)
    .json({ message: "newspaper saved successfully", newNewsPaper });
};

//update a newspaper
export const PUT = async (req: Request, res: Response) => {
  return res.status(200).json({ message: "UPDATE A NEWSPAPER" });
};

// delete a news paper
export const DELETE = async (req: Request, res: Response) => {
  const { id } = req.params;
  const newsPaper = await prisma.newsPaper.findUnique({
    where: {
      id: +id,
    },
    select: {
      image: true,
    },
  });

  const image = newsPaper?.image;
  try {
    await prisma.$transaction(async (prismaClient) => {
      await awsHelpers.deleteFile(image as string);
      await prismaClient.newsPaper.delete({
        where: {
          id: +id,
        },
      });
    });

    return res.status(200).json({ message: "News paper deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Please try again... an error occurred" });
  } finally {
    await prisma.$disconnect();
  }
};
