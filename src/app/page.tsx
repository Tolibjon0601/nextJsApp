import Link from "next/link";

export default function Home() {
  return (
<div className="container max-w-[1360px] mx-auto pt-24 flex justify-between items-center">
<div className="max-w-[470px]">
<h1 className="text-3xl font-bold mb-4">Biznesingizni keyingi bosqichga
olib chiqing</h1>
<p className="mb-4">Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus mattis eros at sem pulvinar</p>
<button className="px-4 py-2 bg-blue text-white rounded-lg">Xizmatlar bilan tanishish</button>
</div>
<div>
<iframe width="550" height="350 " src="https://www.youtube.com/embed/GJf28veNWHE" title="Fifth Harmony - Work from Home (Lyrics) ft. Ty Dolla $ign" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>
</div>
  );
}
