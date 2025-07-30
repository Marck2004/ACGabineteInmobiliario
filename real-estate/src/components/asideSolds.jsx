import '@/styles/soldStyles.css';
import { SelectFilter } from './selectFilter';
import { filterSelects } from '@/consts/filterSelects';
import { filterSelectsInterface } from '@/interfaces/filterSelectsInterface'
import { caracteristicsFilters } from '@/consts/caracteristicsFilters';
import { filterWithChildsConst } from '@/consts/selectFilterWithChilds';
const fillSelectPrice = (maxLength, minLength, frequency) => {
  return Array.from({ length: (maxLength - minLength) / frequency + 1 }, (_, i) => {
    const value = minLength + i * frequency;
    return (
      <option key={value} value={value}>
        {value.toLocaleString('es-ES')}
      </option>
    );
  });
};

export const AsideSold = () => (
    <aside className="p-5 bg-gray-200 w-1/5 space-y-3.5 border-2 border-gray-400">
        <h1 className="filtersTitle">Filtrar resultados</h1>
        {filterWithChildsConst.map((filter) => (
        <div className="divFiltersCol" key={filter.name}>
            <p className="filtersTitle">{filter.name}</p>
            <select name={filter.name} id={filter.name} className="selectFilters">
                {filter.childs.map((child) => (
                    <option value={child} key={child}>{child}</option>
                ))}
            </select>
        </div> 
        ))}
        {filterSelects.map((filter) => (
            <SelectFilter key={filter.name} name={filter.name} maxLength={filter.maxLength} minLength={filter.minLength} frequency={filter.frequency}/>
        ))}

        <h1 className='filtersTitle'>Características</h1>
        {caracteristicsFilters.map((filter) => (
            <div key={filter}>
                <input type="checkbox" name={filter} id={filter} />
                <label htmlFor={filter}>
                    {filter}
                </label>         
            </div>
        ))}
    </aside>
);