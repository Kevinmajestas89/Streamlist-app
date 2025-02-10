import type { CartItem } from "@/types"

type CartListProps = {
  items: CartItem[]
  onRemove: (id: number) => void
}

export default function CartList({ items, onRemove }: CartListProps) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item.id} className="flex justify-between items-center bg-white shadow rounded-lg p-4">
          <div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-gray-600">${item.price.toFixed(2)}</p>
          </div>
          <button
            onClick={() => onRemove(item.id)}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  )
}

