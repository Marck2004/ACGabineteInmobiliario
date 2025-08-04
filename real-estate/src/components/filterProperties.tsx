import React, { useEffect } from "react";
import type { CollectionEntry } from 'astro:content';

type Properties = CollectionEntry<'properties'>[];

interface interfaceFilterProperties {
    filters: { [key: string]: string },
    properties: Properties
};

export const FilterProperties: React.FC<interfaceFilterProperties> = ({ properties, filters }) => {
    useEffect(() => {
        console.log(properties);

    }, [filters]);
    return (
        <div className="w-2/3">
            {properties.map((property) => (
                <div key={property.id} className="border-2 rounded-2xl flex gap-5">
                    <img src={property.data.images[0]} alt="imagen" className="object-cover w-1/4 h-full rounded-2xl" />
                    <div className="flex-col">
                        <h3 className="text-2xl font-bold">{property.data.title}</h3>
                        <h6 className="text-2xl font-bold">{property.data.features.totalPrice} €</h6>
                        <p className="overflow-hidden line-clamp-5">{property.data.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )

}