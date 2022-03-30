import { useRouter } from 'next/router';

const DetailPage = () => {
  const router = useRouter();

  const newsId = router.query.newsId;

  // send a request to get the newsId

  return <h1>The News Details Page {newsId}</h1>;
};

export default DetailPage;
