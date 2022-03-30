import Link from 'next/link';
import React from 'react';

const NewsPage = () => {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/next-js-great">NextJS is a great framework</Link>
        </li>
        <li>
          {' '}
          <Link href="/news/something-else">Something else</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
