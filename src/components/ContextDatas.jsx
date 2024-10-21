import { createContext, useEffect, useState } from 'react';
import axios from "axios";





export const TweetContext = createContext();



export function ContextProvider({ children }) {
  const [tweetData, setTweetData] = useState([]);
  
  

  useEffect(() => {
    const fetchData = async () => {
      const {data} =await axios.get("https://twitter-clone-api-c1-michelkaji.onrender.com/tweet/users");
      console.log(data);
     
        setTweetData(data.reverse());
        };

       

    fetchData();
  }, []);

  const value={tweetData,setTweetData}
  return (
    <TweetContext.Provider value={value}>
      {children}
    </TweetContext.Provider>
  );
}

// const datas = [
//     {
//         id: 1,
//         autheur: "Michelkaji",
//         profil: "src/images/profile.png",
//         profilTweet: "src/images/profile.png",
//         text: "Bonjour suis développeur fullstack",
//         postImage: "src/images/tweetimage.png",
//         tweetTitle: "MichelKaji",
//         tweetpseudo: "@MichelKaji 1h",
//         iconTitle: "src/images/Group.svg",
//         comment: 49,
//         like: 100,
//         retweet: 2

//     },
//     {
//         id: 2,
//         autheur: "Michelkaji",
//         profil: "src/images/profile.png",
//         profilTweet: "src/images/profile.png",
//         text: "Bonjour suis développeur fullstack pour vos projets de digitalisation n'hésité pas à nous consulter",
//         postImage: "src/images/tweetimage.png",
//         tweetTitle: "MichelKaji",
//         tweetpseudo: "@MichelKaji 1h",
//         iconTitle: "src/images/Group.svg",
//         comment: 49,
//         like: 100,
//         retweet: 2
       
//     },
//     {

//         id: 3,
//         autheur: "Tukya",
//         profil: "src/images/profile.png",
//         profilTweet: "src/images/twetIcone.png",
//         text: "Bonjour suis développeur fullstack pour vos projets de digitalisation n'hésité pas à nous consulter react",
//         postImage: "src/images/tweetimage.png",
//         tweetTitle: "New York Time",
//         tweetpseudo: "@New York Time",
//         iconTitle: "src/images/Group.svg",
//         comment: 1000,
//         like: 100,
//         retweet: 2
    
//     },
//     {
//         id: 4,
//         autheur: "New York Time",
//         profil: "src/images/profile.png",
//         profilTweet: "src/images/twetIcone.png",
//         text: "Bonjour suis développeur fullstack pour vos projets de digitalisation n'hésité pas à nous consulter react",
//         postImage: "src/images/tweetimage.png",
//         tweetTitle: "New York Time",
//         tweetpseudo: "@New York Time",
//         iconTitle: "src/images/Group.svg",
//         comment: 0,
//         like: 100,
//         retweet: 2
//     },

//     {
//         id: 5,
//         autheur: "CNN",
//         profil: "src/images/profile.png",
//         profilTweet: "src/images/tweetprofile.png",
//         text: "Bonjour suis développeur fullstack pour vos projets de digitalisation n'hésité pas à nous consulter react",
//         postImage: "src/images/tweetimage.png",
//         tweetTitle: "CNN",
//         tweetpseudo: "@CNN",
//         iconTitle: "src/images/Group.svg",
//         comment: 0,
//         like: 100,
//         retweet: 2
//     }
// ]







  





   
   