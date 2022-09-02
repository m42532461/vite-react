import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
const Navbar = () => {
  return (
    <div className="h-[60px]">
      <div className="px-[20px] py-[10px] flex items-center justify-between">
        <div className="flex-1 flex items-center">
          <span className="text-[14px] cursor-pointer">EN</span>
          <div className=" border-[0.5px] border-solid border-gray-300 flex items-center ml-[25px] p-[5px]">
            <input className="border-none" />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </div>
        </div>
        <div className="flex-1 text-center">
          <h1 className="font-bold text-3xl">LAMA.</h1>
        </div>
        <div className="flex-1 flex items-center justify-end">
          <div className="text-[14px] cursor-pointer ml-[25px]">REGISTER</div>
          <div className="text-[14px] cursor-pointer ml-[25px]">SIGN IN</div>
          <div className="text-[14px] cursor-pointer ml-[25px]">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon color="action" />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
