import Card from '../../component/card/card.component';
import Navigator from '../../component/navigator/navigator.component';

import './home.styles.scss';

function HomePage({categories}) {
    return (
        <div className="app-container">
      <Navigator/>
      <div className="card-container">
        {categories.map((data) => (
         <Card card={data}/>
        ))}
      </div>
    </div>
    )
}

export default HomePage;