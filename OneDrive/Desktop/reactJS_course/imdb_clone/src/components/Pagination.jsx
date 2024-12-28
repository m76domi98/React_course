import React from "react";

function Pagination({ handlePrev, handleNext, pageNum }) {
  return (
    <div className="bg-purple-400/50 pd- 3  flex justify-center">
      <div
        onClick={handlePrev}
        className="px-8 hover:cursor-pointer hover:scale-110"
      >
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      <div>{pageNum}</div>
      <div
        onClick={handleNext}
        className="px-8 hover:cursor-pointer hover:scale-110"
      >
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
}

export default Pagination;
