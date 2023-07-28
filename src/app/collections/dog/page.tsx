import React from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Products from "@/app/components/Products";
import MenuCollection from "@/app/components/MenuCollection";

function Page(props) {
  return (
    <div>
      <Navbar />
      <div className="px-20">
        <div className="pet-stock-text-color py-10 text-5xl font-semibold">
          DOG SUPPLIES
        </div>

        <main className="flex flex-row">
          <div1 className="basis-1/3">
            <MenuCollection />
          </div1>
          <div2 className=" basis-2/3 ">
            <Products />
          </div2>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
