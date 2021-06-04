import axios from "axios";
import { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";

const fetcher = async (url: string) => {
  const { data } = await axios.get(url);
  if (data) {
    return data;
  }
};

const prefetch = async (url: string) => {
  mutate(url, await fetcher(url), false);
};

const usePrefetchPhoto = (page: number) => {
  useEffect(() => {
    prefetch(
      `http://jsonplaceholder.typicode.com/photos?_start=0&_limit=3&_page=${
        page + 1
      }`,
    );
  }, [page]);
};

// export const useFetchPhoto = (page: number) => {
//   const { data, error } = useSWR(
//     `http://jsonplaceholder.typicode.com/photos?_start=0&_limit=3&_page=${page}`,
//     { fetcher: (url) => fetcher(url) },
//   );
//   return { data, error };
// };

const SwrFetch = () => {
  const [page, setPage] = useState(1);
  //   const { data, error } = useFetchPhoto(page);
  const { data, error } = useSWR(
    `http://jsonplaceholder.typicode.com/photos?_start=0&_limit=3&_page=${page}`,
    { fetcher: (url) => fetcher(url) },
  );
  usePrefetchPhoto(page);
  const isLoading = !data && !error;

  return (
    <div>
      <h2>Swr Fetch</h2>
      {isLoading && "loading..."}
      <ul>
        {!isLoading &&
          data?.map((photo: any, index: number) => {
            return (
              <li key={index}>
                <p>{photo?.id}</p>
                <img
                  src={photo?.url}
                  width={100}
                  height={100}
                  alt="photo_cover"
                />
              </li>
            );
          })}
      </ul>
      <button onClick={() => setPage((prev) => (prev === 1 ? 1 : prev - 1))}>
        {" "}
        back page
      </button>
      <button onClick={() => setPage((prev) => prev + 1)}> next page</button>
    </div>
  );
};

export default SwrFetch;
