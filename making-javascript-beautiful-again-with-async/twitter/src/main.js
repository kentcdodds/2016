import userInput from './userInput';
import twitter from './twitter';
import meme from './meme';

tweetToMeme();

async function tweetToMeme() {
    const twitterHandle = await userInput.get('What twitter handle do you want?');

    const tweets = await twitter.get(
        'statuses/user_timeline',
        { screen_name: twitterHandle }
    );

    // Catches bad queries
    if (tweets.data.error != null) {
        console.error(tweets.data.error);
    } 
    // Catches bad twitter API keys
    else if (tweets.data.errors != null) {
        console.error(tweets.data.errors);
    } 
    // No errors, continue on our way...
    else {
        const firstTweet = tweets.data[0];

        console.log(firstTweet.text);

        const filename = await meme.create(firstTweet.text);
        console.log(`Generated your image!!! ${filename}`);
    }
}
