import React from 'react';

import MeetupDetail from '../../components/meetups/MeetupDetail';
import { MongoClient, ObjectId } from 'mongodb';
import constantsEnv from '../../constantsEnv';
import Head from 'next/head';

const MeetupDetailsPage = (props) => {
  console.log(props);
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    `mongodb+srv://${constantsEnv.MONGO_DB_USERNAME}:${constantsEnv.MONGO_DB_PASS}@cluster0.a34b2.mongodb.net/meetups-react-next-course?retryWrites=true&w=majority`
  );

  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  // client.close();

  return {
    //fallback true, it will generate the page when the req for not generated page is coming
    // fallback false it will say that we generated all the needed pages, 404 otherwise
    // blocking, means that there might be more pages, blocking will wait,
    //  and fallback-true will display an empty page first and show the content after it is generated
    fallback: 'blocking',
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
    // paths: [
    //   {
    //     params: {
    //       meetupId: 'm1',
    //     },
    //   },
    //   {
    //     params: {
    //       meetupId: 'm2',
    //     },
    //   },
    // ],
  };
}

export async function getStaticProps(context) {
  //fetch data  for a single Meetup
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(
    `mongodb+srv://${constantsEnv.MONGO_DB_USERNAME}:${constantsEnv.MONGO_DB_PASS}@cluster0.a34b2.mongodb.net/meetups-react-next-course?retryWrites=true&w=majority`
  );

  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  // console.log(meetupId);
  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });
  // const selectedMeetup = await meetupsCollection.find({ _id: meetupId });
  // console.log(selectedMeetup);
  client.close();

  return {
    props: {
      meetupData: {
        image: selectedMeetup.data.image,
        title: selectedMeetup.data.title,
        address: selectedMeetup.data.address,
        description: selectedMeetup.data.description,
        id: selectedMeetup._id.toString(),
      },
    },
  };
  // return {
  //   props: {
  //     meetupData: {
  //       image:
  //         'https://theplanetd.com/images/places-to-visit-in-berlin-germany.jpg',
  //       title: 'First meetup',
  //       address: 'Some address , 432423 Berlin',
  //       description: 'TThe first meetup descriptonn',
  //       id: meetupId,
  //     },
  //   },
  // };
}

export default MeetupDetailsPage;
