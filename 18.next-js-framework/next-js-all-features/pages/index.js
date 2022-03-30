import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';
import { useEffect, useState } from 'react';
import constantsEnv from '../constantsEnv';
import Head from 'next/head';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://theplanetd.com/images/places-to-visit-in-berlin-germany.jpg',
    address: 'Some address, 623423 Berlin',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Berlin_Montage_4.jpg/263px-Berlin_Montage_4.jpg',
    address: 'Some fancy address, 623423 Greece',
  },
];
const HomePage = (props) => {
  //   const [loadedMeetups, setLoadedMeetups] = useState([]);
  //   useEffect(() => {
  //     // send http request and fetch data
  //     setLoadedMeetups(DUMMY_MEETUPS);
  //   }, []);

  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active meetings"
        />
      </Head>
      <MeetupList meetups={props.meetups} />;
    </>
  );
};

// this will run for each request
// export async function getServerSideProps(context) {
//   // fetch the data from API
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  //fetch data from DB
  const client = await MongoClient.connect(
    `mongodb+srv://${constantsEnv.MONGO_DB_USERNAME}:${constantsEnv.MONGO_DB_PASS}@cluster0.a34b2.mongodb.net/meetups-react-next-course?retryWrites=true&w=majority`
  );

  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  // console.log(meetups);
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.data.title,
        address: meetup.data.address,
        image: meetup.data.image,
        id: meetup._id.toString(),
      })),
    },
    //in seconds
    revalidate: 10,
  };
}

export default HomePage;
