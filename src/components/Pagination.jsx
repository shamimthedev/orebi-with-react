import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Product from './Product';
import Flex from './Flex';
import Data from '../data'


function Items({ currentItems }) {

  return (
    <Flex className={'gap-x-10 flex-wrap'}>
      {currentItems &&
        currentItems.map((item) => (
          <div className='pt-16'>
            <div className='w-[273px] bg-white relative group'>
              <Product
                imgSrc={item.image}
                badge={item.badge}
                para={item.addWishList}
                para2={item.compare}
                para3={item.addCart}
                para4={item.title}
                para5={item.price}
                para6={item.colorType}
              />
            </div>
          </div>
        ))}
    </Flex>
  );
}

function Pagination({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = Data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(Data.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % Data.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <div className='pt-[50px] flex justify-between'>
      <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        containerClassName="flex gap-x-4"
        pageLinkClassName="bg-white text-TextColor p-3 border-2 border-BorderInfoColor"
      />
        <h2>{`Products from ${itemOffset+1} to ${endOffset<Data.length?endOffset:Data.length} of ${Data.length}`}</h2>
      </div>
    </>
  );
}

export default Pagination
