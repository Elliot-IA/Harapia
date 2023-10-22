import './Tile.css';

const Tile = (props)=>{
    console.log(props.image);
  return (
    <div className="tile">
        <img src={props.image}/>
    </div>
  )
}

export default Tile