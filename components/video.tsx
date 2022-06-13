import React from 'react'

export default function YoutubeEmbed ({ embedId }: { embedId: string }) {
   return  <div className="video-responsive">
      <iframe
        className="h-full w-full object-cover object-center sm:rounded-lg"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  }

