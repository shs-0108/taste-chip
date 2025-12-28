import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router";

export default function SignInPage() {
  return (
    <div className="flex h-[715px] min-h-[340px] items-center justify-center">
      <div className="flex w-100 flex-col items-center justify-center gap-2 rounded-2xl border-3 border-[#FFD23F] bg-white px-10 py-10">
        <div className="mb-7.5 text-4xl font-bold">로그인</div>
        <div className="flex w-full flex-col gap-4">
          <Input
            className="flex w-full"
            type="email"
            placeholder="이메일을 입력해주세요"
          />
          <Input
            className="flex w-full"
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
        </div>
        <Button className="mt-5 flex w-full min-w-[200px] cursor-pointer text-lg">
          로그인
        </Button>
        <Link
          className="text-muted-foreground flex w-full place-content-center text-sm hover:underline"
          to={"/sign-up"}
        >
          회원이 아니신가요? 회원가입 하러가기
        </Link>
        <Button className="mt-5 flex w-full cursor-pointer bg-[#FFD23F] text-lg font-semibold text-black hover:bg-[#FFD23F]">
          카카오로 로그인
        </Button>
      </div>
    </div>
  );
}
