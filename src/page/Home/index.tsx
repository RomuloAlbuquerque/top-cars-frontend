import ButtonHome from 'components/ButtonHome'
import CardHome from 'components/CardHome'
import './styles.css'

const Home = ()=> {
    return (
        <div className='main-home-container'>
            <CardHome />
            <ButtonHome />
        </div>
    )
}

export default Home