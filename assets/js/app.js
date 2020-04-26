const tweetlist= document.getElementById('tweet-list');

eventlistners();
function eventlistners(){
    document.getElementById('form').addEventListener('submit',newTweet);
    tweetlist.addEventListener('click', removetweet);
    document.addEventListener('DOMContentLoaded',printonload);
}

//adding tweets to list
function newTweet(e){
    e.preventDefault();
    const tweet= document.getElementById('tweet').value;

     const removebtn= document.createElement('a');
     removebtn.classList='remove-tweet';
     removebtn.textContent='X';

    const li=document.createElement('li');
    li.textContent=tweet;
    tweetlist.append(li);
    li.append(removebtn);
    
    addtweet(tweet);
}

//removing tweet
function removetweet(e){
    if(e.target.classList.contains('remove-tweet')){
     
        e.target.parentElement.remove();
    }
   removelocal(e.target.parentElement.textContent);
}

//adding tweet to local storage

function addtweet(tweet){
  let tweets= gettweet();
   tweets.push(tweet); 
   localStorage.setItem('tweets', JSON.stringify(tweets));
}

function gettweet(){
    let tweets;
    const tweetsls= localStorage.getItem('tweets');
     if(localStorage.getItem('tweets')=== null){
         tweets=[];
     }else{
         tweets= JSON.parse(tweetsls);
     }
     return tweets;
}

//printing tweets on loading the page
function printonload(e){
    let tweets=gettweet();

    tweets.forEach(function(tweet) {
    
     const removebtn= document.createElement('a');
     removebtn.classList='remove-tweet';
     removebtn.textContent='X';

    const li=document.createElement('li');
    li.textContent=tweet;
    tweetlist.append(li);
    li.append(removebtn);
   
    });

}

//removing elements from local storge

function removelocal(tweet){
    let tweets= gettweet();
     
    const tweedel= tweet.substring(0, tweet.length-1);

    tweets.forEach(function(tweetl,index){
        if(tweetl=== tweedel){
            tweets.splice(index,1);
        }
    });
    localStorage.setItem('tweets', JSON.stringify(tweets));
}