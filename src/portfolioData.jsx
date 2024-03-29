export const portfolioData=[
    {
        id:"01",
        img:["p_1_1.png","p_1_2.png","p_1_3.png"],
        title:"Quizzical",
        subtitle:"Checkout Live",
        link:"https://quiztics.netlify.app/",
        overview:`A simple Quiz app which displays 5 quizzes at a time fetched from open trivia database api. Users can select an answer from the options provided and get total number of correct answers by clicking check answers button.
        A feature for users to select the category, difficulty, and type of quiz questions that they want to answer, and then display the corresponding questions that match their selection is also implemented`,
        techUsed:"HTML,CSS,React Js",
        conceptsApplied:"Fetch data from api and use the data to update the UI,props,useState and useEffect hook,conditional rendering,grid ,etc."
    },
    {
        id:"02",
        img:["p_2_1.png","p_2_2.png","p_2_3.png"],
        title:"Tenzies",
        subtitle:"Checkout Live",
        link:"https://tenzies-game-pk9697.netlify.app/",
        overview:`A Tenzies game where users in order to win must roll dices untill all dice values are same. Dices selected by user are freezed at there current value between rolls.
        The number of rolls required when game is won is displayed,along with if its user's personal best or not is also displayed`,
        techUsed:"HTML,CSS,React Js",
        conceptsApplied:"Conditional rendering,props,useState and useEffect hook ,etc."
    },
    {
        id:"03",
        img:["p_3_1.png","p_3_2.png","p_3_3.png"],
        title:"Movie Watchlist",
        subtitle:"Checkout Live",
        link:"https://movie-watchlist-app-using-plainjs.netlify.app/",
        overview:`A movie watchlist app having 2 pages search and watchlist page.
        Search page has the input field which calls to OMDB api with the title searched for and displays the search results.
        Each movie in the search page has a button 'add' which saves that movie to local storage.
        Watchist page displays running list of all movies saved as watchlist from local storage.
        Each movie in the watchlist page has a button 'remove' which removes that movie from local storage.`,
        techUsed:"HTML,CSS,Javascript",
        conceptsApplied:"Fetch data from api and use the data to update the UI using DOM manipulation"
    },
    {
        id:"04",
        img:["p_4_1.png","p_4_2.png","p_4_3.png","p_4_4.png","p_4_5.png","p_4_6.png"],
        title:"Learning Journal",
        subtitle:"Subtitle 00 data",
        link:"https://my-learning-journal.netlify.app/",
        overview:"A full responsive design website built using mobile first design approach having 3 pages home,article and about me page.",
        techUsed:"HTML,CSS",
        conceptsApplied:"Relative units like ems and rems,media queries,flexbox,grid ,etc."

    },
    {
        id:"05",
        img:["p_5_1.png","p_5_2.png","p_5_3.png"],
        title:"Tindog",
        subtitle:"Checkout ",
        link:"https://tindog-pk.netlify.app/",
        overview:"Tindog a dating app for dogs where a user can like or dislike a profile which triggers a like or nope badge according to user choice of click.",
        techUsed:"HTML,CSS,Javascript",
        conceptsApplied:"Javascript classes to create different dogs object,DOM manipulation ,etc."

    },
    {
        id:"06",
        img:["p_6_1.png","p_6_2.png"],
        title:"Random Password Generator",
        subtitle:"Subtitle 00 data",
        link:"https://random-pass-generator-js.netlify.app/",
        overview:`A Random password generator app which as the name suggests generates random passwords of specified length with the option to include numbers and symbols. 
        Users also has the functionality to copy the random password generated by clicking any of the passwords.`,
        techUsed:"HTML,CSS,Javascript",
        conceptsApplied:"Conditional rendering,useState hook, basic javascript logic"


    },
    {
        id:"07",
        img:["p_7_1.png","p_7_2.png"],
        title:"Scheme Color Generator",
        subtitle:"Subtitle 00 data",
        link:"https://scheme-color-generator.netlify.app/",
        overview:`A color scheme generator app which generates color schemes for any project user is building which they can use for selecting color palette.
                Clicking 'get color scheme' button makes request to the color api with user selected seed color and color scheme mode.`,
        techUsed:"HTML,CSS,Javascript",
        conceptsApplied:"Interacting with api using fetch and updating color schemes using DOM manipulation ,etc."
    },
]