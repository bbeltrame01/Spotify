import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Main = () => {
  return (
    <div className="main">
      <div className="item-list">
        <div className="item-list__header">
          <h2>Artistas populares</h2>
          <a>Mostrar tudo</a>
        </div>

        <div className="single-item">
          <div className="single-item__div-image-button">
            <div className="single-item__div-image">
              <img
                className="single-item__image"
                src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4"
                alt="Henrique & Juliano"
              />
            </div>
            {/*Icone */}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Main;