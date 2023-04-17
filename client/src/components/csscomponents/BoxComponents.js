import React from "react";

export const BoxComponents = () => {
  return (
    <div className="min-h-screen   p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-sm mx-auto ">
        <div>
          <h2 className="font-semibold text-xl text-gray-600  ">
            Responsive Form
          </h2>
          <p className="text-gray-500 mb-6">
            Form is mobile responsive. Give it a try.
          </p>
          {/* Box form  */}
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6  ">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1">
              {/* conntent */}
              123
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
