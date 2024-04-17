export async function GET() {
    const eventsList = [
      {
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
    ];
  
    const mappedEvents = eventsList.map(({events}) => {
      return {
       events
      };
    });
  
    return Response.json(mappedEvents);
  }
  