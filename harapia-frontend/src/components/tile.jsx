import './Tile.css';
import goodImg from "../Goods/1791364.png";

const Tile = (props)=>{
    console.log(props.image);
  return (
    <div className="tile">
        <img className="tileImg" src={goodImg}/>
    </div>
  )
}

export default Tile