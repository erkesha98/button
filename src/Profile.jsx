import ImgUrl from './images/unnamed.webp';



const Profile = () => {
    const imgClick=(e)=>e.target.style.display="none";

  return (
   <img  onClick={(e)=> imgClick(e)} src= {ImgUrl} alt="boy" />
  )
}

export default Profile