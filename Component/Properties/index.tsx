import React from 'react'
import PropertyFilters from './PropertyFilters'
import FeaturedCollections from './FeaturedCollections'
import MarketListings from './MarketListings'

export default function Properties() {
    return (
        <>
            <PropertyFilters />
            <FeaturedCollections />
            <MarketListings />
        </>
    )
}