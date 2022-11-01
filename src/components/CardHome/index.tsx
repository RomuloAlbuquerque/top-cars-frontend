import './styles.css'
import carHome from 'assets/images/car-header.svg'

const CardHome = ()=> {
    return (
        <div className='main-card-home-container'>
            <div className='img-card-home'>
                <img src={carHome} alt="carro amarelo" />
            </div>

            <div className='text-card-home'>
                <h1>O carro perfeito para você</h1>
                <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
            </div>

        </div>
    )
}

export default CardHome