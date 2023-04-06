import getAnimals from "../../../../server/mongodb/actions/getAnimals";

export default async function handler(req, res) {
    let animals;
    if (req.method == 'GET') {
        try {
            animals = await getAnimals(req)
        } catch (e) {
            return res.status(500).send("Unable to get animals")
        }
        console.log(animals)
        return res.status(200).send("Successfully returned animals")
    }
    return res.status(400).send("Incorrect req method type")

}