
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Wedding from "./pages/Wedding";
import Plans from "./pages/Plans";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import AdvisorLogin from "./pages/AdvisorLogin";
import AdvisorRegister from "./pages/AdvisorRegister";
import AdvisorDashboard from "./pages/AdvisorDashboard";
import CreateSite from "./pages/CreateSite";
import TemplateEditor from "./pages/TemplateEditor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/wedding" replace />} />
          <Route path="/create-site" element={<CreateSite />} />
          <Route path="/template/:id" element={<TemplateEditor />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/about" element={<About />} />
          <Route path="/advisor" element={<AdvisorLogin />} />
          <Route path="/advisor/register" element={<AdvisorRegister />} />
          <Route path="/advisor/dashboard" element={<AdvisorDashboard />} />
          <Route path="/advisor/couple/:id" element={<Wedding />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
