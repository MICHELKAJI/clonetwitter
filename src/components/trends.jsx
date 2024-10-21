import imags from '../images/Search-Icon.png'
import icon from '../images/Explore.svg'
import icone from '../images/Options.png'
import img from '../images/Common-More-Button.png'
import Button from './buttonTwitter'
import { Link } from 'react-router-dom'

function Trends(){
    return(

        <div className='trend'>
             <div>
                  <Inputsearch/>
              </div>
            <div className='trendstyle'>
                <TitleTrends/>
                <Trend/>
                <Trend/>
                <Trend/>
                <Trend/>
                <ShowMore/>
            </div>
            <div className='trends'>
                <TitleSidbar/>
                <Link to='/profile?profilTweet=src/images/profile.png&tweetTitle=undefined&tweetpseudo=undefined'>
                <Follow profil="src\images\tweetprofile.png" tilte="CNN" icon= "src\images\Group.svg" tiltTow="@CNN"/>
                </Link>
                <Link to='/profile?profilTweet=src/images/profile.png&tweetTitle=undefined&tweetpseudo=undefined'>
                <Follow profil="src\images\twetIcone.png" tilte="NEW YORK TIM" icon="src\images\Group.svg" tiltTow="@CNN"/>
                </Link>
                <Link to ='/profile?profilTweet=src/images/profile.png&tweetTitle=undefined&tweetpseudo=undefined'>
                <Follow profil="src\images\twitter.svg" tilte="Twitter" icon= "src\images\Group.svg" tiltTow="@CNN"/>
                </Link>
                
                
                
                <ShowMore/>
            </div>
        </div> 
        )
} 

function Inputsearch(){
    return(
        <div className='inputstyle'>
            <img src={imags} alt="icon"/>
            <input className='inputscolor' type="text" placeholder='Seach Twitter'/>
        </div>
    )
}

function Trend(){
    return(
        <div className=''>
            <div className='Titletrend'><span className='tweet-title-details'>Trending in Turkey</span><img src={img} alt="icon" /></div>
            <div className='titleTrends'><img src={icon} alt="icon"/><strong className='titleTrends'>SQUID</strong></div>
            <span className='tweet-title-details'>2.066 Tweets</span>
        </div>
    )
}

function TitleTrends(){
    return(
        <div className='Titletrend'>
            <h3>Trends for you</h3>
            <img src={icone} alt="icon"/>
        </div>
    )
}
function ShowMore(){
    return(
        <div>
            <a href="#">Show More</a>
        </div>
    )
}

function Follow({profil, tilte, icon, tiltTow}){
    return(
        <div>
            <div className='follow'>
                <div className='follows'>
                <div><img className='avatare'src={profil} alt="icon" /></div>
                <div            >
                    <div className='follower'>
                        <h3 className='tweet-title-author'>{tilte}</h3>
                         <img src={icon} alt="icon" />
                      </div>
                    <span className='tweet-title-details'>{tiltTow}</span>
                    </div>
                  </div>
                    <Button style="buttonFollow">Follow</Button>
            </div>
        </div>
    )
}

function TitleSidbar(){
    return(
        <div>
            <h3>Who to follow</h3>
        </div>
    )
}

export default Trends;