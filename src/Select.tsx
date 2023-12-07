import { SelectUsers } from "./client/types"

export const Select = ({ options, onChange } :
  {
    options: SelectUsers<number>[],
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  }) => {

    return (
  <div>
    <select onChange={onChange}>
      {options.map(user => (
        <option value={user.value} key={user.value}>
          {user.label}
        </option>
      ))}
    </select>
  </div>
  )
}