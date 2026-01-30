import React, { useState } from "react";
import { Sidebar, Navbar } from "@/app/components/layout";
import { DashboardView } from "@/app/components/dashboard";
import { TicketListView } from "@/app/components/ticket-list";
import { NewTicketModal } from "@/app/components/new-ticket-modal";
import { Toaster } from "sonner";

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardView />;
      case "tickets":
        return <TicketListView onNewTicket={() => setIsModalOpen(true)} />;
      case "history":
        return (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-4">
            <div className="p-6 bg-slate-50 rounded-full">
              <span className="text-4xl">📚</span>
            </div>
            <h3 className="text-xl font-bold text-slate-800">Riwayat Tiket</h3>
            <p className="text-slate-500 max-w-md">Fitur riwayat tiket sedang dalam pengembangan. Anda akan dapat melihat semua tiket masa lalu di sini.</p>
          </div>
        );
      case "settings":
        return (
          <div className="bg-white p-8 rounded-2xl border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Pengaturan Profil</h3>
            <div className="space-y-6 max-w-lg">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-slate-100 rounded-full border-2 border-white shadow-sm flex items-center justify-center text-2xl">
                  👤
                </div>
                <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50">
                  Ganti Foto
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-500">Nama Depan</label>
                  <p className="text-slate-800 font-medium">Budi</p>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-500">Nama Belakang</label>
                  <p className="text-slate-800 font-medium">Santoso</p>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-500">Email</label>
                  <p className="text-slate-800 font-medium">budi.s@company.com</p>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-slate-500">Departemen</label>
                  <p className="text-slate-800 font-medium">Marketing</p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <Toaster position="top-right" />
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="pl-64">
        <Navbar />
        
        <main className="pt-24 pb-12 px-8 max-w-7xl mx-auto">
          {renderContent()}
        </main>
      </div>

      <NewTicketModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

      {/* Floating Action Button for Mobile / Quick Access */}
      <button 
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8 w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40 lg:hidden"
      >
        <span className="text-2xl">+</span>
      </button>
    </div>
  );
}
