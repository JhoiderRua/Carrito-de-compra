import { useId } from "react";
import { useFilters } from "../hooks/useFilters.js";
import filtterModule from "./Filters.module.css";

export function Filters() {
  const { filters, setFilters } = useFilters();

  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  };

  const handleChangeCategory = (event) => {
    // ⬇️ ESTO HUELE MAL
    // estamos pasando la función de actualizar estado
    // nativa de React a un componente hijo
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className={filtterModule.section}>
      <div>
        <label htmlFor={categoryFilterId}>
          <strong className={filtterModule.categoria}>Categoria--</strong>
        </label>
        <select
          className={filtterModule.select}
          id={categoryFilterId}
          onChange={handleChangeCategory}
        >
          <option className={filtterModule.option} value="all">
            Todas
          </option>
          <option className={filtterModule.option} value="laptops">
            Portátiles
          </option>
          <option className={filtterModule.option} value="smartphones">
            Celulares
          </option>
        </select>
      </div>
    </section>
  );
}
