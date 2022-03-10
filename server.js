const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//helps to confirm connection with Express.js server when ran
// app.get('/', (req,res) => {
//     res.json({
//         message: "Hello World"
//     });
// });

//This is a catchall route, will throw error for unknown endpoints
// This route will OVERRIDE other routes
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
