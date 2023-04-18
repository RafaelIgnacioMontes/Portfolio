import profilepic from '../images/Profile pic.png'
const Home = () => {

    return  (
    <main>
      
        <div className='majorhomediv'>
        <div className='profilecard'>
     
        <img id='profilepic'src={profilepic} alt="headshot" />
        <div className='textdiv'>FULL STACK DEVELOPER 💪</div>
        <div className='textgraph'> <p id='paragraph'>I'm looking for an opportunity that will help me develop my skills as a front and back end developer. I am based out of Colorado Springs, Colorado. 📍 </p></div>
        </div>
        </div>
        <div className='experience'>EXPERIENCE</div>
</main>

        )
}

export default Home