export const BackgroundVideo = () => {

    return (
        <div className="background-video">
            <video autoPlay loop muted>
                <source src="/BgVideo.mp4" type="video/mp4" />
                {/* Add more source elements for different video formats if needed */}
            </video>
        </div>
    );
}