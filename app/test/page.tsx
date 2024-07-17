"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { createApi } from "unsplash-js";

type Photo = {
  id: number;
  width: number;
  height: number;
  description: string;
  urls: { large: string; regular: string; raw: string; small: string };
  color: string | null;
  user: {
    username: string;
    name: string;
  };
};

const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

const api = createApi({
  // Don't forget to set your access token here!
  // See https://unsplash.com/developers
  accessKey: accessKey as string,
});

const PhotoComp: React.FC<{ photo: Photo }> = ({ photo }) => {
  const { user, urls } = photo;

  return (
    <>
      <Image
        className="img"
        src={urls.regular}
        width={360}
        height={360}
        alt={photo.description}
      />
      <a
        className="credit"
        target="_blank"
        href={`https://unsplash.com/@${user.username}`}
      >
        {user.name}
      </a>
    </>
  );
};

export default function Test() {
  const [data, setPhotosResponse] = useState(null);

  useEffect(() => {
    api.search
      .getPhotos({ query: "cat", orientation: "landscape" })
      .then((result) => {
        console.log(result);

        setPhotosResponse(result);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  } else if (data.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
      </div>
    );
  } else {
    return (
      <div className="feed">
        <ul className="columnUl">
          {data.response.results.map((photo) => (
            <li key={photo.id} className="li">
              <PhotoComp photo={photo} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
