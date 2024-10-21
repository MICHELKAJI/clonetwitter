import React from 'react';
import Header from '../components/header';
import Sidebare from '../components/sidebare';
import Trends from '../components/trends';
import Tweet from '../components/tweet';



function Home() {
  return (
    <>
      <aside>
        <Sidebare/>
      </aside>
      <main className="timeline">
       <Header/>
       <Tweet/>
     </main>
     <aside className='asideTow'>
     <Trends/>
     </aside>
    </>
    
  );
}


export default Home;