import trend from "../assets/trend.webp";
import trend1 from "../assets/trend1.webp";
import trend2 from "../assets/trend2.webp";
import trend3 from "../assets/trend3.webp";
import trend4 from "../assets/trend4.webp";
import trend5 from "../assets/trend5.webp";
import trend6 from "../assets/trend6.webp";
import trend7 from "../assets/trend7.webp";

function Trends() {
  const movies = [
    {
      id: 1,
      url: trend,
    },
    {
      id: 2,
      url: trend5,
    },
    {
      id: 3,
      url: trend2,
    },
    {
      id: 4,
      url: trend3,
    },
    {
      id: 5,
      url: trend4,
    },
     {
      id: 6,
      url: trend1,
    },
    {
      id: 7,
      url: trend6,
    },
    {
      id: 8,
      url: trend7,
    },
    {
      id: 9,
      url: trend,
    },
    {
      id: 10,
      url: trend5,
    },
  ];
  return (
    <div className="py-10">
      <div className="font-bold text-2xl">Trending now</div>
      <div className="flex gap-10 overflow-y-hidden overflow-scroll hide-scrollbar">
        {movies.map((movie, index) => {
          return (
            <div key={index} className="pt-5 relative">
              <img className="rounded-2xl min-w-[190px] min-h-[280px] " src={movie.url} alt="" />
              <div className="text-9xl font-bold absolute bottom-0 left-[-25px] text-stroke-white">
                {movie.id}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Trends;
