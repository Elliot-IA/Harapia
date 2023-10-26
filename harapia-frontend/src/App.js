import logo from './logo.svg';
import './App.css';
import Tile from './components/tile.jsx';
import Backdrop from './components/backdrop.jsx';
import marketTable from './marketTable';

function App() {
    console.log("Market Table: " + JSON.stringify(marketTable));
    return (
        <div id="supremeWrapper">
           
            <div id="tileContainer">
                {[...marketTable.goodList].map((good, index) =>
                    <Tile image={"../Goods/"+good[0]} cost={good[1]}></Tile>
                )}
            </div>
        </div>
    );
}

export default App;