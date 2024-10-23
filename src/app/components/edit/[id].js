import { request } from "../../../services/api";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await request.get(`/products/${id}`);
  const service = res.data;

  return {
    props: {
      service,
    },
  };
}

export default function EditService({ service }) {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedService = {
      title: event.target.title.value,
      price: event.target.price.value,
      description: event.target.description.value,
    };

    await request.put(`/products/${service.id}`, updatedService);
    router.push("/services");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Edit Service</h1>
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <input type="text" name="title" defaultValue={service.title} className="block w-full mt-1 rounded-md px-4 py-4" />
      </div>
      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
        <input type="number" name="price" defaultValue={service.price} className="block w-full mt-1 rounded-md px-4 py-4" />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea name="description" rows="3" defaultValue={service.description} className="block w-full mt-1 rounded-md px-4 py-4"></textarea>
      </div>
      <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Save Changes</button>
    </form>
  );
}
