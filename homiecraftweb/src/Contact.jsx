import './contact.scss'


function ProfileEmbed(props){


  return (
    <div className="profile-embed">
      <div className="banner"></div>
      <img className="avatar" src={props.pfp} alt="Avatar" />
      <div className="info">
        <h2 className="username">{props.name}</h2>
        <div className="status">
          <span className="status-icon"></span>
          Online
        </div>
      </div>
    </div>
  );
};

export default function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="wrapper">
          <h1 className='title'>CONTACTS</h1>
          <div className="profiles">
          <ProfileEmbed name='Skullable#9575' pfp='https://cdn.discordapp.com/avatars/622446455839260703/1daeeaf99d599127edee9ecf9a1a9a83?size=1024'/>
          <ProfileEmbed name='Onyx Rare#4376' pfp='https://cdn.discordapp.com/avatars/734427959519084555/8657b17212b452891fae30ce396b29d2?size=1024'/>
          </div>
        </div>
        <div className="bubbles">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>
      </div>
    </div>
  );
}
