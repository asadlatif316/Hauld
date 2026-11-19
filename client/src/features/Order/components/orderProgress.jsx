import { FormSectionWrapper as Card } from '@/components';
import { orderProgressSteps } from '../constants/orderProgressSteps';
const OrderProgress = ({ status }) => {
  return (
    <Card>
      <h4>Progress</h4>
      <div>
        {orderProgressSteps.map((step) => (
          <div key={step.key}>
            <div></div>
            <p>{step.label}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default OrderProgress;
