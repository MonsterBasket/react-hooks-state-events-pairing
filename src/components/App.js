import data from "../data/video.js";
import Video from "./Video.js";
import VideoInfo from "./VideoInfo.js";

function App() {
  console.log("Here's your data:", data);

  return (
    <div className="App">
      <Video data={data}>
        <VideoInfo data={data}/>
      </Video> 
    </div>
  );
}

export default App;
