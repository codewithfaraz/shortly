import Image from "../images/illustration-working.svg";
export default function Hero() {
  return (
    <section id="hero" className="container mx-auto ">
      <div className="flex flex-col lg:flex-row p-6  items-center justify-center flex-col-reverse">
        {/* content container */}
        <div className="flex flex-col space-y-4 lg:w-1/2">
          <h1 className="text-5xl  max-w-md font-bold text-center lg:text-left lg:text-6xl">
            More than just short link
          </h1>
          <p className="text-center lg:text-left text-gray-700 max-w-md">
            Build your brand's recognition and get detailed insights on how your
            link are performing
          </p>
          <div className="text-center lg:text-left">
            <a
              href=""
              className="px-6 py-2 text-white bg-cyan rounded-3xl hover:opacity-80 duration-100"
            >
              Get Started
            </a>
          </div>
        </div>
        {/* image here */}
        <div className="lg:w-1/2 lg:mt-12">
          <img src={Image} alt="" />
        </div>
      </div>
    </section>
  );
}
