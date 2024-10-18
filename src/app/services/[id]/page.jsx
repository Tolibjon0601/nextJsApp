"use client";
import { request } from "@/services/api";
import React, { useEffect, useState } from "react";

const Singlepage = ({ params }) => {
	const { id } = params;
	const [card, setCard] = useState({});

	useEffect(() => {
		request.get(`products/${id}`).then((res) => {
			setCard(res.data);
		});
	}, [id]);

	return (
		<div className="w-[400px] h-auto shadow items-center mx-auto mt-12 flex flex-col services_item rounded-xl ">
		<div className="p-6">
    <h1 className="font-merriweather text-2xl font-normal break-all leading-8 text-gray-900 mb-4 text-center ">
				{card.title}
			</h1>
			<p className="text-sm font-normal break-all text-gray-500 mb-14 ">{card.description}</p>
			<img
				width={300}
				height={250}
				className="mt-6 mb-4 relative z-0 rounded-lg transition-all mx-auto "
				src={card.image}
				alt
			/>
    </div>

				
		</div>
	);
};

export default Singlepage;
