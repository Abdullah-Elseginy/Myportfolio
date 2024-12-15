import React from "react";
import { myCertificates } from "../../../assets/utils/Data";

const MyCertificates = () => {
  return (
    <div className="mt-8 flex flex-col md:flex-row items-center border-t-2 border-t-mint-blue md:items-start md:justify-center max-w-5xl border-1 shadow-lg shadow-mint-blue p-6 mx-2 rounded-lg">
      <h2 className="text-mint-blue text-2xl font-bold mb-6 text-center rounded-full bg-light-pink p-4 mr-2">
        My Certificates
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {myCertificates.map((certificate, index) => (
          <div
            key={index}
            className="bg-mint-blue p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-mint-green"
          >
            <h3 className="text-light-pink text-xl font-bold mb-2">
              {certificate.title}
            </h3>
            <p className="text-slate-200">{certificate.description}</p>
            <p className="text-slate-400 text-sm mt-2">
              Time: {certificate.time}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCertificates;
