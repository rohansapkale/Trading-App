import React from 'react';

const VideoSection = () => {
  return (
    <div className="videoContainer relative overflow-hidden w-full h-64 sm:h-80 lg:h-[500px]">
      <div className="videoSizer absolute inset-0">
        <video
          className="video w-full h-full object-cover"
          autoPlay
          loop
          playsInline
          disableremoteplayback
        >
          <source
            src="https://static.tradingview.com/static/bundles/chart-big.hvc1.28edcb3d97450fcb799f.mp4"
            type="video/mp4;codecs=hvc1.1.0.L150.b0"
          />
          <source
            src="https://static.tradingview.com/static/bundles/chart-big.a7d994603f412a3a4a52.webm"
            type="video/webm"
          />
          <source
            src="https://static.tradingview.com/static/bundles/chart-big.avc1.f201e709ee463d4a6893.mp4"
            type="video/mp4;codecs=avc1"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoSection;
