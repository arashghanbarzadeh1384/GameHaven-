import BenefitsStyle from "./Benefits.module.scss";
const Benefits = () => {
  return (
    <>
      <div className={BenefitsStyle.root__aboute}>
        <h2> چرا GameHaven را انتخاب کنید؟</h2>
        <div className={BenefitsStyle.root__Benefits}>
          <div className={BenefitsStyle.root__Benefits1}>
            <h3>دنیایی از بازی‌های مهیج</h3>
            <p>
              جدیدترین و بهترین بازی‌ها را اینجا پیدا کنید. از اکشن تا استراتژی،
              همه را پوشش می‌دهیم!
            </p>
          </div>
          <div className={BenefitsStyle.root__Benefits1}>
            <h3>جامعه‌ای پرشور از گیمرها</h3>
            <p>
              با سایر گیمرها رقابت کنید و تیم بسازید. مهارت‌های خود را به سطح
              بالاتری ببرید!
            </p>
          </div>
          <div className={BenefitsStyle.root__Benefits1}>
            <h3> پشتیبانی حرفه‌ای، همیشه در کنار شما</h3>
            <p>
              هر مشکلی داشتید، ما اینجاییم تا کمکتان کنیم. پشتیبانی سریع و
              حرفه‌ای را تجربه کنید!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
