const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex justify-center items-center h-15 flex-wrap bg-[#131921] p-5 h-full">
      <div className="mx-5 w-25 object-contain">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon Logo"
          className="w-full"
        />
      </div>

      <div className="mx-5 flex flex-1 items-center max-w-[600px]">
        <input
          type="text"
          className="h-9 w-full rounded-l px-3 focus:outline-none"
        />
        <button className="h-9 rounded-r bg-[#febd69] px-4 hover:bg-[#f3a847]">
          <svg className="h-[22px] w-[22px] fill-[#131921]" viewBox="0 0 32 32">
            <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
          </svg>
        </button>
      </div>

      <div className="ml-auto flex gap-5">
        <div className="flex flex-col text-white">
          <span className="text-xs">Returns</span>
          <span className="text-sm font-bold">& Orders</span>
        </div>
        <div className="flex flex-col text-white">
          <span className="text-xs">Your</span>
          <span className="text-sm font-bold">Prime</span>
        </div>
        <div className="relative flex items-center text-white">
          <svg viewBox="0 0 576 512" className="h-[38px] w-[38px] fill-white">
            <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path>
          </svg>
          <span className="absolute -top-1 -right-2 text-sm font-bold text-[#f08804]">
            0
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
