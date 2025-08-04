
type SelectFilterProps = {
  name: string;
  maxLength: number;
  minLength: number;
  frequency: number;
  onChange: any;
};

const fillSelectPrice = (maxLength: number, minLength: number, frequency: number) => {
  return Array.from({ length: (maxLength - minLength) / frequency + 1 }, (_, i) => {
    const value = minLength + i * frequency;
    return (
      <option key={value} value={value}>
        {value.toLocaleString('es-ES')}
      </option>
    );
  });
};

export const SelectFilter = ({ name, maxLength, minLength, frequency, onChange }: SelectFilterProps) => (
  <div>
    <p className='text-center'>{name}</p>
    <div className='divFiltersInline gap-2'>
      <select name={`${name}Min`} id={`${name}Min`} className="selectFilters" onChange={onChange}>
        <option value="Min.">Min.</option>
        {fillSelectPrice(maxLength, minLength, frequency)};
        <option value="Sin limite">Sin límite</option>
      </select>
      <select name={`${name}Max`} id={`${name}Max`} className="selectFilters" onChange={onChange}>
        <option value="Max.">Max.</option>
        {fillSelectPrice(maxLength, minLength, frequency)};
        <option value="Sin limite">Sin límite</option>
      </select>
    </div>
  </div>
);