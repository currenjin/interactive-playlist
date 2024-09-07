import React, { useEffect, useRef } from 'react';

export default function Player({ videoId, onSongEnd }) {
    const playerRef = useRef(null);
    const playerInstance = useRef(null);

    useEffect(() => {
        if (!window.YT) {
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
        } else {
            playerInstance.current = new window.YT.Player(playerRef.current, {
                height: '390',
                width: '640',
                videoId: videoId,
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
        }

        return () => {
            if (playerInstance.current) {
                playerInstance.current.destroy();
            }
        };
    }, [videoId]);

    const onPlayerReady = (event) => {
        event.target.playVideo();
    };

    const onPlayerStateChange = (event) => {
        if (event.data === window.YT.PlayerState.ENDED) {
            onSongEnd();
        }
    };

    return (
        <div>
            <h3>Now Playing</h3>
            <div ref={playerRef} className="youtube-player"></div>
        </div>
    );
}
