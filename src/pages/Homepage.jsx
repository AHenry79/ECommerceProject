const HomePage = () => {
  return (
    <div className="homesection">
      <header className="groceryheader">
        <h1>Welcome to Group 1 Grocery!</h1>
      </header>
      <main className="home-main">
        <section className="promosection">
          <h2>Current Promotions</h2>
          <div className="promotionlist">
            <div className="promoitem">
              <h3>Bananas</h3>
              <p>20% off per pound</p>
            </div>
            <div className="promoitem">
              <h3>Cherries</h3>
              <p>Only $3.99 when you buy 2 or more</p>
            </div>
            <div className="promoitem">
              <h3>Blueberries</h3>
              <p>Save $1.00 (max:4)</p>
            </div>
            <div className="promoitem">
              <h3>Watermelon</h3>
              <p>Buy 1 get 1 50% off</p>
            </div>
            <div className="promoitem">
              <h3>Broccoli</h3>
              <p>Save $.99 per pound</p>
            </div>
            <div className="promoitem">
              <h3>Baby Carrots</h3>
              <p>$2.00 off per unit</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
