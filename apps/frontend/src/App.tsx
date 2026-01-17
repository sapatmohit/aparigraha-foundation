import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { razorpayService } from "@/lib/razorpay";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { useLayoutEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import LegalPage from "./pages/LegalPage";
import NotFound from "./pages/NotFound";
import ProgramDetail from "./pages/ProgramDetail";
import Volunteer from "./pages/Volunteer";

const queryClient = new QueryClient();

// Preload Razorpay SDK for faster payment initialization
razorpayService.preloadScript();

const Layout: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isProgramPage = location.pathname.startsWith("/program/");

  useLayoutEffect(() => {
    if (location.hash) {
      // Delay scrolling slightly to allow the target component to render
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo(0, 0);
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) =>
    isHomePage || isProgramPage ? (
      <>{children}</>
    ) : (
      <div className="min-h-screen w-full bg-gradient-to-br from-pink-500 via-purple-500 to-pink-700">
        {children}
      </div>
    );

  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/program/:programId" element={<ProgramDetail />} />
        <Route path="/volunteer" element={<Volunteer />} />
        
        {/* Legal Routes */}
        <Route path="/privacy" element={<LegalPage />} />
        <Route path="/terms" element={<LegalPage />} />
        <Route path="/accessibility" element={<LegalPage />} />
        <Route path="/cookies" element={<LegalPage />} />
        <Route path="/finances" element={<LegalPage />} />
        <Route path="/safeguarding" element={<LegalPage />} />

        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Wrapper>
  );
};

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
