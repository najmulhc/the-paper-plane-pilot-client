import logo from "../../assets/logo.svg";
const ComingSoon = () => {
  return (
    <main className="flex w-screen h-screen bg-[#e6e980] justify-center items-center flex-col">
      <img src={logo} alt="Logo" className="w-[15rem] " />
      <h1 className="font-roboto text-center  text-4xl font-semibold text-[#21409a] ">
        We <span className="text-[#ed1c24]">are</span> coming{" "}
        <span className="text-[#ed1c24]">soon.</span>
      </h1>
    </main>
  );
};

export default ComingSoon;
