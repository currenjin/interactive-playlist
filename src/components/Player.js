import React, { useEffect, useRef } from 'react';

export default function Player({ videoId }) {
    const playerRef = useRef(null);
    const playerInstance = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(script);

        window.onYouTubeIframeAPIReady = () => {
            playerInstance.current = new window.YT.Player(playerRef.current, {
                height: '390',
                width: '640',
                videoId: videoId,
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
        };

        return () => {
            document.body.removeChild(script);
        };
    }, [videoId]);

    useEffect(() => {
        if (playerInstance.current) {
            playerInstance.current.loadVideoById(videoId);
        }
    }, [videoId]);

    const onPlayerReady = (event) => {
        event.target.playVideo();
    };

    const onPlayerStateChange = (event) => {};

    return (
        <div>
            <h3>Now Playing</h3>
            <div ref={playerRef} className="youtube-player"></div>
        </div>
    );
}
