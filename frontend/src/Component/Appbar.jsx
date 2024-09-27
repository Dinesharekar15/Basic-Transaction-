export const Appbar = () => {
  return (
    <>
      <div className="shadow h-14 flex justify-between items-center bg-blue-600 text-white px-4">
        <div className="flex flex-col justify-center">
          <span className="font-semibold text-base md:text-lg">
            Payments App
          </span>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col justify-center mr-2 md:mr-4">
            <span className="text-sm md:text-base">Hello</span>
          </div>
          <div className="rounded-full h-10 w-10 md:h-12 md:w-12 bg-green-500 flex justify-center items-center">
            <span className="text-lg md:text-xl font-bold text-white">U</span>
          </div>
        </div>
      </div>
    </>
  );
};
