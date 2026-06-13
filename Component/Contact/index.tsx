import React from 'react'
import ContactHeader from './ContactHeader'
import ContactFormAndDetails from './ContactFormAndDetails'
import ContactMap from './ContactMap'
import ContactFAQ from './ContactFAQ'

export default function Contact() {
    return (
        <>
            <ContactHeader />
            <ContactFormAndDetails />
            <ContactMap />
            <ContactFAQ />
        </>
    )
}
