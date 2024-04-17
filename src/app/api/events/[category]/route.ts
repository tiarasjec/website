export async function GET() {
  const eventsList = [
    {
      events: [
        {
          name: "TechExpo1",
          description: "Showcasing latest tech innovations",
          rules: "tttt",
          prerequisites: "ppp",
          thumbnail: "/techexpo-thumbnail.jpg",
          startTime: "2024-05-10 09:00",
          endTime: "2024-05-10 17:00",
          facultyCoordinators: [
            {
              name: "John Doe",
              phone: "+1234567890",
            },
          ],
          studentCoordinators: [
            {
              name: "Jane Smith",
              phone: "+9876543210",
            },
          ],
        },
        {
          name: "TechExpo2",
          description: "Showcasing latest tech innovations",
          rules: "tttt",
          prerequisites: "ppp",
          thumbnail: "/techexpo-thumbnail.jpg",
          startTime: "2024-05-10 09:00",
          endTime: "2024-05-10 17:00",
          facultyCoordinators: [
            {
              name: "John Doe",
              phone: "+1234567890",
            },
          ],
          studentCoordinators: [
            {
              name: "Jane Smith",
              phone: "+9876543210",
            },
          ],
        },
        {
          name: "TechExpo3",
          description: "Showcasing latest tech innovations",
          rules: "tttt",
          prerequisites: "ppp",
          thumbnail: "/techexpo-thumbnail.jpg",
          startTime: "2024-05-10 09:00",
          endTime: "2024-05-10 17:00",
          facultyCoordinators: [
            {
              name: "John Doe",
              phone: "+1234567890",
            },
          ],
          studentCoordinators: [
            {
              name: "Jane Smith",
              phone: "+9876543210",
            },
          ],
        }
      ]
    }
  ];

  const mappedCategories = eventsList.map(({ events }) => {
    return {
      events,
    };
  });

  return Response.json(mappedCategories);
}
