// Now convert this JSON File into array of an Object


  const employees = [
    {
      id: 1,
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Complete Project Report",
          taskDescription:
            "Prepare the final project report for client review.",
          taskDate: "2024-11-10",
          category: "Documentation",
          active: true,
          newTask: false,
          completed: false,
          failed: false,
        },
        {
          taskTitle: "Update Database",
          taskDescription:
            "Update the database with the latest customer information.",
          taskDate: "2024-11-12",
          category: "Database",
          active: false,
          newTask: true,
          completed: false,
          failed: false,
        },
        {
          taskTitle: "Team Meeting",
          taskDescription: "Weekly meeting to discuss project progress.",
          taskDate: "2024-11-08",
          category: "Meetings",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
        },
      ],
    },
    {
      id: 2,
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Client Presentation",
          taskDescription:
            "Prepare and deliver the presentation to the client.",
          taskDate: "2024-11-15",
          category: "Presentations",
          active: true,
          newTask: false,
          completed: false,
          failed: false,
        },
        {
          taskTitle: "Code Review",
          taskDescription: "Review code for the latest release.",
          taskDate: "2024-11-09",
          category: "Development",
          active: false,
          newTask: true,
          completed: false,
          failed: false,
        },
        {
          taskTitle: "Product Demo",
          taskDescription:
            "Demo the new features of the product to the sales team.",
          taskDate: "2024-11-11",
          category: "Demonstration",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
        },
        {
          taskTitle: "Bug Fixing",
          taskDescription: "Resolve the critical bugs in the system.",
          taskDate: "2024-11-10",
          category: "Development",
          active: false,
          newTask: false,
          completed: false,
          failed: true,
        },
      ],
    },
    {
      id: 3,
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Update Website Content",
          taskDescription: "Revise and add new content to the company website.",
          taskDate: "2024-11-13",
          category: "Content",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
        },
        {
          taskTitle: "Internal Training",
          taskDescription: "Conduct training for new hires.",
          taskDate: "2024-11-10",
          category: "Training",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
        },
        {
          taskTitle: "SEO Optimization",
          taskDescription: "Improve website SEO rankings.",
          taskDate: "2024-11-09",
          category: "Marketing",
          active: false,
          newTask: false,
          completed: false,
          failed: true,
        },
      ],
    },
    {
      id: 4,
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Design New Logo",
          taskDescription: "Create a new logo for the product launch.",
          taskDate: "2024-11-20",
          category: "Design",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
        },
        {
          taskTitle: "Market Research",
          taskDescription: "Gather insights on competitor products.",
          taskDate: "2024-11-12",
          category: "Research",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
        },
        {
          taskTitle: "Social Media Campaign",
          taskDescription: "Plan and launch a new social media campaign.",
          taskDate: "2024-11-08",
          category: "Marketing",
          active: false,
          newTask: false,
          completed: false,
          failed: true,
        },
      ],
    },
    {
      id: 5,
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          taskTitle: "Financial Report",
          taskDescription: "Generate the financial report for Q4.",
          taskDate: "2024-11-25",
          category: "Finance",
          active: true,
          newTask: false,
          completed: false,
          failed: false,
        },
        {
          taskTitle: "Data Analysis",
          taskDescription: "Analyze customer feedback data.",
          taskDate: "2024-11-18",
          category: "Data Science",
          active: false,
          newTask: true,
          completed: false,
          failed: false,
        },
        {
          taskTitle: "Update Sales Forecast",
          taskDescription: "Revise the sales forecast for the upcoming year.",
          taskDate: "2024-11-10",
          category: "Sales",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
        },
      ],
    },
  ];


const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];


// Now we do set the data in LocalStorage of the Browser , so we need to convert the array of object into JSON Format.


export const setLocalStorage = ()=>{
    localStorage.setItem("employees",JSON.stringify(employees));
    localStorage.setItem("admin",JSON.stringify(admin));
}


// Now we do get the data from LocalStorage of the Browser , so we need to convert the JSON Format into array of object for ease use and understanding.

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))

    console.log(employees,admin);
    
}