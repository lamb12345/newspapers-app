import { Request, Response } from "express";

interface DataInterface {
  endpoint: string;
  parameter: string;
  body: Object;
  description: string;
  method: string;
}

export const GET = (_: Request, res: Response) => {
  const data: DataInterface[] = [
    // publishers
    {
      description: "Get all publishers",
      parameter: "",
      body: {},
      endpoint: "/publishers",
      method: "GET",
    },
    {
      description: "Get one publisher with total number of newspaperd",
      parameter: "id",
      body: {},
      endpoint: "/publishers/:id",
      method: "GET",
    },
    {
      description: "Create a publisher",
      parameter: "",
      body: {
        names: "eric",
        joinedDate: "2022-10-31",
      },
      endpoint: "/publishers",
      method: "POST",
    },
    {
      description: "update a publisher",
      parameter: "id",
      body: {
        names: "eric",
        joinedDate: "2022-10-31",
      },
      endpoint: "/publishers/:id",
      method: "PUT",
    },
    {
      description: "delete a publisher and related newspapers",
      parameter: "id",
      body: {},
      endpoint: "/publishers/:id",
      method: "DELETE",
    },

    // news papers
    {
      description: "Get all newspapers",
      parameter: "",
      body: {},
      endpoint: "/newspapers",
      method: "GET",
    },
    {
      description: "Get one newspaper with its publisher",
      parameter: "id",
      body: {},
      endpoint: "/newspapers/:id",
      method: "GET",
    },
    {
      description: "Create a newspaper",
      parameter: "",
      body: {
        title: "Michigan City dispatch.",
        file: "upload png/jpeg file",
        link: "https://www.britannica.com/place/Michigan",
        abstract:
          "Michigan, constituent state of the United States of America. Although by the size of its land Michigan ranks only 22nd of the 50 states, the inclusion of the Great Lakes waters over which it has jurisdiction increases its area considerably, placing it 11th in terms of total area. The capital is Lansing, in south-central Michigan. The state's name is derived from michi-gama, an Ojibwa (Chippewa) word meaning 'large lake.'",
        publisherId: 1,
        creationDate: "2022-10-21",
      },
      endpoint: "/newspapers",
      method: "POST",
    },

    {
      description: "delete a newspaper",
      parameter: "id",
      body: {},
      endpoint: "/newspapers/:id",
      method: "DELETE",
    },
  ];

  return res.status(200).json({ data });
};
