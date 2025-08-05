import '@/styles/soldStyles.css';
import { SelectFilter } from './selectFilter';
import { filterSelects } from '@/consts/filterSelects';
import { caracteristicsFilters } from '@/consts/caracteristicsFilters';
import { filterWithChildsConst } from '@/consts/selectFilterWithChilds';
import React, { useEffect } from 'react';

interface AsideSoldProps {
    filters: interfaceFilters[];
    setFilters: React.Dispatch<React.SetStateAction<interfaceFilters[]>>;
}

export const AsideSold: React.FC<AsideSoldProps> = ({ filters, setFilters }) => {

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFilters((prevFilters) => ([
            ...prevFilters,
            { name: name, value: value }
        ]));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (!filters.some(filter => filter.name === name)) {
            setFilters((prevFilters) => ([
                ...prevFilters,
                { name: name, value: value }
            ]));
        } else {
            setFilters((prevFilters) => prevFilters.filter(filter => filter.name !== name));
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