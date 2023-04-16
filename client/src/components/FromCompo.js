import React from "react";
// import { LockClosedIcon } from '@heroicons/react/20/solid'
export const FromCompo = () => {
  return (
    <>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-semibold text-xl text-gray-600">FORM</h2>
            <p className="tex-gray-500 mb-6">Form is moblie </p>

            <div className="bg-white shadow-lg p-4 px-4 md:p-8 mb-6 rounded-md">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-col-3">
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Detail</p>
                  <p>Please fill out all the fields.</p>
                </div>
                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md-col-span-5">
                      <label for="full_name">Full Name</label>
                      <input
                        type="text"
                        name="full_name"
                        id="full_name"
                        value=""
                        className="h-10 border mt-1 rounded px-4 bg-gray-50 w-full "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
