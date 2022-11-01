import "./styles.css";

const FindCatalogo = () => {
  return (
    <>
        <div className="main-find-container">
          <form className="form-find" role="search">
            <input
              className="form-control input-find"
              type="search"
              placeholder="Digite sua busca aqui"
              aria-label="Search"
            />
            <button className="btn button-find" type="submit">
              Buscar
            </button>
          </form>
        </div>
    </>
  );
};

export default FindCatalogo;
