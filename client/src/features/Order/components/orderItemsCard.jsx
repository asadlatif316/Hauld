const OrderItemsCard = ({ items }) => {
  return <div>
    <div>
      <div>items header</div>
      <div>
        {items.map((item) => (
          <div>items</div>
        )) }
      </div>
      <div>prices</div>
      <div>total</div>
    </div>
  </div>;
};

export default OrderItemsCard;
