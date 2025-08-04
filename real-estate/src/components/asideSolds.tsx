import '@/styles/soldStyles.css';
import { SelectFilter } from './selectFilter';
import { filterSelects } from '@/consts/filterSelects';
import { caracteristicsFilters } from '@/consts/caracteristicsFilters';
import { filterWithChildsConst } from '@/consts/selectFilterWithChilds';
import React, { useEffect } from 'react';

type Filters = { [key: string]: string };
interface AsideSoldProps {
    filters: Filters;
    setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

export const AsideSold: React.FC<AsideSoldProps> = ({ filters, setFilters }) => {

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (!(name in filters)) {
            setFilters((prevFilters: any) => ({
                ...prevFilters,
                [name]: value
            }));
        } else {
            setFilters((prevFilters: any) => {
                const { [name]: _, ...rest } = prevFilters;
                return rest;
            });
        }
    };

    return (
        <aside className="p-5 bg-gray-200 w-1/5 space-y-3.5 border-2 border-gray-400">
            <h1 className="filtersTitle">Filtrar resultados</h1>
            {filterWithChildsConst.map((filter) => (
                <div className="divFiltersCol" key={filter.name}>
                    <p className="filtersTitle">{filter.name}</p>
                    <select name={filter.name} id={filter.name} className="selectFilters" onChange={handleSelectChange}>
                        {filter.childs.map((child) => (
                            <option value={child} key={child}>{child}</option>
                        ))}
                    </select>
                </div>
            ))}
            {filterSelects.map((filter) => (
                <SelectFilter key={filter.name} name={filter.name} maxLength={filter.maxLength} minLength={filter.minLength} frequency={filter.frequency} onChange={handleSelectChange} />
            ))}

            <h1 className='filtersTitle'>Características</h1>
            {caracteristicsFilters.map((filter) => (
                <div key={filter}>
                    <input type="checkbox" name={filter} id={filter} onChange={handleCheckboxChange} />
                    <label htmlFor={filter}>
                        {filter}
                    </label>
                </div>
            ))}
        </aside>
    );
};