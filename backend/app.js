import express from 'express';
const app = express();
const PORT = process.env.PORT || 3001; 
const db = "urltodb";
const data = [
  { endpoint: "/products",type: "get",},
  { endpoint: "/products",type: "post",},
  {endpoint: "/products/:id",type: "put"}
];

data.forEach((el) => {
  switch (el.type) {
    case 'get':
      app.get(el.endpoint, (req, res) => {
        res.send('Hello, Express!');
      });
      break;
    case 'post':
      app.post(el.endpoint, (req, res) => {
        const body = req.body;
        console.log(body);
        res.send('Post request processed'+body);
      });
      break;
    case 'put':
      app.put(el.endpoint, (req, res) => {
        const id = req.params.id; // Accessing the ID from URL params
        console.log(id);
        // Process the PUT request with the ID
        res.send(`Put request processed for ID: ${id}`);
      });
      break;
    default:
      break;
  }
});









// Start the server
app.listen(PORT);
