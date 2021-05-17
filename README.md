# Advisr Applicant Project

## Overview
 This project takes JSON file with business data and returns it with Express.js and displays the data using Vue.js.

## Features

* View all businesses in data
* Search and sort through fields of the business data
* Displays a detailed page with all related business information including an interactive Google Map window
* Calculate Sales Ve

## Technologies

### Front-end
* [Vue.js 3.0](https://vuejs.org/) 
* [Vue Router](https://router.vuejs.org/)
* [PrimeVue](https://primefaces.org/primevue/showcase/#/)
* [vue-google-maps](https://vue-map.netlify.app/)

### Backend
* [Express.js](https://expressjs.com/)

## Initial Setup

### Clone This Repository

If you have git installed, type the following into your terminal:

```
git clone https://github.com/amishpr/advisr-applicant-project
```

Else, download the zip file and unpack by clicking the green "Clone and download" button on the top right of the screen.

### Starting Vue.js Client

1. Open client folder

Type the following into your terminal:

```
cd ./advisr-applicant-project/client
```
2. Install npm modules
```
npm install
```
3. Start client
```
npm serve
```
4. Open the following url:
```
http://localhost:8000/
```

### Starting Express.js Server

1. Open client folder

Type the following into your terminal:

```
cd ./advisr-applicant-project/server
```
2. Install npm modules
```
npm install
```
3. Start server
```
npm start
```
4. Open the following url to view all business data:
```
http://localhost:3000/business/all
```

5. To view a specific business id pass in its id:
```
http://localhost:3000/business/1
```