import { Link } from "react-router-dom";
import Button from "./buttonTwitter";

function Sidebare(){
    return(
        <div className="sidebar">
             
            <IconSidebar icon ="src\images\TwitterS.svg" text=""/>
            <IconSidebar icon="src\images\Home-Fill.svg" text ="Home" routes ='/'/>
            <IconSidebar icon="src\images\Explore.svg" text ="Explore"/>
            <IconSidebar icon="src\images\Notifications.svg" text ="Notifications"/>
            <IconSidebar icon="src\images\Messages.svg" text ="Message"/>
            <IconSidebar icon="src\images\Bookmarks.svg" text ="Bookmarks"/>
            <IconSidebar icon="src\images\Lists.svg" text ="Lists"/>
            <IconSidebar icon="src\images\Profiles.svg" text ="Profile" routes='/profile?postImages=src/images/profile.png&names=Michel&handle=names'/>
            <IconSidebar icon="src\images\More.svg" text ="More"/>
            <Button style="buttonTow">Twitter</Button>

        </div>
    ) 
}

function IconSidebar({icon, text, routes }){
    return(
        <div className="sidebarIcon tweet-title hover">
            <Link to ={routes} className="sidebarIcon tweet-title"> <img src={icon} alt="icon" />
            <h3>{text}</h3></Link>
            
        </div>
    )
}

export default Sidebare;


