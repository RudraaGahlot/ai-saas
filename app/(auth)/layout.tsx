import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nirman-AI | Authentication",
  description: "AI SaaS Platform.",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center h-screen bg-stone-700">{children}</div>
  );
}