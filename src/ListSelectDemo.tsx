import { ListSelect } from "./ListSelect"
import { Product } from "./client/types"

export const ListSelectDemo = () => {

    type Customer = {
        id: number,
        name: string
    }

    const customers: Customer[] = [
        {
            id: 1,
            name: "Kalle"
        },
        {
            id: 2,
            name: "Eva"
        },
        {
            id: 3,
            name: "Nisse"
        }
    ]

    const products: Product[] = [
        {
            id: 2,
            title: "Hårtork",
            price: 500
        },
        {
            id: 3,
            title: "Jacka",
            price: 700
        },
        {
            id: 4,
            title: "Lampa",
            price: 30
        }
    ]

    return (
        <>
            <p>Välj produkt:</p>
            <ListSelect
                items={products}
                onClickItem={(item) => console.log('Du klickade på', item)}
                renderButtonText={(item) => `${item.title} - ${item.price} kr`}
            />
            <p>Välj kund:</p>
            <ListSelect
                items={customers}
                onClickItem={(item) => console.log('Du valde en kund:', item)}
                renderButtonText={(item) => item.name}
            />
        </>
    )
}