# YouTube Videos API

API for managing YouTube video data.

## Table of Contents

- [Introduction](#introduction)
- [API Documentation](#api-documentation)
- [Getting Started](#getting-started)
  - [Local Setup](#local-setup)
  - [Docker Setup](#docker-setup)
- [API Endpoints](#api-endpoints)
  - [Get All Videos](#get-all-videos)
- [Parameters](#parameters)
- [Responses](#responses)
- [Example Response](#example-response)

## Introduction

This API provides functionality to fetch the latest YouTube videos with pagination and search options. It is built to retrieve video data from YouTube based on specified criteria. 

A Dashboard to display all the videos with seaching and pagination options.

## Project Description

- Youtube API, which run in background continously on a internval of 10 secs. It stores the data such as video title, description, channelTitle, thumbnail, videoId, publishTime with text indexing on title and description.

- A GET API which returns the stored data in decending order of publish time, in paginated response

- Added Multiple API Supports, i.e If quota is exhausted on one, then it can use another API automatically.

- Dockerized the Project

- Created a Dashboard Using React, which displays videos present in database, also added with search filter


## API Documentation

The API is documented using OpenAPI (Swagger) specification. You can find the [Swagger YAML file here](./swagger.yaml).
Postman collection: https://documenter.getpostman.com/view/13254149/2s9YypDNCp



## Getting Started

### Tech Stack
1.Nodejs
2.Express.js
3.MongoDB 
4.React (for dashboard)

### Local Setup

To run the API locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Ali-Modassir/Fampay_modassir.git`
2. Install dependencies: `npm install`
3. Start the application: `npm start`

The API will be accessible at `http://localhost:8000`.

### Docker Setup

To run the API using Docker, follow these steps:

1. Clone the repository: `git clone https://github.com/Ali-Modassir/Fampay_modassir.git`
2. Build Docker images: `docker-compose build`
3. Start Docker containers: `docker-compose up`

The API will be accessible at `http://localhost:8000`.

## API Endpoints

### Get All Videos

#### Endpoint

`GET /api/v1/videos`

#### Summary

Retrieve a list of the latest videos with pagination and search options.

#### Parameters

- `pageIndex` (optional): Page number (default is 1).
- `pageSize` (optional): Number of items per page (default is 50).
- `search` (optional): Search term for videos.

#### Responses

- `200`: Successful response (OK).
  - Content Type: `application/json`

#### Example Response

```json
{
  "pageIndex": 1,
  "pageSize": 50,
  "totalCount": 2,
  "data": {
    "videos": [
      {
        "_id": "65b0d80fa3764fb05bffd52a",
        "videoId": "-kHrWx24eOs",
        "title": "title_1",
        "description": "description_1",
        "channelTitle": "channelTitle",
        "thumbnail": "",
        "publishTime": "2024-01-24T05:36:04.000Z"
      },
      {
        "_id": "65b0d80fa3764fb05bffd51b",
        "videoId": "8UHhFfrFDiQ",
        "title": "title_2",
        "description": "description_2",
        "channelTitle": "channelTitle",
        "thumbnail": "",
        "publishTime": "2024-01-24T05:36:04.000Z"
      }
    ]
  },
  "timestamp": "2024-01-24T05:36:04.000Z"
}
```
## Dashboard

- Created a dashboard using React, which displays all the videos present in the database in the sorted order.

- Added search filter, so that client can search the videos on providing a specific query.

- Clone the repository of dashboard

```
git clone --single-branch --branch master-dashboard https://github.com/Ali-Modassir/Fampay_modassir.git

```

- Go to the directory:

```
  cd Fampay_modassir
```

- Install dependencies

```
npm install
```

- Build and run the project, this starts this application at http://localhost:3000/:

```
 npm start
```