import { useState } from "react";
import { AsideSold } from "./asideSolds";
import { FilterProperties } from "./filterProperties";

export const FilterParent = ({ properties }: any) => {

    const [filters, setFilters] = useState<interfaceFilters[]>([]);

    return (
        <div className="flex gap-5">
            <AsideSold filters={filters} setFilters={setFilters} />
            <FilterProperties properties={properties} filters={filters} />
        </div>
    );
};