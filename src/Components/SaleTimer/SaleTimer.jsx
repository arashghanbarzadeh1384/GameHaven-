import SaleTimerStyle from "./SaleTimer.module.scss";
const SaleTimer = () => {
  return (
    <>
      <div className={SaleTimerStyle.saleTimer}>
        <img src="../../../public/Images/10016860_27331-scaled.jpg" alt="" />
        <h2 id={SaleTimerStyle.saleTimer__title}>پیشنهاد شگفت انگیز</h2>
      </div>
    </>
  );
};

export default SaleTimer;
