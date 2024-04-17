export async function GET() {
  const event = 
    {
      id: "1",
      name: "CodeJam",
      description: "A coding competition for enthusiasts",
      rules: ["Rule 1","Rule 2"],
      prerequisites: ["P 1","P 2"],
      thumbnail: "/codejam-thumbnail.jpg",
      startTime: "2024-05-12 10:00",
      endTime: "2024-05-12 18:00",
      facultyCoordinators: [
        {
          name: "Michael Johnson",
          phone: "+1122334455",
        },
      ],
      studentCoordinators: [
        {
          name: "Emily Brown",
          phone: "+5566778899",
        },
      ],
    }
  ;

  return Response.json(event);
}
