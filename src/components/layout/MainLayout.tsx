import { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopBar from "./TopBar";

interface MainLayoutProps {
  children: ReactNode;
  showTopBar?: boolean;
}

const MainLayout = ({ children, showTopBar = true }: MainLayoutProps) => {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      {showTopBar && <TopBar />}
      <Header />
      <div className="flex-1">
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default MainLayout;
