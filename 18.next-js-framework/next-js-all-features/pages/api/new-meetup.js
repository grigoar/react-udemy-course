// /api/new-meetup
// only POST request
import { MongoClient } from 'mongodb';
import constantsEnv from '../../constantsEnv';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const { title, image, address, description } = data;
    // store data to mongodb
    console.log(constantsEnv.MONGO_DB_USERNAME);
    console.log(constantsEnv.MONGO_DB_PASS);
    const client = await MongoClient.connect(
      `mongodb+srv://${constantsEnv.MONGO_DB_USERNAME}:${constantsEnv.MONGO_DB_PASS}@cluster0.a34b2.mongodb.net/meetups-react-next-course?retryWrites=true&w=majority`
    );

    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const result = await meetupsCollection.insertOne({ data });

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Message inserted!' });
  }
}

export default handler;
