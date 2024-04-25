import CallToAction from "../components/CallToAction";

export default function Chat() {
  return (
    <div className="min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3">
      <h1 className="text-3xl font-semibold">Chat Me Now !</h1>
      <p className="text-md text-gray-500 text-center">
        Ayo klik chat now sekarang untuk menjelajahi peluang kolaborasi dan
        membuat dampak yang bermakna bersama!
      </p>
      <CallToAction />
    </div>
  );
}
