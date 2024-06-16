import BrandRecognition from "../images/icon-brand-recognition.svg";
import DetailedRecords from "../images/icon-detailed-records.svg";
import FullyCustomizable from "../images/icon-fully-customizable.svg";
export default function Features() {
  return (
    <section id="features">
      <div className="container mx-auto my-40">
        <h1 className="text-4xl text-center font-bold ">Advance Statistics</h1>
        <p className="max-w-sm mx-auto md:max-w-lg text-center text-gray-400 mt-5">
          Track how your links are performing across the web with our advance
          statistics dashboard
        </p>
        <div className="flex flex-col max-w-sm mx-auto my-20 space-y-5 md:space-y-0 md:flex-row md:max-w-6xl md:space-x-3">
          {/* item 1 */}
          <div className="flex flex-col items-center bg-gray-200 p-4 py-8 gap-5">
            <img
              src={BrandRecognition}
              alt=""
              className="bg-darkViolet p-6 rounded-full"
            />
            <h1 className="text-2xl font-bold ">Brand Recognition</h1>
            <p className="max-w-sm text-center md:text-left">
              Boost your brand recognition with each click, Generic links don't
              mean a thing. Branded links help instil confidence in your content{" "}
            </p>
          </div>
          {/* item 2 */}
          <div className="flex flex-col items-center bg-gray-200 p-4 py-8 gap-5">
            <img
              src={DetailedRecords}
              alt=""
              className="bg-darkViolet p-6 rounded-full"
            />
            <h1 className="text-2xl font-bold">Detailed Records</h1>
            <p className="max-w-sm text-center md:text-left">
              Get insights into who is clicking your links. knowing when and
              where people engage with your content helps inform better
              decisions
            </p>
          </div>
          {/* item 3 */}
          <div className="flex flex-col items-center bg-gray-200 p-4 py-8 gap-5">
            <img
              src={FullyCustomizable}
              alt=""
              className="bg-darkViolet p-6 rounded-full"
            />
            <h1 className="text-2xl font-bold">Fully Customizable</h1>
            <p className="max-w-sm text-center md:text-left">
              improve brand awareness and content discoverability through
              customizable links , supercharging audience engagement
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
