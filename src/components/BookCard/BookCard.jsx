import { FaCartPlus } from "react-icons/fa6";

function BookCard() {
  const book = {
    name: "যদ্যপি আমার গুরু",
    author: "আহমদ ছফা",
    description:
      "যদ্যপি আমার গুরু বাংলাদেশের অগ্রণী চিন্তাবিদ ও কথাসাহিত্যিক আহমদ ছফা রচিত একটি স্মৃতিচারণমূলক গ্রন্থ।[১] দীর্ঘ স্মৃতিচারণামূলক রচনাটি ১৯৯৮ খ্রিষ্টাব্দে বই আকারে প্রকাশের আগে দৈনিক বাংলাবাজার পত্রিকার সাহিত্য পাতায় প্রায় চার মাস ধারাবাহিকভাবে প্রকাশিত হয়েছিলো। ঢাকা বিশ্ববিদ্যালয়ের কিংবদন্তি জাতীয় অধ্যাপক আবদুর রাজ্জাকের সাথে লেখকের বিভিন্ন বিষয়ে কথোপকথনসমূহের বিবরণ পাওয়া যায় এই গ্রন্থে",
    genre: "শিক্ষা",
    image: "https://i.ibb.co/09MjHgh/guru.jpg",
    price: 199,
    publisher: "মাওলা ব্রাদার্স",
  };
  const { image, name, author, description, genre, price, publisher } = book;
  return (
    <div className="w-[200px] p-4 bg-[#e6e980]">
      <img className="w-full object-contain" src={image} alt={name} />
      <div className="flex justify-between items-center mt-2">
        <h2 className="text-2xl">{name}</h2>
        <h2 className="text-3xl font-semibold">৳{price}</h2>
      </div>
      <div>
        <h3>{author}</h3>
      </div>
      <div>
        <button className="w-full flex justify-center items-center py-3 gap-1  text-[#21409a] bg-[#ed1c24] hover:text-[#ed1c24] hover:bg-[#21409a] transition-all ease-in rounded-sm mt-2">
          <FaCartPlus /> Add To cart
        </button>
      </div>
    </div>
  );
}

export default BookCard;
