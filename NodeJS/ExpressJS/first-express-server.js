// Import the express module
const express = require("express");

// Create an express Application
const app = express();

// Define port for express/node application
const PORT = 3000;
const TOKEN = "dshbafakfbafnkabkjfcbac-cdvweriuegoficnzxkcaczxcmnbzx";

let userData = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    gender: "Male",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    address: {
      street: "Hoeger Mall",
      suite: "Apt. 692",
      city: "South Elvis",
      zipcode: "53919-4257",
      geo: {
        lat: "29.4572",
        lng: "-164.2990",
      },
    },
    phone: "493-170-9623 x156",
    website: "kale.biz",
    company: {
      name: "Robel-Corkery",
      catchPhrase: "Multi-tiered zero tolerance productivity",
      bs: "transition cutting-edge web services",
    },
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamrentha",
    gender: "Female",
    email: "Lucio_Hettinger@annie.ca",
    address: {
      street: "Skiles Walks",
      suite: "Suite 351",
      city: "Roscoeview",
      zipcode: "33263",
      geo: {
        lat: "-31.8129",
        lng: "62.5342",
      },
    },
    phone: "(254)954-1289",
    website: "demarco.info",
    company: {
      name: "Keebler LLC",
      catchPhrase: "User-centric fault-tolerant solution",
      bs: "revolutionize end-to-end systems",
    },
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: "23505-1337",
      geo: {
        lat: "-71.4197",
        lng: "71.7478",
      },
    },
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    company: {
      name: "Considine-Lockman",
      catchPhrase: "Synchronised bottom-line interface",
      bs: "e-enable innovative applications",
    },
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    address: {
      street: "Rex Trail",
      suite: "Suite 280",
      city: "Howemouth",
      zipcode: "58804-1099",
      geo: {
        lat: "24.8918",
        lng: "21.8984",
      },
    },
    phone: "210.067.6132",
    website: "elvis.io",
    company: {
      name: "Johns Group",
      catchPhrase: "Configurable multimedia task-force",
      bs: "generate enterprise e-tailers",
    },
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    address: {
      street: "Ellsworth Summit",
      suite: "Suite 729",
      city: "Aliyaview",
      zipcode: "45169",
      geo: {
        lat: "-14.3990",
        lng: "-120.7677",
      },
    },
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    company: {
      name: "Abernathy Group",
      catchPhrase: "Implemented secondary concept",
      bs: "e-enable extensible e-tailers",
    },
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphinetha",
    email: "Chaim_McDermott@dana.io",
    gender: "Male",
    address: {
      street: "Dayna Park",
      suite: "Suite 449",
      city: "Bartholomebury",
      zipcode: "76495-3109",
      geo: {
        lat: "24.6463",
        lng: "-168.8889",
      },
    },
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    company: {
      name: "Yost and Sons",
      catchPhrase: "Switchable contextually-based project",
      bs: "aggregate real-time technologies",
    },
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    address: {
      street: "Kattie Turnpike",
      suite: "Suite 198",
      city: "Lebsackbury",
      zipcode: "31428-2261",
      geo: {
        lat: "-38.2386",
        lng: "57.2232",
      },
    },
    phone: "024-648-3804",
    website: "ambrose.net",
    company: {
      name: "Hoeger LLC",
      catchPhrase: "Centralized empowering task-force",
      bs: "target end-to-end models",
    },
  },
];

// Add basic/required middlewares. In buit middleware functions
// Middleware to parse URL-encoded bodies(from HTML forms)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom middleware functions:
const validateClient = (req, res, next) => {
  let token = req.header("token");
  if (token === TOKEN) {
    next();
  } else {
    res.status(401);
    res.send({ message: "Unauthorized User!" });
  }
};

// Logging middleware
const logMiddleware = (req, res, next) => {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  next();
};

// To add middleware to every route or request we can directly add it to app.
app.use(logMiddleware);

// Error handling middleware
const errorHandlingMiddleware = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: "Internal Server Error!" });
};

app.use(errorHandlingMiddleware);

// Define a simple route for home page.
app.get("/", (req, res) => {
  res.send("Welcome to the first example of express js!");
});

app.get("/error", (req, res) => {
  throw new Error("This is an intentional error!");
});

app.get("/api/users", validateClient, (req, res) => {
  let queryParams = req.query;
  let response = [...userData];
  if (Object.keys(queryParams).length) {
    response = response.filter((user) => {
      return (
        user.username.includes(queryParams.searchTerm) &&
        user.gender === queryParams.gender
      );
    });
  }
  res.send(response);
});

// Route Parameters:
app.get("/api/users/:userId", validateClient, (req, res) => {
  let id = Number(req.params.userId);
  let data = userData.filter((user) => {
    return user.id === id;
  });
  res.send(data);
});

app.post("/api/users", (req, res) => {
  console.log(req.body);
  console.log("WE are at POST req.");
  let body = req.body;
  body.id = userData.length + 1;
  userData.push(body);
  res.send(userData);
});

app.put("/api/users", (req, res) => {
  console.log(req.body.id);
  userData = userData.map((user) => {
    if (user.id === req.body.id) {
      user = { ...user, name: req.body.data.name };
    }
    return user;
  });
  res.send(userData);
});

app.delete("/api/users", (req, res) => {
  let id = req.body.id;
  userData = userData.filter((user) => {
    return user.id !== id;
  });
  res.send(userData);
});

app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
