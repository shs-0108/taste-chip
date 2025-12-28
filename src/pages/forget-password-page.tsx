import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router";

export default function ForgetPasswordPage() {
  return (
    <div className="flex h-[715px] min-h-[340px] items-center justify-center">
      <div className="flex w-100 flex-col items-center justify-center gap-2 rounded-2xl border-3 border-[#FFD23F] bg-white px-10 py-10">
        <div className="mb-7.5 text-4xl font-bold">비밀번호 재설정</div>
        <div className="flex w-full flex-col gap-4">
          <div className="flex flex-row gap-2.5">
            <Input
              className="flex w-full"
              type="email"
              placeholder="이메일을 입력해주세요"
            />
            <Button className="cursor-pointer bg-[#FFD23F] text-sm font-semibold text-black hover:bg-[#FFD23F]">
              전송
            </Button>
          </div>
          <Input
            className="flex w-full"
            type="password"
            placeholder="인증번호를 입력해주세요"
          />
        </div>
        <Button className="mt-5 flex w-full min-w-[200px] cursor-pointer text-lg">
          인증번호 확인
        </Button>
        <div className="flex flex-row items-center justify-center gap-1">
          <Link
            className="text-muted-foreground text-sm hover:underline"
            to={"/sign-up"}
          >
            회원가입
          </Link>
          <span className="text-muted-foreground text-sm">|</span>
          <Link
            className="text-muted-foreground text-sm hover:underline"
            to={"/sign-in"}
          >
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
