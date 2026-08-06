import type { Metadata } from "next";
import { SocialAdminDashboard } from "@/components/admin/social-admin-dashboard";

export const metadata: Metadata = {
  title: "Konnect2Glory Admin",
  description: "Manage Konnect2Glory features, moderation, and content.",
};

export default function SocialAdminPage() {
  return (
    <div className="min-h-screen bg-[#E8E0F0]">
      <SocialAdminDashboard />
    </div>
  );
}
