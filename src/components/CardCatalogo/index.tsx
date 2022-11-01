import "./styles.css";
import carCatalogo from "assets/images/car-card.svg";

const CardCatalogo = () => {
  return (
    <div className="main-card-catalogo">
      <div className="img-card-catalogo">
        <img src={carCatalogo} alt="carro vermelho" />
      </div>
      <h3>Audi Supra TT</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
        nisi
      </p>
      <button className="btn button-catalogo">
        <h6>Comprar</h6>
      </button>
    </div>
  );
};

export default CardCatalogo;
