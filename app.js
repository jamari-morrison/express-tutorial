const express = require('express');

const app = express();
app.use(express.json());


app.get('/hello', (req, res) => {
    console.log(req.query);
    res.json({
        data: "this is data",
        value: "this is a value"
    })
});


const printingRoutes = require('./routes/printing');

app.use('/printing', printingRoutes);


app.listen(8080, () => {
    console.log("listning on port 8080!");
})