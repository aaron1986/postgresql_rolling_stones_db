import { useEffect, useState } from "react";

export default function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9090/api/albums")
      .then((res) => res.json())
      .then((data) => setAlbums(data.albums));
  }, []);

  return (
<div className="albums_page">
  <h1>Rolling Stones Albums</h1>

  <div className="img-container">
    {albums.map((album) => (
    <div className="album_page" key={album.album_title}>
      <h2>{album.album_title}</h2>

      {album.album_cover && (
        <img
          src={album.album_cover}
          alt={album.album_title}
          className="card_image"
        />
      )}

      <p className="album_page_description">
        Released in {album.year_released}
      </p>
    </div>
  ))}
    </div>
</div>

  );
}

