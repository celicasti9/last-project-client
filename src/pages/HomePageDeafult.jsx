import React from 'react';
import CardDataStats from '../components/CardDataStats';
import CardsItemOne from '../components/Cards/CardsItemOne';
import CardsItemTwo from '../components/Cards/CardsItemTwo';
import CardsItemThree from '../components/Cards/CardsItemThree';
import DefaultLayout3 from '../layout/DefaultLayout3';

const HomePageDefault = () => {
  return (
    <DefaultLayout3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">

        <div className="col-span-12 xl:col-span-8">
        
        </div>
        
      </div>
    </DefaultLayout3>
  );
};

export default HomePageDefault;
