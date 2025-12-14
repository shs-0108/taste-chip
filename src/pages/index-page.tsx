import dummy1 from "@/assets/images/dummy/dummy.001.png";
import dummy2 from "@/assets/images/dummy/dummy.002.png";
import dummy3 from "@/assets/images/dummy/dummy.003.png";
import dummy4 from "@/assets/images/dummy/dummy.004.png";
import dummy5 from "@/assets/images/dummy/dummy.005.png";
import dummy6 from "@/assets/images/dummy/dummy.006.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function IndexPage() {
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
              <div className="max-w-80px max-h-10px m-auto h-full w-full rounded-2xl border-2 border-[#FFD23F] p-2">
                떡볶이
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-3">
              <div className="text-xl font-bold">2</div>
              <div className="max-w-80px max-h-10px m-auto h-full w-full rounded-2xl border-2 border-[#FFD23F] p-2">
                치킨
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-3">
              <div className="text-xl font-bold">3</div>
              <div className="max-w-80px max-h-10px m-auto h-full w-full rounded-2xl border-2 border-[#FFD23F] p-2">
                중화짜장면
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-3">
              <div className="text-xl font-bold">4</div>
              <div className="max-w-80px max-h-10px m-auto h-full w-full rounded-2xl border-2 border-[#FFD23F] p-2">
                유부초밥
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-3">
              <div className="text-xl font-bold">5</div>
              <div className="max-w-80px max-h-10px m-auto h-full w-full rounded-2xl border-2 border-[#FFD23F] p-2">
                샤브샤브
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col rounded-2xl bg-white p-8">
        <div className="mb-3 text-3xl font-bold">검색하기</div>
      </div>
    </div>
  );
}
