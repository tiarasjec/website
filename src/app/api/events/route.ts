export async function GET() {
  const categoriesList = [
    {
      category: "Technical",
      events: [
        {
          name: "",
          description: "",
          rules: [],
          prerequisites: [],
          thumbnail: "",
          startTime: "",
          endTime: "",
          facultyCoordinators: [
            {
              name: "",
              phone: "",
            },
          ],
          studentCoordinators: [
            {
              name: "",
              phone: "",
            },
          ],
        },
      ],
    },
    {
      category: "Non-Technical",
      events: [
        {
          name: "",
          description: "",
          rules: [],
          prerequisites: [],
          thumbnail: "",
          startTime: "",
          endTime: "",
          facultyCoordinators: [
            {
              name: "",
              phone: "",
            },
          ],
          studentCoordinators: [
            {
              name: "",
              phone: "",
            },
          ],
        },
      ],
    },
    {
      category: "Cultural",
      events: [
        {
          name: "",
          description: "",
          rules: [],
          prerequisites: [],
          thumbnail: "",
          startTime: "",
          endTime: "",
          facultyCoordinators: [
            {
              name: "",
              phone: "",
            },
          ],
          studentCoordinators: [
            {
              name: "",
              phone: "",
            },
          ],
        },
      ],
    },
    {
      category: "Mega",
      event: [
        {
          name: "",
          description: "",
          rules: [],
          prerequisites: [],
          thumbnail: "",
          startTime: "",
          endTime: "",
          facultyCoordinators: [
            {
              name: "",
              phone: "",
            },
          ],
          studentCoordinators: [
            {
              name: "",
              phone: "",
            },
          ],
        },
      ],
    },
  ];

  const mappedCategories = categoriesList.map(({category}) => {
    return {
     category
    };
  });

  return Response.json(mappedCategories);
}
