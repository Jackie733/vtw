import { Suspense } from "react";
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

const accessKey = process.env.UNSPLASH_ACCESS_KEY;

const api = createApi({
  accessKey: accessKey as string,
});

// FIX: Type any
const PhotoComp = ({ photo }: any) => {
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

export default async function Test() {
  const data = await api.search.getPhotos({
    query: "tokyo",
    orientation: "landscape",
  });

  if (data.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
      </div>
    );
  } else {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="feed">
          <ul className="columnUl">
            {data.response.results.map((photo) => (
              <li key={photo.id} className="li">
                <PhotoComp photo={photo} />
              </li>
            ))}
          </ul>
        </div>
      </Suspense>
    );
  }
}
