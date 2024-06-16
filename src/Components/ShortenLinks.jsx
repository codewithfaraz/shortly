export default function ShortenLinks(props) {
  return (
    <div className="container mx-auto p-6 my-5 flex items-center justify-between flex-col lg:flex-row">
      <p className="font-bold">{props.l}</p>
      <div className="flex items-center gap-2 flex-col lg:flex-row">
        <p className="text-cyan font-bold">{props.r}</p>
        <a
          href=""
          className="text-white bg-cyan px-4 py-2 rounded-md hover:bg-darkViolet"
        >
          Copy
        </a>
      </div>
    </div>
  );
}
