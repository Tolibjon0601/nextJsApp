"use client";
import { useEffect, useState } from "react";
import { request } from "../../services/api";
import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    request.get(`/products`).then((res) => {
      console.log(res.data);
      setServices(res.data);
    });
  }, []);

  return (
    <div className="container max-w-[1360px] mx-auto">
      <div className="max-w-[700px] mx-auto justify-center text-center">
        <h1 className="pt-14 text-2xl font-bold mb-4">Xizmatlar</h1>
        <p className="mb-4">
          Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
          facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus
          mattis eros at sem pulvinar
        </p>
      </div>
      <ul className="flex flex-wrap gap-[70px] justify-center mb-4 relative">
        {services.map((service, index) => (
          <li
            key={index}
            className="w-[400px] h-auto shadow items-center flex flex-col services_item rounded-xl "
          >
                 <Link href={`/services/${service.id}`}>
						<Image
              width={300}
              height={250}
              className="mt-6 mb-4 relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
              src={service.image}
              alt="img"
            />
						</Link>
            <div className="px-5 py-4">
              <h1 className="font-merriweather text-xl font-normal break-all leading-8 text-gray-900 mb-4">
                {service.title}
              </h1>
              <p className="text-sm font-normal break-all text-gray-500 mb-14 ">
                {service.description}
              </p>
              <a
                href="#"
                className="text-lg font-semibold text-indigo-600"
              >
                Read More...
              </a>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-12 gap-4 items-center">
        <button className="px-4 py-2 bg-blue rounded-lg text-white">
          Buyurtma berish
        </button>
        <a href="" className="servises_link">
          Xizmatlar sahifasiga o’tish
        </a>
      </div>
    </div>
  );
}
