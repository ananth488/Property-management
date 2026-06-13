import React from 'react'
import ServiceHero from './ServiceHero'
import ServiceCards from './ServiceCards'
import OperationalSupport from './OperationalSupport'
import GoldStandard from './GoldStandard'
import ServiceCTA from './ServiceCTA'

export default function Services() {
    return (
        <>
            <ServiceHero />
            <ServiceCards />
            <OperationalSupport />
            <GoldStandard />
            <ServiceCTA />
        </>
    )
}