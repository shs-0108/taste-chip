import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router";

export default function SignUpPage() {
  return (
    <div className="flex h-[715px] min-h-[340px] items-center justify-center">
      <div className="flex w-100 flex-col items-center justify-center gap-2 rounded-2xl border-3 border-[#FFD23F] px-10 py-10">
        <div className="mb-7.5 text-4xl font-bold">회원가입</div>
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
          <div>
            <Input
              className="flex w-full"
              type="text"
              placeholder="닉네임을 입력해주세요"
            />
            <div className="text-muted-foreground mt-1 flex w-full pl-2 text-[12px]">
              2~8글자의 영문,한글,숫자만 입력 가능합니다.
            </div>
          </div>
        </div>
        <Button className="mt-5 flex w-full min-w-[200px] cursor-pointer text-lg">
          회원가입
        </Button>

        <Link
          className="text-muted-foreground flex w-full place-content-center text-sm hover:underline"
          to={"/sign-in"}
        >
          이미 회원이신가요? 로그인 하러가기
        </Link>
        <Button className="mt-5 flex w-full cursor-pointer bg-[#FFD23F] text-lg font-semibold text-black hover:bg-[#FFD23F]">
          카카오로 회원가입
        </Button>
      </div>
    </div>
  );
}
