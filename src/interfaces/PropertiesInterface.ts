export interface PropertiesInterface {
    titulo: string
    descripcion: string,
    area: number,
    tipo: string,
    referencia: string,
    direccion: string,
    videos: string[],
    imagenes: string[],
    caracteristicas: FeaturesInterface,
    certificationEnergetica: EnergeticCertificationInterface
}

export interface FeaturesInterface {
    extras: [string],
    precioPormetro: number,
    areaUsable: number,
    areaDeParcela: number,
    pisos: number,
    añoConstruccion: number,
    precio: string,
    baños: number,
    estancias: number,
}

interface EnergeticCertificationInterface {
    consumo: string,
    emisionesCo2: string
}