import React from 'react';
import Head from 'next/head';

const defaultUrl = '';
const defaultDescription = 'Just a simple app started with next-js-starter';
const defaultTitle = 'Next Js Starter';

export function getHeader(description = defaultDescription, title = defaultTitle) {
	title = title || defaultTitle;
	description = description || defaultDescription;
	return <Head>
		<title>{title}</title>
		<meta charset="utf-8"/>
		<meta property="og:type" content="website"/>
		<meta name="viewport" content="initial-scale=1.0"/>
		<meta name="og:title" content={defaultTitle}/>
		<meta name="og:url" content={defaultUrl}/>
		<meta name="description" content={description}/>
		<meta name="og:description" content={description}/>
		<meta name="og:image" content=""/>
		<link rel="canonical" href={defaultUrl}/>
		<link rel="stylesheet" type="text/css" href="/static/main.css"/>
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Condensed|Source+Sans+Pro|Permanent+Marker"/>
	</Head>;
};
