const messages = ["What did the horse say after it tripped? Help! I've fallen and I can't giddyup!", "My wife said I should do lunges to stay in shape. That would be a big step forward.", 
"Why do fathers take an extra pair of socks when they go golfing? In case they get a hole in one!", "What do you call a fish wearing a bowtie? Sofishticated", 
"What do you call a factory that makes okay products? A satisfactory", "What did the ocean say to the beach? Nothing, it just waved", "Why do seagulls fly over the ocean? Because if they flew over the bay, we'd call them bagels"];

const dadJokeGenerator = () => {
    return messages[Math.floor(Math.random() * (messages.length - 1))];
};

const addJoke = (joke) => {
    messages.push(joke);
    console.log('Your joke (' + joke + ') has been added to the list of high quality jokes');
}



console.log(dadJokeGenerator());

addJoke("What did Baby Corn say to Mama Corn? Where's the Pop Corn?");