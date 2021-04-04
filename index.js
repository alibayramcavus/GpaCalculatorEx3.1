const express = require("express")

const app = express()
app.use(express.json())

app.get("/calculate", (req, res) => {
    var totalCredit = 0
    var totalScore = 0
    console.log(req.body);
    req.body.grades.forEach(grade => {
        totalCredit = totalCredit + grade.credit
        totalScore = totalScore + (grade.credit*grade.score)
    });
    const gpa = totalScore / totalCredit
    console.log(gpa);
    res.send("Your GPA: " + gpa)
})

app.get("/", (req, res) => {
    res.send("Listening")
})
const port = process.env.PORT || 80
app.listen(port, () => {
    console.log("Server running on " + port)
})