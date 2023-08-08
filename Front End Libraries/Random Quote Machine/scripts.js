// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 
$(document).ready(function()
{
$('#new-quote').click(function() {
getRandomQuote();
}); 
});


    var randQuo = [{
        quote: "It is essential to do everything possible to attract young people to opera so they can see that it is not some antiquated art form but a repository of the most glorious music and drama that man has created.",
        author: "Bruce Beresford"
    },
    {
        quote: "I think there's no city quite like New York, and I've seen most of the developed cities of the world. I admire this place, its energy. It's the repository of so much history and culture and diversity.",
        author: "Harry Belafonte"
    },
    {
        quote: "The way that I see astrology is as a repository of thought and psychology. A system we've created as a culture as way to make things mean things.",
        author: "Eleanor Catton"
    },
    {
        quote: "A library is a place that is a repository of information and gives every citizen equal access to it. That includes health information. And mental health information. It's a community space. It's a place of safety, a haven from the world.",
        author: "Neil Gaiman"
    },
    {
        quote: "I feel more Irish than English. I feel freer than British, more visceral, with a love of language. Shot through with fire in some way. That's why I resist being appropriated as the current repository of Shakespeare on the planet. That would mean I'm part of the English cultural elite, and I am utterly ill-fitted to be.",
        author: "Kenneth Branagh"
    },
    {
        quote: "Parliament of the country is the repository of the sovereign will of the people, and its successful functioning is a joint responsibility of both the government and the Opposition.",
        author: "Pratibha Patil"
    },
    {
        quote: "I cannot consent that my mortal body shall be laid in a repository prepared for an Emperor or a King my republican feelings and principles forbid it the simplicity of our system of government forbids it.",
        author: "Andrew Jackson"
    },
]
function getRandomQuote() {
 // created a new variable newRand and got a random element from randQuo; randQuo is array so the notation;
   let newRand = randQuo[Math.floor(Math.random()*(randQuo.length))]; 
  // define new variables which take the corresponding quote and author from newRand;
  //send to html
  $('#text').html(newRand.quote);
  $('#author').html(newRand.author);
};