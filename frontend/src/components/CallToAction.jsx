import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export default function CallToAction() {
  const navigate = useNavigate();

  const handleChatNow = () => {
    navigate("/chatbot");
  };
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">
          Siap Membuat Perubahan? Mari Mengobrol untuk Temukan Bagaimana Anda
          Bisa Berkontribusi!
        </h2>
        <p className="text-gray-500 my-2">
          Klik Chat Now! untuk Mendapatkan Informasi dan Lihat Bagaimana Anda
          Bisa Membantu!
        </p>
        <Button
          gradientDuoTone="purpleToBlue"
          className="rounded-tl-xl rounded-bl-none"
          onClick={handleChatNow}
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat Now!
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img src="https://i.pinimg.com/originals/32/a5/a9/32a5a951f98fbe0273fcb50e56147311.png" />
      </div>
    </div>
  );
}
