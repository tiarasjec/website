export async function GET() {
    const eventsList = [
      {
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
  
    const mappedEvents = eventsList.map(({event}) => {
      return {
       event
      };
    });
  
    return Response.json(mappedEvents);
  }
  