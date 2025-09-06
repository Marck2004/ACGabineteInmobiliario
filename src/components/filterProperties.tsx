import { useEffect, useState } from "react";
import type { FeaturesInterface, PropertiesInterface } from "@/interfaces/PropertiesInterface";
import logo from '@/assets/logo-landing.webp';

interface interfaceFilterProperties {
    filters: interfaceFilters[],
    properties: PropertiesInterface[]
};

export const FilterProperties: React.FC<interfaceFilterProperties> = ({ properties, filters }) => {

    const [filterProperties, setFilterProperties] = useState<PropertiesInterface[]>(properties.map((property: any) => (
        property.data
    )));

    const allProperties: PropertiesInterface[] = properties.map((property: any) => (
        property.data
    ));

    const filterPropertiesByCheckbox = (filtersByCheckbox: interfaceFilters[], baseProperties: PropertiesInterface[]) => {
        let filteredPropertiesByCheckbox = baseProperties.filter(property => (
            filtersByCheckbox.every(c => property.caracteristicas.extras.includes(c.name))
        ));
        return filteredPropertiesByCheckbox;
    };

    const filterPropertiesBySelect = (selectFilters: interfaceFilters[], baseProperties: PropertiesInterface[]) => {
        if (selectFilters.filter(f => f.name.includes('Min') || f.name.includes('Max')).length === 0) {
            const filtered = baseProperties.filter(c => c.tipo == selectFilters.find(x => x.name == 'Tipo')?.value);
            return filtered;
        }

        const intervalFilters = selectFilters.filter(f => f.name.includes('Min') || f.name.includes('Max'));
        const propertieCaracteristics = Object.keys(allProperties[0].caracteristicas) as (keyof FeaturesInterface)[];

        const filtered = intervalFilters.reduce((acc, filter) => {
            const filteredKey = propertieCaracteristics.find(c =>
                filter.name.toLowerCase().includes(c.toLowerCase())
            );
            if (!filteredKey) return acc;

            const filterValue = Number(filter.value);

            return acc.filter(p => {
                const propertyValue = Number(p.caracteristicas[filteredKey]);
                if (isNaN(propertyValue) || isNaN(filterValue)) return true;

                return filter.name.includes('Min')
                    ? propertyValue >= filterValue
                    : propertyValue <= filterValue;
            });
        }, baseProperties);

        return filtered;
    };

    useEffect(() => {
        let checkboxFilters = filters.filter(filter => filter.value === 'on');
        let selectFilters = filters.filter(filter => filter.value !== 'on');

        let filtered = checkboxFilters.length > 0 ? filterPropertiesByCheckbox(checkboxFilters, allProperties) : allProperties;

        filtered = selectFilters.length > 0 ? filterPropertiesBySelect(selectFilters, filtered) : filtered;

        setFilterProperties(filtered);
    }, [filters]);

    return (
        <div className="md:w-2/3 w-full align-bottom">
            {
                filterProperties.length > 0 ? filterProperties.map((property) => (
                    <div key={property.direccion} className="cursor-pointer border-2 rounded-2xl flex flex-col gap-5 p-2 md:flex-row transition m-4 shadow-2xl"
                        onClick={() => window.location.href = `/${property.direccion}`}>
                        <img
                            src={property.imagenes[0]}
                            alt="imagen"
                            className="object-cover w-full h-48 md:w-1/4 md:h-auto rounded-2xl"
                        />
                        <div className="flex flex-col justify-center">
                            <h3 className="text-2xl font-bold">{property.titulo}</h3>
                            <h6 className="text-2xl font-bold max-md:hidden">{property.caracteristicas.precio} €</h6>
                            <p className="overflow-hidden line-clamp-5 max-md:hidden">{property.descripcion}</p>
                        </div>
                    </div>
                )) :
                    <div className="flex flex-col mx-auto">
                        <img
                            src={logo.src}
                            className="md:h-auto"
                            alt="Logotipo de acgabineteinmobiliario en fondo blanco"
                            loading="lazy"
                            decoding="async"
                            title="Inmobiliaria acgabineteinmobiliario - Compra y venta de propiedades"
                        />
                        <h2 className="text-2xl font-bold my-2">
                            No encontramos propiedades que coincidan
                        </h2>
                        <p className="text-gray-500">
                            Intenta modificar los filtros o revisa más tarde.
                        </p>
                    </div>
            }
        </div >
    )
}