import { Navigate, Route, Routes } from "react-router";
import IndexPage from "./pages/index-page";
import SignInPage from "./pages/sign-in-page";
import SignUpPage from "./pages/sign-up-page";
import ForgetPasswordPage from "./pages/forget-password-page";
import ResetPasswordPage from "./pages/reset-password-page";
import SearchPage from "./pages/search-page";
import SearchDetailPage from "./pages/search-detail-page";
import GlobalLayout from "./components/global-layout";
import ProfileDetailPage from "./pages/profile-detail-page";

export default function RootRoute() {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route path="/" element={<IndexPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />

        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/profile/:userId" element={<ProfileDetailPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search:searchKeyword" element={<SearchDetailPage />} />

        <Route path="*" element={<Navigate to={"/"} />} />
      </Route>
    </Routes>
  );
}
