
type ListSelectProps<T> = {
    items: T[],
    onClickItem: (item: T) => void;
    displayAttribute: keyof T;
}

export const ListSelect = <T extends unknown>({ items, onClickItem, displayAttribute }: ListSelectProps<T>) => {
    return (<ul>
        {items.map((item, index) => (
            <li>
                <button onClick={() => onClickItem(item)}>{item[displayAttribute] as string}</button>
            </li>
        ))}
    </ul>);
}