import { useState, useRef } from "react";
export default function ShortenForm() {
  const [isValidUrl, setIsValidUrl] = useState(false);
  const urlRef = useRef();

  function btnHandler(e) {
    e.preventDefault();
    if (urlRef.current.value === "") {
      setIsValidUrl(true);
    }
  }
  return (
    <section id="form" className="container mx-auto p-6 my-12">
      <form className="bg-darkViolet  p-6 rounded-2xl flex lg:items-center gap-2 flex-col lg:flex-row">
        <input
          ref={urlRef}
          type="text"
          placeholder="Enter your link"
          className={`${
            isValidUrl && "border-red"
          } placeholder-yellow-400 p-3 rounded-lg flex-1 focus:outline-none border-2`}
        />
        <a
          onClick={btnHandler}
          href=""
          className="text-white bg-cyan px-6 py-3 rounded-md text-center lg:text-left"
        >
          Shorten it!
        </a>
      </form>
    </section>
  );
}
