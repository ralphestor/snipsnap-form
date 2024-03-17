const SearchResults = () => {
  return (
    <main className="flex flex-col items-center bg-[#FDF0E6]">
      <nav className="flex flex-col justify-center items-center h-[130px] font-bold font-header text-[30px]">
        <h1>SNIPSNAP</h1>
        <h4>Search Results:</h4>
      </nav>
      <article className="flex flex-col gap-5 max-w-[700px] w-[100%] text-center">
        <section className="flex flex-col lg:flex-row gap-10 bg-white p-10 m-5 lg:text-left">
          <div className="">
            <img src="/shop1.jpg" alt="shop" className="w-[200px] h-[200px]" />
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <div>
              <h1 className="text-[24px]">Rebecca's Hair and Spa</h1>
            </div>
            <div className="text-[16px] font-medium text-gray-600">
              <h4>Location: Matina, Davao City</h4>
            </div>
            <div className="text-[16px] font-medium text-gray-600">
              <h4>Distance: 2 km</h4>
            </div>
            <div className="text-[16px] font-medium text-gray-600">
              <h4>Price: Php 250</h4>
            </div>
            <div className="mt-[20px]">
              <a
                href="/"
                className="border-none w-[100px] h-[40px] text-white font-paragraph font-bold text-[18px] bg-[#F08E80] hover:bg-[#FF8E80] no-underline px-8 py-3"
              >
                Book Now
              </a>
            </div>
          </div>
        </section>
        <section className="flex flex-col lg:flex-row gap-10 bg-white p-10 m-5 lg:text-left">
          <div className="">
            <img src="/shop1.jpg" alt="shop" className="w-[200px] h-[200px]" />
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <div>
              <h1 className="text-[24px]">Just a G Salon</h1>
            </div>
            <div className="text-[16px] font-medium text-gray-600">
              <h4>Location: Matina, Davao City</h4>
            </div>
            <div className="text-[16px] font-medium text-gray-600">
              <h4>Distance: 5 km</h4>
            </div>
            <div className="text-[16px] font-medium text-gray-600">
              <h4>Price: Php 250</h4>
            </div>
            <div className="mt-[20px]">
              <a
                href="/"
                className="border-none w-[100px] h-[40px] text-white font-paragraph font-bold text-[18px] bg-[#F08E80] hover:bg-[#FF8E80] no-underline px-8 py-3"
              >
                Book Now
              </a>
            </div>
          </div>
        </section>
        <section className="flex flex-col lg:flex-row gap-10 bg-white p-10 m-5 lg:text-left">
          <div className="">
            <img src="/shop1.jpg" alt="shop" className="w-[200px] h-[200px]" />
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <div>
              <h1 className="text-[24px]">Marlon’s Creation</h1>
            </div>
            <div className="text-[16px] font-medium text-gray-600">
              <h4>Location: Matina, Davao City</h4>
            </div>
            <div className="text-[16px] font-medium text-gray-600">
              <h4>Distance: 2 km</h4>
            </div>
            <div className="text-[16px] font-medium text-gray-600">
              <h4>Price: Php 300</h4>
            </div>
            <div className="mt-[20px]">
              <a
                href="/"
                className="border-none w-[100px] h-[40px] text-white font-paragraph font-bold text-[18px] bg-[#F08E80] hover:bg-[#FF8E80] no-underline px-8 py-3"
              >
                Book Now
              </a>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
};

export default SearchResults;
