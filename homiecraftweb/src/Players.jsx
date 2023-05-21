
import './Players.scss'




function Playerbox(props){

    const link = 'https://minotar.net/avatar/'
    const size = '/90'

    return(
    <div className="box">
        <img className="playerhead" src={`${link}${props.name}${size}`} alt="" />
        <div className="playerinfo"><h2 className='name'>{props.name}</h2><h4 className='desc'>{props.desc}</h4></div>
        <div className="infobtn"><h3 className='btntxt'>MORE INFO</h3></div>
    </div>
    )
}

 function Players(){
    return (
      <div className="container">
        <div className="wrapper">
          <Playerbox name="Skullable" desc="hes a pretty cool guy" />
          <Playerbox name="OnyxRare" desc="hes a pretty cool guy" />
          <Playerbox name="Lime_Terror" desc="hes a pretty cool guy" />
          <Playerbox name="Mmessedd" desc="shes a pretty cool gal" />
          <Playerbox name="Mr_Minehunter" desc="hes a pretty cool guy" />
        </div>
      </div>
    );
}

export default Players