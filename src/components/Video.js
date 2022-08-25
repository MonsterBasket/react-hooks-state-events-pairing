function Video({data, children}){
return       <><iframe
width="919"
height="525"
src={data.embedUrl}
frameborder="0"
allowfullscreen
title={data.title}
/>
{children}
</>
}
export default Video;