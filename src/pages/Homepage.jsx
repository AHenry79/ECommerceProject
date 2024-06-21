const HomePage = () => {
  return (
    <div className="homesection">
      <header className="groceryheader">
        <h1 className="welcomeHeader">Welcome to Group 1 Grocery!</h1>
      </header>
      <main>
        <section className="promosection">
          <h2 className="currentPromoHeader">Current Promotions</h2>
          <div className="promotionlist">
            <div className="promoitem">
              <h3 className="promoItemHeader">Bananas</h3>
              <p>20% off per pound</p>
            </div>
            <div className="promoitem">
              <h3 className="promoItemHeader">Cherries</h3>
              <p>Only $3.99 when you buy 2 or more</p>
            </div>
            <div className="promoitem">
              <h3 className="promoItemHeader">Blueberries</h3>
              <p>Save $1.00 (max:4)</p>
            </div>
            <div className="promoitem">
              <h3 className="promoItemHeader">Watermelon</h3>
              <p>Buy 1 get 1 50% off</p>
            </div>
            <div className="promoitem">
              <h3 className="promoItemHeader">Broccoli</h3>
              <p>Save $.99 per pound</p>
            </div>
            <div className="promoitem">
              <h3 className="promoItemHeader">Baby Carrots</h3>
              <p>$2.00 off per unit</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
