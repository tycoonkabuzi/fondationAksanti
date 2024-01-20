import "../../style/Apropos.css";
import ceoImage from "../../assets/CEO.jpg";
import imageHelp from "../../assets/imageHelp.jpg";
function Apropos() {
  return (
    <div className="mainApropos">
      <h1>Apropos</h1>
      <hr className="line"></hr>
      <div className="contentApropos">
        <div className="leftContent">
          <div className="leftImage">
            <img alt="Owner of the team" src={ceoImage} />
          </div>
          <div className="leftSideText">
            <h2> Le comemncement de la fondation</h2>
            <p>
              Nous croyons en un avenir meilleur pour tous. Chez la Fondation
              Aksanti Kabuzi paul, notre mission est de catalyser le changement
              positif en soutenant des causes essentielles qui ont un impact
              durable. Nous nous efforçons de construire des ponts vers un monde
              plus équitable, en mettant l'accent sur l'éducation, la santé,
              l'environnement, et bien plus encore. Aksanti Kabuzi Paul
            </p>
          </div>
        </div>
        <div className="rightContent">
          <img alt="imageHelp" src={imageHelp} />
          <button className="give"> Give to who needs</button>
        </div>
      </div>
    </div>
  );
}
export default Apropos;
