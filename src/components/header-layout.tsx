import { Link, Navigate, useNavigate } from "react-router";
import logo from "@/assets/images/logo4.png";
import dafaultAvatar from "@/assets/images/default-avatar.jpg";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";

export default function HeaderLayout() {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate("/search:searchKeyword");
  };
  return (
    <header className="h-15 border-b bg-[#FFD23F]">
      <div className="m-auto flex h-full w-full max-w-300 justify-between px-4">
        <Link to={"/"} className="flex items-center gap-2">
          <img className="h-13" src={logo} alt="맛칩 로고" />
          <div className="text-3xl font-extrabold text-red-600">Taste Chip</div>
        </Link>
        <div className="relative mr-20 flex items-center">
          <Input className="flex h-11 w-140 min-w-50 rounded-4xl border-none bg-white" />
          <Button
            onClick={onClickButton}
            className="hover:bg-background-[#ffffff] absolute right-1 flex cursor-pointer rounded-4xl bg-white"
          >
            <SearchIcon className="text-[#FFD23F]" />
          </Button>
        </div>
        <div className="flex items-center gap-5 rounded-4xl">
          <Link to={"/profile/userId"} className="flex items-center gap-2">
            <img
              className="h-10 rounded-4xl"
              src={dafaultAvatar}
              alt="기본 프로필"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
