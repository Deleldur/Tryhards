import React, { Component } from 'react'
class Content extends Component {
    render() {
        return (

            <div>

             <section id="welcome">

             <h1 className="welcome">
                 Welcome to Tryhards!
            </h1>
            
             
             <p className="info">
                 This is Tryhards a ...serius? guild! well
                 atleast we have fun! We make our 
                 home on the EU-Realm Ashbringer as
                 the mighty Alliance! and we have been around since the
                 launch of classic World of Warcraft and we are currently
                 clearing three Raids in one night and we have raid days and 
                 hours on Mondays and Wednesdays from 20:00 to 23:00 with invites
                 going out at 19:45 as well as a community effort to aquire World
                 buffs either 2 - 3 hours before raid or the night before a raid.
                 We have certain requierments of what consumables each class/specc 
                 should bring and use as well as helping out with guild bank for 
                 certain specific items. The most important thing to remember 
                 is that despite the name the guild is pretty laid back as long
                 as everyone pitch in and do their part of the job. If you think 
                 you have what it takes to be part of this dysfunctional family 
                 feel free to look further down the page on the recruitment section. 
            </p>
            
            </section>

            <div className="picture"></div>

            <hr className="line-break"/>

            
            <section id="media">
            <h1 className="youtube-title">Tryhards VS Neffarian</h1>
            <iframe className="youtube-video" width="70%" height="500px" src="https://www.youtube.com/embed/MU9XHQo2BpU" 
            frameorder="" allow="accelerometer; autoplay; fullscreen; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
            </section>

            <h2 className="more-video"> For more videos check out Tryhards Youtube channel</h2>
             

            <a className="youtube-link" href="https://www.youtube.com/channel/UCmw6z9OR-kzLATt_6w_-0hA?view_as=subscriber" target="_blank">
            </a>

            <section id="recruitment">
            
            <hr className="line-break"/>

            </section>
            
            <h1 className="recruitment">
                Recruitment
            </h1>

            

            <p className="info">
                 We are currently looking for the following classes
            </p>     

                 <ul className="ul">

                    <li>Warlock</li>

                      <br></br>

                    <li>Priest</li>

                      <br></br>

                    <li>Druid</li>

                </ul>
                
                <p className="info">
                 But ofcourse we are always also looking for exeptional players of any class,
                 if you think you got what it takes to be of benefit to out guild please contact 
                 anyone of our officers or guild master so we can have a chatt.
                </p>

            

            <hr className="line-break"/>

            <section id="contacts">

            <h1 className="recruitment">
                Contacts
            </h1>

            </section> 

            <p className="info">
              To get in touch with us please add us to either Battle.ID or Discord
            </p>
              
              <ul className="ul">
                    <li >Poxpoone#3483 - battle.ID</li>
                    <li>Poxpoone#7200 - Discord</li>
                    
                    <br></br>
                    
                    <li>Kelthar#4950 - battle.ID</li>
                    <li>Kelthar#1209 - Discord</li>

                    <br></br>

                    <li>Aritus#4560 - battle.ID</li>
                    <li>Aritus#1230 - Discord</li>

                    <br></br>

                    <li>Skade#0097 - battle.ID</li>
                    <li>Skade#6431 - Discord</li>
                </ul>
            

               

            </div>

        )
    }
}

export default Content