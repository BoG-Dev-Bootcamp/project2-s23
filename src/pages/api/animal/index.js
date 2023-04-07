import animal from '../../../../server/mongodb/models/animal.js'
import animalSchema from "../../../../server/mongodb/models/animal.js"
import {connectDB, closeDB} from "../../../../server/utils/db.js"

export default async function handler(req, res) {
    if (req.method == 'POST') {
        let newAnimalSchemaData = {
            // _id: req.body._id,
            name: req.body.name,
            hoursTrained: req.body.hoursTrained,
            owner: req.body.owner,
            dateOfBirth: new Date(req.body.dateOfBirth),
            profilePicture: req.body.profilePicture,
        }

        try {
            await connectDB()
            let newAnimal = new animalSchema(newAnimalSchemaData);
            await newAnimal.save();
            await closeDB()
            console.log("closed")
            return res.status(200).send("New animal created")

        } catch (error) {
            console.log(error)
            return res.status(400)
        }
    } else {
        return res.status(500)
    }
}
