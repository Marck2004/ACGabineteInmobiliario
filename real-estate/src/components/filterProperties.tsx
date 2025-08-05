import React, { useEffect, useState } from "react";
import type { CollectionEntry } from 'astro:content';
import type { PropertiesInterface } from "@/interfaces/PropertiesInterface";


interface interfaceFilterProperties {
    filters: interfaceFilters[],
    properties: PropertiesInterface[]
};

export const FilterProperties: React.FC<interfaceFilterProperties> = ({ properties, filters }) => {

    const [filterProperties, setFilterProperties] = useState<PropertiesInterface[]>(properties.map((property: any) => (
        property.data
    )));

    const filterPropertiesByCheckbox = (filtersByCheckbox: interfaceFilters[]) => {
        const allProperties = properties.map((property: any) => (
            property.data
        ));
        let aux = allProperties.filter(property => (
            filtersByCheckbox.every(c => (
                property.features.extras.includes(c.name)
            ))
        ));
        setFilterProperties(aux);
    };

    useEffect(() => {
        let checkboxFilters = filters.filter((filter) => filter.value == 'on');
        if (checkboxFilters.length >= 0)
            filterPropertiesByCheckbox(checkboxFilters);

    }, [filters]);
    return (
        <div className="w-2/3">
            {filterProperties.map((property) => (
                <div key={property.address} className="border-2 rounded-2xl flex gap-5">
                    <img src={property.images[0]} alt="imagen" className="object-cover w-1/4 h-full rounded-2xl" />
                    <div className="flex-col">
                        <h3 className="text-2xl font-bold">{property.title}</h3>
                        <h6 className="text-2xl font-bold">{property.features.totalPrice} €</h6>
                        <p className="overflow-hidden line-clamp-5">{property.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}