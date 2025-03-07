import TimerSale from "./CounterSaleTimer/TimerSale";
import SaleTimerStyle from "./SaleTimer.module.scss";
import SliderSale from "./SliderSale/SliderSale";
const SaleTimer = () => {
  return (
    <>
      <div className={SaleTimerStyle.saleTimer}>
        <img src="../../../public/Images/10016860_27331-scaled.jpg" alt="" />
        <h2 id={SaleTimerStyle.saleTimer__title}>پیشنهاد شگفت انگیز</h2>
        <TimerSale targetDate="2025-05-11T00:00:00" />
        <SliderSale />
      </div>
    </>
  );
};

export default SaleTimer;
