import { request } from "../../../services/api";
import { useRouter } from "next/router";

export default function DeleteService() {
  const router = useRouter();
  const { id } = router.query;

  const handleDelete = async () => {
    try {
      await request.delete(`/products/${id}`);
      router.push('/xizmatlar');
    } catch (error) {
      console.error("Xizmatni o'chirishda xato:", error);
    }
  };

  return (
    <div className="container mx-auto text-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Xizmatni o'chirish</h1>
      <p className="mb-4">Siz haqiqatan ham bu xizmatni o'chirmoqchimisiz?</p>
      <button
        onClick={handleDelete}
        className="py-2 px-4 text-white text-[18px] rounded-xl bg-red-600 hover:bg-red-700"
      >
        Ha, o'chirish
      </button>
      <button
        onClick={() => router.push('/xizmatlar')}
        className="py-2 px-4 text-white text-[18px] rounded-xl bg-gray-500 hover:bg-gray-600 ml-4"
      >
        Bekor qilish
      </button>
    </div>
  );
}
