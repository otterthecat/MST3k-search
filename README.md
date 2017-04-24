Data was pulled from [imdb-api](https://github.com/worr/node-imdb-api)

I decided to use [create-react-app](https://github.com/facebookincubator/create-react-app) for the ease of getting an environment set up.

The components were broken up into two major categories: `search` and `results`, which are then utillized by the `app` component, that manages the state.

Directions instructed to use a button that "when clicked, shows the search results of the user's query". However I took things a step further and made it a live search. That is, as you type you will find episodes that match the input text. This makes a button somewhat superfluous, so I opted to remove it.

I also included a (very) simple regex to allow for matches ignoring if the word "The" is the first word of the title. For instance: querying "Cr" will match both "The Crawling Eye" and "Crash of Moons". It is also worth noting the search is case insensitive.

Submitting the form will clear the input field, without clearing the results.

[Moment](https://github.com/moment/moment/) was used to simplify date formatting.

# How to run the app
 * clone the repo
 * within the root directory, enter `npm install` in your terminal
 * to launch the app, enter `npm start`
 * to run the tests, enter `npm test`