
import './Players.scss'
import { useState } from 'react'
import Player_profile from './Player_profile'


function Playerbox(props) {
  const [menuOpen,setMenuOpen] = useState(false)
  const link = 'https://minotar.net/avatar/'
  const size = '/90'
  console.log(menuOpen)

    return(
      <>
      
        <div className="box">
          <img className="playerhead" src={`${link}${props.name}${size}`} alt="" />
          <div className="playerinfo"><h2 className='name'>{props.name}</h2><h4 className='desc'>{props.desc}</h4></div>
          <div className="infobtn" onClick={() => setMenuOpen(!menuOpen)} ><h3 className='btntxt'>MORE INFO</h3></div>
        </div>
        {menuOpen && <Player_profile menuOpen={menuOpen} setMenuOpen={setMenuOpen} name={props.name}/>}
      </>
    )
}

 function Players(){
  const names = ['Skullable','OnyxRare','Lime_Terror','mmessedd','Mr_Minehunter','Mgoku42','Unknownghost__'];
  const nameList = names.map((name, index) => (
    <><Playerbox menuOpen={menuOpen} setMenuOpen={setMenuOpen}name={name} key={index} >{name}</Playerbox>
    </>
  ));
  
    return (
      <div className="container">
        <h1 className='title'>MEMBERS</h1>
        <div className="wrapper">
          {nameList}
        </div>
      </div>
    );
}

export default Players