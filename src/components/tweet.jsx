import React, { useContext, useState} from 'react';
import { TweetContext } from './ContextDatas';
import { createContext } from 'react';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import NavBarre from './navBarre';
import TwitterEditor from './twitterEditor';
import Button from './buttonTwitter';
import axios from 'axios';
import certified from '../images/Group.svg';




export const datasContexte = createContext([])




function Tweets() {
    const {tweetData,setTweetData} = useContext(TweetContext);
   

const [inputValue, setInputValue] = useState('');


const ajouterNouveauTweet = (nouveauTweet) => setTweetData([ nouveauTweet, ...tweetData])

function handlesubmit(event) {
    event.preventDefault()
    const newTweets = {
                id: 1999,
                author: 1999,
                media: [
                  "src/images/tweetimage.png"
                ],
                retweetCount: 0,
                favoriteCount: 0,
                repliesCount: 0,
                text: inputValue,
                createdAt: "Fri Jul 07 2023 16:33:03 GMT+0100 (West Africa Standard Time)",
                names: "MichelKaji",
                username: "@MichelKaji",
                postImages: "src/images/profile.png"
              
              }

    if(inputValue.trim() !== "" && inputValue.length < 10 ){
        ajouterNouveauTweet(newTweets);
        axios.post('https://twitter-clone-api-c1-michelkaji.onrender.com/tweet', newTweets)
        .then(response => {
          
          console.log('donnée envoyée', response.newTweets);
        })
        .catch(error => {
        
          console.error(error);
        });
       
    }else{
        console.log("vous avez dépassé les caractères ou votre tweet est vide")
       
    }
    setInputValue(' ');
    
}

  const handleClickTweet = (event) => {
    setInputValue(event.target.value)
   
  };
  
    return (
        <>
        <div>
       
        <TwitterEditor onSubmit={handlesubmit} value={inputValue} onchang={handleClickTweet}/>
        </div>
            <div>
                {tweetData.map((tweet) =>(
 
                    <div className="tweet" key={tweet.id}>
                        <datasContexte.Provider value={tweet}>

                            <TweetProfil {...tweet} />
                            <div className="tweet-content">
                                <div className="tweet-body">
                                    <TweetTitle />
                                    <TweetText />
                                    <TweetImage />
                                </div>
                                <div className="tweet-actions ">
                                    <TweetComment />
                                    <TweetReply />
                                    <TweetLike />
                                    <Downlod />
                                </div>
                            </div>
                        </datasContexte.Provider>
                    </div>)
                )}
            </div>

        </>
    )
}

export function TweetFilter() {
    const [seachParams] = useSearchParams();
    const datas = Object.fromEntries([...seachParams]);
   
    const {tweetData,setTweetData} = useContext(TweetContext);
    
    

    const tweetUser = tweetData.filter((tweets) => tweets.postImages === datas.postImages);
   

    return (
        <>
            <div className="styleUserProfil">
                <div className="iconProfil">
                    <div className="avatares img"><img src={datas.postImages} alt='profile' /></div>
                     <div><Button style="buttone">Edit Profil</Button></div>
                </div>
                <div className="" >
                    <header className="headerStyle">
                        <h1 className="page-title">{datas.names}</h1>
                        <span className="titlesuser">{datas.username}</span>
                    </header>
                </div>
                <h3 className="titlesuser"><span className="tweet-text">{datas.repliesCount}</span>Abonement</h3>
                <NavBarre />
            </div>

            <div>
                {tweetUser.map((tweet) =>
                    <div className="tweet" key={tweet.id}>
                        <TweetProfil {...tweet} />
                        <datasContexte.Provider value={tweet}>
                            <div className="tweet-content">
                                <div className="tweet-body">
                                    <TweetTitle />
                                    <TweetText />
                                    <TweetImage />
                                </div>
                                <div className="tweet-actions ">
                                    <TweetComment />
                                    <TweetReply />
                                    <TweetLike />
                                    <Downlod />
                                </div>
                            </div>
                        </datasContexte.Provider>
                    </div>
                )}
            </div>

        </>
    )
}

export function TweetTitle() {
    const tweet = useContext(datasContexte);
    

    return (<>
        <div className="tweet-title" >
            <h2 className="tweet-title-author">{tweet.names}</h2>
            <div className="">
                <img src={certified} alt="title tweet" />
            </div>
            <strong className="tweet-title-details">{tweet.username}</strong>
        </div>

    </>)
}
export function TweetText() {
    const tweet = useContext(datasContexte)
    return (
        <div className="tweet-text">
            <p>
                {tweet.text}
            </p>
        </div>
    )
}

export function TweetImage() {
    const tweet = useContext(datasContexte)
    return (
        <div className="tweet-image">
            <img className='imageTweet' src={tweet.media} alt="imageTweet"/>

        </div>
    )
}

export function TweetComment() {
    const tweet = useContext(datasContexte)
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <div className="tweet-action hovered">
            <div className='hoverPath'>
                <svg width="20" height="20" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className={isHovered ? 'hovered' : ''}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <path class="my-path" d="M12.0459 0.242002L7.89795 0.232002H7.89595C3.52195 0.232002 0.0959473 3.659 0.0959473 8.034C0.0959473 12.132 3.28195 15.24 7.56095 15.404V19.232C7.56095 19.34 7.60495 19.518 7.68095 19.635C7.82295 19.86 8.06495 19.982 8.31295 19.982C8.45095 19.982 8.58995 19.944 8.71495 19.864C8.97895 19.696 15.1879 15.724 16.8029 14.358C18.7049 12.748 19.8429 10.388 19.8459 8.046V8.029C19.8399 3.662 16.4159 0.242002 12.0459 0.241002V0.242002ZM15.8329 13.214C14.6989 14.174 10.9709 16.619 9.06095 17.857V14.67C9.06095 14.256 8.72595 13.92 8.31095 13.92H7.91495C4.25495 13.92 1.59695 11.444 1.59695 8.034C1.59695 4.5 4.36495 1.732 7.89695 1.732L12.0439 1.742H12.0459C15.5779 1.742 18.3459 4.508 18.3479 8.038C18.3449 9.948 17.4059 11.882 15.8339 13.214H15.8329Z" fill="#D9D9D9" />
                </svg>
            </div>

            <span className="tweet-title-detail">{tweet.comment}</span>
        </div>
    )
}

export function TweetReply() {
    const tweet = useContext(datasContexte)

    const [isHovered2, setIsHovered] = useState(false);

    const handleMouseEnter2 = () => {
        setIsHovered(true);
    };

    const handleMouseLeave2 = () => {
        setIsHovered(false);
    };
    return (
        <div className="tweet-action hovered2">
            <div className='hoverPath2'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                    className={isHovered2 ? 'hovered2' : ''}
                    onMouseEnter={handleMouseEnter2}
                    onMouseLeave={handleMouseLeave2}>
                    <path className="my-path2" d="M19.8083 13.0583C19.565 12.8142 19.1692 12.8142 18.925 13.0583L17.075 14.9083V6.37499C17.075 4.65166 15.6725 3.24999 13.95 3.24999H9.07501C8.73001 3.24999 8.45001 3.52999 8.45001 3.87499C8.45001 4.21999 8.73001 4.49999 9.07501 4.49999H13.95C14.9833 4.49999 15.825 5.34166 15.825 6.37499V14.9083L13.975 13.0583C13.7308 12.8142 13.335 12.8142 13.0917 13.0583C12.8483 13.3025 12.8467 13.6983 13.0917 13.9417L16.0083 16.8583C16.1292 16.9808 16.2892 17.0417 16.45 17.0417C16.6108 17.0417 16.7692 16.9817 16.8917 16.8583L19.8083 13.9417C20.0533 13.6983 20.0533 13.3025 19.8083 13.0583ZM10.925 15.7917H6.05001C5.01667 15.7917 4.17501 14.95 4.17501 13.9167V5.38332L6.02501 7.23332C6.14834 7.35582 6.30834 7.41666 6.46834 7.41666C6.62834 7.41666 6.78834 7.35582 6.91001 7.23332C7.15417 6.98916 7.15417 6.59332 6.91001 6.34999L3.99334 3.43332C3.74917 3.18832 3.35334 3.18832 3.11001 3.43332L0.19334 6.34999C-0.0516599 6.59332 -0.0516599 6.98916 0.19334 7.23332C0.43834 7.47749 0.832507 7.47749 1.07667 7.23332L2.92667 5.38332V13.9167C2.92667 15.64 4.32917 17.0417 6.05167 17.0417H10.9267C11.2717 17.0417 11.5517 16.7617 11.5517 16.4167C11.5517 16.0717 11.2708 15.7917 10.9267 15.7917H10.925Z" fill="#6E767D" />
                </svg>
            </div>

            <span className="tweet-title-detail">{tweet.retweetCount}</span>
        </div>
    )

}
export function TweetLike() {
    const tweet = useContext(datasContexte)
    const [isHovered3, setIsHovered3] = useState(false);
    const [count, setcount] = useState(tweet.retweetCount);
    const [icon, seticon] = useState(false);

    const handlclique = () => {
        if (!icon) {
            setcount(count + 1)
        } else {
            setcount(count - 1)
        } return (seticon(!icon))

    }
    const handleMouseEnter3 = () => {
        setIsHovered3(true);
    };

    const handleMouseLeave3 = () => {
        setIsHovered3(false);
    };
    return (
        <div className="tweet-action hovered3">
            <div className='hoverPath3'>
                <svg xmlns="http://www.w3.org/2000/svg"
                    fill={icon ? "red" : "none"} width="30" height="20" viewBox="0 0 24 24" stroke={icon ? "red" : "gray"} stroke-width="2"
                    className={isHovered3 ? 'hovered3' : ''}
                    onMouseEnter={handleMouseEnter3}
                    onMouseLeave={handleMouseLeave3}
                    onClick={handlclique}
                    stroke-linecap="round" stroke-linejoin="arcs">
                    <path className="my-path3" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C16.09 3.81 17.76 3 19.5 3 22.58 3 25 5.42 25 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>

            </div>

            <span className="tweet-title-detail">{count}</span>
        </div>
    )
}
export function Downlod() {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <div className="tweet-action hovered">
            <div className='hoverPath'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                    className={isHovered ? 'hovered' : ''}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}>
                    <path className="my-path" d="M13.6084 4.72501L9.4417 0.558339C9.19753 0.314172 8.8017 0.314172 8.55836 0.558339L4.3917 4.72501C4.1467 4.96917 4.1467 5.36501 4.3917 5.60834C4.6367 5.85167 5.03086 5.85334 5.27503 5.60834L8.37503 2.50834V11C8.37503 11.345 8.65503 11.625 9.00003 11.625C9.34503 11.625 9.62503 11.345 9.62503 11V2.50834L12.725 5.60834C12.8467 5.73084 13.0067 5.79167 13.1667 5.79167C13.3267 5.79167 13.4867 5.73167 13.6084 5.60834C13.8525 5.36417 13.8525 4.96917 13.6084 4.72501Z" fill="#6E767D" />
                    <path className="my-path" d="M15.4234 16.7867H2.57669C1.52335 16.7867 0.666687 15.93 0.666687 14.8767V10.1667C0.666687 9.82166 0.946687 9.54166 1.29169 9.54166C1.63669 9.54166 1.91669 9.82166 1.91669 10.1667V14.8767C1.91669 15.2408 2.21252 15.5367 2.57669 15.5367H15.4234C15.7875 15.5367 16.0834 15.2408 16.0834 14.8767V10.1667C16.0834 9.82166 16.3634 9.54166 16.7084 9.54166C17.0534 9.54166 17.3334 9.82166 17.3334 10.1667V14.8767C17.3334 15.93 16.4767 16.7867 15.4234 16.7867Z" fill="#6E767D" />
                </svg>
            </div>
        </div>
    )

}

export function TweetProfil({postImages, username, names, followersCounts}) {

    return (<>
        <div className="tweet-avatar">
            <Link to={`/profile?postImages=${postImages}&username=${username}&names=${names}&followersCount=${followersCounts}`}>
                <img src={postImages} alt="logo tweet" />
            </Link>

        </div>
    </>
    )
}


export default Tweets;

