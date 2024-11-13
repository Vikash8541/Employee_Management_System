// Now convert this JSON File into array of an Object

// localStorage.clear()
const employees = [
  {
    id: 1,
    firstName: "Rajesh",
    email: "rajesh@gmail.com",
    password: "123",
    taskCounts: {
      "accepted": 3,
      "newTask": 2,
      "completed": 1,
      "failed": 0,
    },
    tasks: [
      {
        taskTitle: "Complete Project Report",
        taskDescription: "Prepare the final project report for client review.",
        taskDate: "2024-11-10",
        category: "Documentation",
        accept: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Update Database",
        taskDescription: "Update the database with the latest customer information.",
        taskDate: "2024-11-12",
        category: "Database",
        accept: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Team Meeting",
        taskDescription: "Weekly meeting to discuss project progress.",
        taskDate: "2024-11-08",
        category: "Meetings",
        accept: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    firstName: "Suman",
    email: "suman@gmail.com",
    password: "123",
    taskCounts: {
      "accepted": 1,
      "newTask": 3,
      "completed": 1,
      "failed": 2,
    },
    tasks: [
      {
        taskTitle: "Client Presentation",
        taskDescription: "Prepare and deliver the presentation to the client.",
        taskDate: "2024-11-15",
        category: "Presentations",
        accept: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Code Review",
        taskDescription: "Review code for the latest release.",
        taskDate: "2024-11-09",
        category: "Development",
        accept: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Product Demo",
        taskDescription: "Demo the new features of the product to the sales team.",
        taskDate: "2024-11-11",
        category: "Demonstration",
        accept: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Bug Fixing",
        taskDescription: "Resolve the critical bugs in the system.",
        taskDate: "2024-11-10",
        category: "Development",
        accept: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 3,
    firstName: "Priya",
    email: "priya@gmail.com",
    password: "123",
    taskCounts: {
      "accepted": 0,
      "newTask": 1,
      "completed": 2,
      "failed": 1,
    },
    tasks: [
      {
        taskTitle: "Update Website Content",
        taskDescription: "Revise and add new content to the company website.",
        taskDate: "2024-11-13",
        category: "Content",
        accept: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Internal Training",
        taskDescription: "Conduct training for new hires.",
        taskDate: "2024-11-10",
        category: "Training",
        accept: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "SEO Optimization",
        taskDescription: "Improve website SEO rankings.",
        taskDate: "2024-11-09",
        category: "Marketing",
        accept: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 4,
    firstName: "Arjun",
    email: "arjun@gmail.com",
    password: "123",
    taskCounts: {
      "accepted": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 2,
    },
    tasks: [
      {
        taskTitle: "Design New Logo",
        taskDescription: "Create a new logo for the product launch.",
        taskDate: "2024-11-20",
        category: "Design",
        accept: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Market Research",
        taskDescription: "Gather insights on competitor products.",
        taskDate: "2024-11-12",
        category: "Research",
        accept: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Social Media Campaign",
        taskDescription: "Plan and launch a new social media campaign.",
        taskDate: "2024-11-08",
        category: "Marketing",
        accept: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 5,
    firstName: "Nisha",
    email: "nisha@gmail.com",
    password: "123",
    taskCounts: {
      "accepted": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 2,
    },
    tasks: [
      {
        taskTitle: "Financial Report",
        taskDescription: "Generate the financial report for Q4.",
        taskDate: "2024-11-25",
        category: "Finance",
        accept: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Data Analysis",
        taskDescription: "Analyze customer feedback data.",
        taskDate: "2024-11-18",
        category: "Data Science",
        accept: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Update Sales Forecast",
        taskDescription: "Revise the sales forecast for the upcoming year.",
        taskDate: "2024-11-10",
        category: "Sales",
        accept: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
];




const admin = [
  {
    firstName: "Jonny",
    id: 1,
    email: "jonny@gmail.com",
    password: "123",
  },
  {
    firstName: "Vikash",
    id: 2,
    email: "vikash@gmail.com",
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

    return{employees,admin}
    
}