import React from "react";

function Products(props) {
  return (
    <div>
      <product>
        <h1 className="py-10 pl-48 text-2xl font-semibold">
          Get more for less with Petstock
        </h1>

        <card className="flex w-screen flex-nowrap justify-center">
          <div className="card ml-5 w-72 bg-base-100 shadow-xl">
            <figure>
              <img src="/./logo_petstock.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-base">
                Royal Canin Intense Beauty Adult In Jelly Wet Cat Food 85G
              </h2>
              <p className="text-sm">RC cat 85g $2.85ea when you buy 36</p>
              <p className="py-8 text-3xl font-semibold">$3.45</p>
              <div className="card-actions ">
                <button className="p-btn-addToCart pet-stock-color btn text-white">
                  Add to Card
                </button>
              </div>
            </div>
          </div>
          <div className="card ml-5 w-72 bg-base-100 shadow-xl">
            <figure>
              <img src="/./logo_petstock.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-base">
                Royal Canin Intense Beauty Adult In Jelly Wet Cat Food 85G
              </h2>
              <p className="text-sm">RC cat 85g $2.85ea when you buy 36</p>
              <p className="py-8 text-3xl font-semibold">$3.45</p>
              <div className="card-actions ">
                <button className="p-btn-addToCart pet-stock-color btn text-white">
                  Add to Card
                </button>
              </div>
            </div>
          </div>
          <div className="card ml-5 w-72 bg-base-100 shadow-xl">
            <figure>
              <img src="/./logo_petstock.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-base">
                Royal Canin Intense Beauty Adult In Jelly Wet Cat Food 85G
              </h2>
              <p className="text-sm">RC cat 85g $2.85ea when you buy 36</p>
              <p className="py-8 text-3xl font-semibold">$3.45</p>
              <div className="card-actions ">
                <button className="p-btn-addToCart pet-stock-color btn text-white">
                  Add to Card
                </button>
              </div>
            </div>
          </div>
          <div className="card ml-5 w-72 bg-base-100 shadow-xl">
            <figure>
              <img src="/./logo_petstock.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-base">
                Royal Canin Intense Beauty Adult In Jelly Wet Cat Food 85G
              </h2>
              <p className="text-sm">RC cat 85g $2.85ea when you buy 36</p>
              <p className="py-8 text-3xl font-semibold">$3.45</p>
              <div className="card-actions ">
                <button className="p-btn-addToCart pet-stock-color btn text-white">
                  Add to Card
                </button>
              </div>
            </div>
          </div>
        </card>
      </product>
    </div>
  );
}

export default Products;
