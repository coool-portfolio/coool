import './video.css'

function Video({ current }) {
    // console.log(current)
    return (
        <>
            {current &&
                <iframe id="video" className="video" title={current.title} src={current.id} allow="autoplay; fullscreen" frameBorder={0} allowFullScreen></iframe>
            }
        </>
    )
}

export default Video;