const express = require('express')
const app = express()
const cors = require('cors');
const PORT = 8000
 
let tasks = [
   { id: 1, name: 'Cat', Thai:"แมว" },
    { id: 2, name: 'Bird', Thai:"นก" },
    { id: 3, name: 'Fish', Thai:"ปลา" },
    { id: 4, name: 'Insect', Thai:"แมลง" },
   ]
 
app.use(cors())
 
app.get('/', (req,res) => {
   res.json(tasks)
})
 
app.listen(PORT, () => console.log(`listen at ${PORT}`))
