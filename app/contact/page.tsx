import Contact from '@/Component/Contact'
import Footer from '@/Component/Footer'
import Header from '@/Component/Header'
import React from 'react'

export default function page() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans">
            <Header />
            <main className="flex-grow">
                <Contact />
            </main>
            <Footer />
        </div>
    )
}
