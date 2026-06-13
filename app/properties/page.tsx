import Header from "@/Component/Header";
import Footer from "@/Component/Footer";
import Properties from '@/Component/Properties'
import React from 'react'

export default function page() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans">
            <Header />
            <main className="flex-grow">
                <Properties />
            </main>
            <Footer />
        </div>
    )
}
