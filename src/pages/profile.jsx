import React from "react";
import Sidebare from "../components/sidebare";
import Trends from "../components/trends";
import HeaderProfil, { BannerProfil } from "../components/headerProfil";
import { TweetFilter } from "../components/tweet";



function Profil(){
    return(
        <>
        <aside>
          <Sidebare/>
        </aside>
        <main className="timeline">
            <HeaderProfil name= "MichelKaji"/>
            <BannerProfil/>
            <TweetFilter/>

       </main>
       <aside className='asideTow'>
       <Trends/>
       </aside>
      </>
        
    )
}
export default Profil;