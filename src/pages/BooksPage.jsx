import React from 'react';
import FileDropZone from '../components/Forms/FileDropZone';
import SelectGroupThree from '../components/Forms/SelectGroup/SelectGroupThree';
import SelectGroupFour from '../components/Forms/SelectGroup/SelectGroupFour';
import SelectOptionThree from '../components/Forms/SelectOption/SelectOptionThree';
import DefaultLayout from '../layout/DefaultLayout';

const BooksPage = () => {
  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        
      </div>

      <div className="flex flex-col gap-9">
          {/* <!-- Survey Form --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                New Book Form
              </h3>
            </div>
            <form action="#">
              <div className="p-6.5">
                <div className="mb-5">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter title"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="mb-5">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Year
                  </label>
                  <input
                    type="number"
                    placeholder="Enter year"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="mb-5">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    CodeISBN
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your age"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <SelectGroupThree />

                <SelectGroupFour />


                <div className="mb-5.5">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Description
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Type here"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  ></textarea>
                </div>

                <div className="flex flex-col gap-9">
                         {/* <!-- File Drop Zone --> */}
                     <FileDropZone />
                </div>

                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">

        <div className="col-span-12 xl:col-span-8">

        </div>

      </div>
    </DefaultLayout>
  );
};

export default BooksPage;
