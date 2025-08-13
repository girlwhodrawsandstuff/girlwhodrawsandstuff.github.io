interface ItemListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
}

const ItemList = <T,>({ items, renderItem }: ItemListProps<T>) => <>{items.map(renderItem)}</>;

export default ItemList;
