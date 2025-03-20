"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import AdminDashboardView from "@/views/AdminDashboardView";

const Page = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user || (user.role !== "superadmin" && user.role !== "admin")) {
      router.replace("/login"); 
    }
  }, [user, router]);

  if (!user || (user.role !== "superadmin" && user.role !== "admin")) {
    return null; 
  }

  return (
    <div>
      <AdminDashboardView />
    </div>
  );
};

export default Page;
