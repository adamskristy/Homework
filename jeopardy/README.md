# Jeopardy API

Make a Jeopardy Trivia App using jService!

[jService](http://jservice.io) is an API that has Jeopardy trivia questions and answered available to the public.

The purpose of this project was to get experience with react and making a `GET` request (using fetch) from an API to get data.

1. Make a button labeled "Random Trivia Question" or "Get Question" or something descriptive.

2. On click, have this button that will make a `GET` request (using fetch) to get random trivia data. Let's start you off with a win by giving you the URL: `http://jservice.io/api/random`

3. Make some html elements like a `div` where you will display the **question**, **category** and **points**. NOTE: You will need to look at the data that is returned to you and think back about how to access data from different datatypes (is it an array within an object? How do you access the info?).

4. Make another `div` in your HTML where you display the **answer**

5. Add an on click, that has a function that will toggle whether or not you can see the answer.

6. Add other elements to your page to make it make sense and look good (see attached image)

7. Make a div that has an h2 and two buttons

8. Inside the h2 keep score, start at 0

9. Make one button add the points to the score and the other to subtract points from the score (just add or subtract 1 point - using the points value from jService is Hungry for More)

10. Add a little style and color to your app

## Hungry for More?
## jService+
1. use the points provided for the question to add and subtract from the score [React docs: lifting state up](https://reactjs.org/docs/lifting-state-up.html).

2. create a third button that resets the score to 0

3. Make another button titled `Get 10 Questions`.

4. Make a request to get random trivia data that returns 10 items: ex: `'http://jservice.io/api/random?count=10'`

5. Use what you learned today to display all 10 of the questions.

6. Include a button with each of the questions to reveal that will reveal the answer when clicked. (You may find it easy to reveal ALL the answers, revealing just the answer of one question is challenging!)

7. Use the documentation to look at the categories that are available with jService. Choose 1. Make a request to get the trivia information for that category. Display them on your page in the same way as before (a question with an answer button);

8. Research other APIs! Find one that looks interesting and make a "GET" request for some data.

