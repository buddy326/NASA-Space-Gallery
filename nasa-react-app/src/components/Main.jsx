export default function Main(props) {
    const {data} = props;
    return (
        <div className="imgContainer">
            <img src={data.hdurl} alt="NASA Image" className="bgImage"></img>
        </div>
    )
}