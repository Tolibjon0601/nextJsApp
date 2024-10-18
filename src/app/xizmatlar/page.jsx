"use client";
import { useEffect, useState } from "react";
import { request } from "../../services/api";
import Image from "next/image";
import Link from "next/link";
import DeletePage from "./../components/deleteModal/page";
import EditModal from "./../components/editModal/page"; // Assuming you create an EditModal component

export default function Services() {
	const [services, setServices] = useState([]);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [serviceToDelete, setServiceToDelete] = useState(null);
	const [serviceToEdit, setServiceToEdit] = useState(null);

	useEffect(() => {
		request.get(`/products`).then((res) => {
			setServices(res.data);
		});
	}, []);

	const handleDeleteClick = (service) => {
		setServiceToDelete(service);
		setIsDeleteModalOpen(true);
	};

	const handleEditClick = (service) => {
		setServiceToEdit(service);
		setIsEditModalOpen(true);
	};

	const handleDelete = (id) => {
		request.delete(`/products/${id}`).then(() => {
			setServices(services.filter((service) => service.id !== id));
			closeDeleteModal();
		});
	};

	const handleEdit = (updatedService) => {
		request.put(`/products/${updatedService.id}`, updatedService).then(() => {
			setServices(services.map((service) => (service.id === updatedService.id ? updatedService : service)));
			closeEditModal();
		});
	};

	const closeDeleteModal = () => {
		setIsDeleteModalOpen(false);
		setServiceToDelete(null);
	};

	const closeEditModal = () => {
		setIsEditModalOpen(false);
		setServiceToEdit(null);
	};


	return (
		<div className="container max-w-[1360px] mx-auto">
			<div className="max-w-[700px] mx-auto justify-center text-center">
				<h1 className="pt-14 text-2xl font-bold mb-4">Xizmatlar</h1>
				<p className="mb-4">
					Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex,
					eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar
				</p>
			</div>
			<ul className="flex flex-wrap gap-[70px] justify-center mb-4 relative">
				{services.map((service) => (
					<li
						key={service.id}
						className="w-[400px] h-auto shadow items-center flex flex-col services_item rounded-xl"
					>
			<Link href={`/services/${service.id}`}>
          <Image
							width={300}
							height={250}
							className="mt-6 mb-4 relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
							src={service.image}
							alt={service.title}
						/>
          </Link>
						<div className="px-5 py-4">
							<h1 className="font-merriweather text-xl font-normal break-all leading-8 text-gray-900 mb-4">
								{service.title}
							</h1>
							<h1 className="font-merriweather text-xl font-normal break-all leading-8 text-gray-900 mb-4">
								{service.price}$
							</h1>
							<p className="text-sm font-normal break-all text-gray-500 mb-14 ">
								{service.description}
							</p>
							<div className="flex items-center gap-8">
								<Link
									href={`/services/${service.id}`}
									className="text-lg font-semibold text-indigo-600"
								>
									Read More...
								</Link>
								<button
									onClick={() => handleEditClick(service)}
									className="py-2 px-4 text-white text-[18px] rounded-xl hover:bg-[#0088D2] bg-blue"
								>
									Edit
								</button>
								<button
									onClick={() => handleDeleteClick(service)}
									className="py-2 px-4 text-white text-[18px] rounded-xl hover:bg-[#FF4D4F] bg-red-600"
								>
									Delete
								</button>
							</div>
						</div>
					</li>
				))}
			</ul>


			<DeletePage
				isOpen={isDeleteModalOpen}
				onClose={closeDeleteModal}
				onDelete={handleDelete}
				service={serviceToDelete}
			/>
<EditModal
    isOpen={isEditModalOpen}
    onClose={closeEditModal}
    onEdit={handleEdit}
    service={serviceToEdit}

/>
		</div>
	);
}
