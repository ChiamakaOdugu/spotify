import spotify from '../../assets/spotify.svg'
import {ReactComponent as spotifyb} from '../../assets/spotifyb.svg'
import style from './style.module.css'
 
export function Logo(props) {
  const myImage = props.useWhite ? spotify : spotifyb
    return (
        <a href='#/dashboard' className={style.logo}>
          <img src= {myImage} />
        </a>
    )
   
}
 
export function NavigationLogoText (){
  return (<h1>spotify</h1>)
}