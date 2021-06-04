// import { useFetchPhoto } from "SwrFetch";
const OtherSwrFetch = () => {
  //   const { data, error } = useFetchPhoto(1);
  //   const isLoading = !data && !error;
  return (
    <div>
      <h2>test swr fetch</h2>
      {/* <ul>
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
      </ul> */}
    </div>
  );
};
export default OtherSwrFetch;
