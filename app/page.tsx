"use client";
import AboutLogin from "@/Components/AboutLogin";
import AboutMenu from "@/Components/AboutMenu";
import Dashboard from "@/Components/Dashboard";
import Footer from "@/Components/Footer";
import Payment from "@/Components/payment";
import WebsiteLayout from "@/Components/WebLayout";

export default function Home() {
  return (
    <>
      <WebsiteLayout>
        <Dashboard />
        <AboutLogin />
        <AboutMenu />
        <Payment />
        <Footer />
      </WebsiteLayout>
    </>
  );
}
