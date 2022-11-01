import CardCatalogo from "components/CardCatalogo";
import FindCatalogo from "components/FindCatalogo";
import "./styles.css";

const Catalogo = () => {
  return (
    <div className="main-catalogo-container">
      <FindCatalogo />
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <CardCatalogo />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <CardCatalogo />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <CardCatalogo />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <CardCatalogo />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <CardCatalogo />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <CardCatalogo />
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2">
            <CardCatalogo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogo;
