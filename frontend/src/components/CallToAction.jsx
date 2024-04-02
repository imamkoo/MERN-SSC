import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">
          Explore how you can contribute to improving the lives.
        </h2>
        <p className="text-gray-500 my-2">
          {`Let's chat now to discover valuable insights and how you can
          contribute!`}
        </p>
        <Button
          gradientDuoTone="purpleToBlue"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat Now!
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://i.pinimg.com/originals/32/a5/a9/32a5a951f98fbe0273fcb50e56147311.png" />
      </div>
    </div>
  );
}
