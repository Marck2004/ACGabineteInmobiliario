export interface PropertiesInterface {
    title: string
    description: string,
    area: number,
    houseType: string,
    reference: string,
    bedrooms: number,
    bathrooms: number,
    address: string,
    videos: string[],
    images: string[],
    features: FeaturesInterface,
    energeticCertification: EnergeticCertificationInterface
}

interface FeaturesInterface {
    extras: [string],
    pricePerMeter: number,
    usableArea: number,
    plotArea: number,
    floors: number,
    constructionYear: number,
    totalPrice: string
}

interface EnergeticCertificationInterface {
    consumption: string,
    co2Emissions: string
}