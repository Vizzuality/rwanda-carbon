import React from 'react';

import Head from 'next/head';

export interface MetaTagsProps {
  title: string;
  description: string;
  type: string;
  imageURL?: string;
}

const MetaTags: React.FC<MetaTagsProps> = ({
  title,
  description,
  type = 'website',
}: MetaTagsProps) => (
  <Head>
    <title>{title}</title>

    <meta name="viewport" content="width=device-width" />
    <meta name="description" content={description} />

    <meta name="og:title" content={title} />
    <meta name="og:description" content={description} />
    <meta name="og:type" content={type} />
  </Head>
);

export default MetaTags;
