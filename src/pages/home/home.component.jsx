import CardContainer from "../../component/card/card-container/card-container.component";
import Card from "../../component/card/card-contents/card.component";
import Navigator from "../../component/navigator/navigator.component";

import "./home.styles.scss";

function HomePage({ categories }) {
  return (
    <div id="home" className="app-container">
      <Navigator />
      <CardContainer className='card-container' categories={categories}/>
    </div>
  );
}

export default HomePage;
