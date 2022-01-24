console.log("Server Running");
const exp = require('express');
const app = exp();

app.get('/hello', (req, res)=>{
    res.send("Task Manager App");
})

const port = 3000;

app.listen(port, console.log(`Server started running on port ${port}`));
