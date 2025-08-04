import { useEffect, useState } from "react";
import { AsideSold } from "./asideSolds";
import { FilterProperties } from "./filterProperties";

export const FilterParent = ({ properties }: any) => {

    const [filters, setFilters] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        console.log('Filters actualizado:', filters);
    }, [filters]);

    return (
        <div className="flex gap-5">
            <AsideSold filters={filters} setFilters={setFilters} />
            <FilterProperties properties={properties} filters={filters} />
        </div>
    );
};