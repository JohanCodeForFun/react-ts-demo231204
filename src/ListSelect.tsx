
type ListSelectProps<T> = {
    items: T[],
    onClickItem: (item: T) => void;
    renderButtonText: (item: T) => string;
}

export const ListSelect = <T extends unknown>({ items, onClickItem, renderButtonText }: ListSelectProps<T>) => {
    return (<ul>
        {items.map((item, index) => (
            <li>
                <button onClick={() => onClickItem(item)}>{renderButtonText(item)}</button>
            </li>
        ))}
    </ul>);
}