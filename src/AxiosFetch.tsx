import axios from "axios";
import { useEffect, useState } from "react";

const AxiosFetch = () => {
  const [photoList, setPhotoList] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRepo = async () => {
      setIsLoading(true);
      const { data } = await axios.get(
        `http://jsonplaceholder.typicode.com/photos?_start=0&_limit=3&_page=${page}`,
      );
      setPhotoList([...data]);
      setIsLoading(false);
    };
    fetchRepo();
  }, [page]);

  return (
    <div>
      <h2>Axios fetch api</h2>
      {isLoading && "loading..."}
      <ul>
        {!isLoading &&
          photoList?.map((photo: any, index: number) => {
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

export default AxiosFetch;
