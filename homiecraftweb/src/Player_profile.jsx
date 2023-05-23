import './Player_profile.scss'
import Players from './Players';


function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

export default function Player_profile({ menuOpen,setMenuOpen ,...props }) {
    const link = 'https://api.mojang.com/users/profiles/minecraft/'
    var response = httpGet(`${link}${props.name}`)
    var result = JSON.parse(response)
    var UUID = result.id
    const skinlink = 'https://visage.surgeplay.com/full/'
    const skindownload = 'https://minotar.net/download/'

  return (
        <>
    <div className={"menu " +(menuOpen && "active")}>
        <h1 className='heading'>Player info</h1>
        <div className="wrapper">
        <div className="skinwrapper">
            <img src={`${skinlink}${UUID}`} alt='' className="skin"></img>
            <div className="downloadbtn"><a className='dllink' href={`${skindownload}${props.name}`}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" margin='5px' fill="currentColor" class="bi bi-download" viewBox="0 0 16 16"> <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/> <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/> </svg>     DOWNLOAD SKIN</a></div>
        </div>
        <div className="playerinfo">
            <div className="txt"><h2 className='h2'>Name:  {props.name}</h2></div>
            <div className="txt"><h2 className='h2'>UUID:  {UUID}</h2></div>
            <div className="txt"><h2 className='h2'>Description:</h2></div>
        </div>
        </div>
        <svg className='svg' onClick={()=>setMenuOpen(false)} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 15 15"><path fill="currentColor" d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z"/></svg>
    </div>
    
    </>
  )
}
