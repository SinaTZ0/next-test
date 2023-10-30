"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

function ShowDataCard() {
  const Data = useSelector((state: RootState) => state.tagsState.Tags);

  return (
    <div className='bg-gray-200 rounded-md shadow-lg mt-4 p-3 md:w-3/5 md:mx-auto mb-2 flex flex-row flex-wrap '>
      {Object.keys(Data).map(function (key: string) {
        return (
          <div
            key={key}
            className='p-2 m-auto mb-2 bg-white font-bold shadow-md rounded-md'
          >
            {Data[key].Name + " " + Data[key].LastName}
          </div>
        );
      })}
    </div>
  );
}

export default ShowDataCard;
