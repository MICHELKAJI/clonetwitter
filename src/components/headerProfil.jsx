function HeaderProfil({name, soustitle}){
    return(
        <header className="headerStyle">
            <h1 className="page-title">{name}</h1>
            <span className="titlesuser">{soustitle}</span>
        </header>
    )
}


export function BannerProfil(banner){
    return(
           <div className="bannerStyle">
    
           </div>
       
        
    )
}
export default HeaderProfil;