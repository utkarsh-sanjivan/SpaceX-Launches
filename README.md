## About
This is a browsing application for all the launches done by SpaceX. Initially it loads all the launches by the SpaceX but there is also an option to filter the list to find the desired launch. Basically there are three launches that are provided here based on the year of launch, whether the launch was successful or not and whether the launding was successful or not. All these filters can also be used in conjunction. 

## Available Scripts
Following are the scripts that are available,
npm run start -> To start the application__
npm run build -> To build the application__
npm run test -> To run the test cases__
deploy -> To deploy the application on the Github.

## Accessing the application
The application is deployed on https://utkarsh-sanjivan.github.io/SpaceX-Launches/ and can be accessed there.

## Lighthouse Report
![Alt text](/public/LightHouseReport.png?raw=true "Optional Title")

## Approach
In this application I have used technologies like HTML, CSS, React, Redux and Ant Design. I have decided to use React over other front end technologies as React is faster and unlike most, this a library that gives me freedom to use any module that I see fit for the application. I am using axios for calling the APIs.__
As per the requirement first I am loading the initial list of the launches in which I am calling the API with no filters. I have created an object for tracing the filters which has all the filters as keys that are initially set to empty string. Whenever a filter is applied I am setting the flag of that filter to the said filter and during the calling of the API I am adding those filters and thier value to the API params.__
For displaying all the launches I have created a card component that displays the data of the launch and I am resuing that component to display the list. 