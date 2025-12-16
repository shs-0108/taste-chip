import dummy1 from "@/assets/images/dummy/dummy.001.png";
import dummy2 from "@/assets/images/dummy/dummy.002.png";
import dummy3 from "@/assets/images/dummy/dummy.003.png";
import dummy4 from "@/assets/images/dummy/dummy.004.png";
import dummy5 from "@/assets/images/dummy/dummy.005.png";
import dummy6 from "@/assets/images/dummy/dummy.006.png";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SearchIcon } from "lucide-react";
import { useNavigate } from "react-router";

export default function IndexPage() {
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate("/search:searchKeyword");
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex h-90 flex-row gap-5">
        <div className={`flex basis-2/3 flex-col rounded-2xl bg-white p-8`}>
          <div className="mb-3 text-3xl font-bold">오늘은 여기 어떠세요?</div>
          <div className="flex flex-row gap-5">
            <img src={dummy6} alt="가게 이미지" className="h-50 w-70" />
            <div className="flex flex-col gap-2">
              <div className="text-2xl font-bold">피츠(양식)</div>
              <div className="text-xl">평점 4.72 ⭐️⭐️⭐️⭐️⭐️</div>
              <div className="flex w-100">
                <Carousel>
                  <CarouselContent className="items-center">
                    <CarouselItem className={`basis-2/5`}>
                      <div className="overflow-hidden rounded-xl">
                        <img
                          src={dummy1}
                          className="max-w-50px max-h-30px m-auto h-full w-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem className={`basis-2/5`}>
                      <div className="overflow-hidden rounded-xl">
                        <img
                          src={dummy2}
                          className="max-w-50px max-h-30px m-auto h-full w-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem className={`basis-2/5`}>
                      <div className="overflow-hidden rounded-xl">
                        <img
                          src={dummy3}
                          className="max-w-50px max-h-30px m-auto h-full w-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        <div className={`basis-1/3 rounded-2xl bg-white p-8`}>
          <div className="mb-3 text-3xl font-bold">실시간 인기 검색어</div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center justify-center gap-3">
              <div className="text-xl font-bold">1</div>
              <div className="max-w-80px max-h-10px m-auto h-full w-full p-2 text-lg">
                떡볶이
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-3">
              <div className="text-xl font-bold">2</div>
              <div className="max-w-80px max-h-10px m-auto h-full w-full p-2 text-lg">
                치킨
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-3">
              <div className="text-xl font-bold">3</div>
              <div className="max-w-80px max-h-10px m-auto h-full w-full p-2 text-lg">
                중화짜장면
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-3">
              <div className="text-xl font-bold">4</div>
              <div className="max-w-80px max-h-10px m-auto h-full w-full p-2 text-lg">
                유부초밥
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-3">
              <div className="text-xl font-bold">5</div>
              <div className="max-w-80px max-h-10px m-auto h-full w-full p-2 text-lg">
                샤브샤브
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 rounded-2xl bg-white p-8">
        <div className="text-3xl font-bold">검색하기</div>
        <div className="m-auto mb-5 flex h-12 w-full flex-row items-center justify-center gap-2">
          <div className={`h-full w-full basis-2/5`}>
            <Input className="h-full" placeholder="키워드로 검색해보세요!" />
            {/* <Button
              onClick={onClickButton}
              className="hover:bg-background-[#ffffff] absolute right-1 cursor-pointer bg-white"
            >
              <SearchIcon className="text-[#FFD23F]" />
            </Button> */}
          </div>
          <Select>
            <SelectTrigger
              style={{ height: 48 }}
              className={`w-full basis-1/5`}
            >
              <SelectValue placeholder="시/도를 선택해주세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>시 / 도</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger
              style={{ height: 48 }}
              className={`w-full basis-1/5`}
            >
              <SelectValue placeholder="구/군을 선택해주세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>구 / 군</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger
              style={{ height: 48 }}
              className={`w-full basis-1/5`}
            >
              <SelectValue placeholder="동을 선택해주세요" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>동</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-full flex-row gap-5">
          <div className={`flex w-full basis-1/3 flex-col gap-2`}>
            <img src={dummy4} className="rounded-lg" />
            <div className="flex flex-row items-center gap-2 text-2xl font-bold">
              텐동 식당 <div className="text-xl text-blue-600">일식</div>
            </div>
            <div className="text-xl">평점 4.72 ⭐️⭐️⭐️⭐️⭐️</div>
          </div>
          <div className={`flex w-full basis-1/3 flex-col gap-2`}>
            <img src={dummy5} className="rounded-lg" />
            <div className="flex flex-row items-center gap-2 text-2xl font-bold">
              마라탕 식당 <div className="text-xl text-blue-600">중식</div>
            </div>
            <div className="text-xl">평점 3.5 ⭐️⭐️⭐️⭐️</div>
          </div>
          <div className={`flex w-full basis-1/3 flex-col gap-2`}>
            <img src={dummy1} className="rounded-lg" />
            <div className="flex flex-row items-center gap-2 text-2xl font-bold">
              양꼬치 식당 <div className="text-xl text-blue-600">중식</div>
            </div>
            <div className="text-xl">평점 5.00 ⭐️⭐️⭐️⭐️⭐️</div>
          </div>
        </div>
      </div>
    </div>
  );
}
