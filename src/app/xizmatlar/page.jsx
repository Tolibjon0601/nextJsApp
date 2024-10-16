// src/app/xizmatlar/page.jsx

export default function Services() {
  return (
    <div className="container max-w-[1360px] mx-auto   ">
      <div className="max-w-[700px] mx-auto justify-center text-center">
        <h1 className="pt-14 text-2xl font-bold mb-4">Xizmatlar</h1>
        <p className="mb-4">
          Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
          facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus
          mattis eros at sem pulvinar
        </p>
      </div>
      <ul className="flex flex-wrap gap-[70px] justify-center mb-4 ">
        <li className="w-[320px] h-[258px] shadow items-center flex flex-col ">
          <img className="mt-6 mb-4" src="/image/serviseImg1.svg" alt="Logo" />
          <h1 className="text-[18px] font-bold">Vebsayt tuzish</h1>
          <p>lorem ipsum</p>
        </li>
        <li className="w-[320px] h-[258px] shadow items-center flex flex-col ">
          <img className="mt-6 mb-4" src="/image/serviseImg2.svg" alt="Logo" />
          <h1  className="text-[18px] font-bold" >Telegram bot</h1>
          <p>lorem ipsum</p>
        </li>
        <li className="w-[320px] h-[258px] shadow items-center flex flex-col ">
          <img className="mt-6 mb-4" src="/image/serviseImg3.svg" alt="Logo" />
          <h1  className="text-[18px] font-bold" >SMM</h1>
          <p>lorem ipsum</p>
        </li>
        <li className="w-[320px] h-[258px] shadow items-center flex flex-col ">
          <img className="mt-6 mb-4" src="/image/serviseImg4.svg" alt="Logo" />
          <h1  className="text-[18px] font-bold" >Grafik dizayn</h1>
          <p>lorem ipsum</p>
        </li>
        <li className="w-[320px] h-[258px] shadow items-center flex flex-col ">
          <img className="mt-6 mb-4" src="/image/serviseImg5.svg" alt="Logo" />
          <h1  className="text-[18px] font-bold" >CRM tizimlar</h1>
          <p>lorem ipsum</p>
        </li>
      </ul>
   <div className="flex justify-center mt-12 gap-4 items-center">
   <button className="px-4 py-2 bg-blue rounded-lg text-white">Buyurtma berish</button>
      <a href="" className="servises_link">Xizmatlar sahifasiga o’tish</a>
   </div>
    </div>
  );
}
