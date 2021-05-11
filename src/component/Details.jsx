import React, {useState} from 'react'
import Name from './Name';
import PaginationComponent from './Pagination'
import usePagination from './FunctionPagination';
// import usePagination from '.';

function Details() {

    const {currentPosts, postsPerPage, heroes, paginate} = usePagination();
    
    return (
        <>
            <Name
                Hero = {currentPosts}
            />

            <PaginationComponent
                postsPerPage={postsPerPage}
                totalPosts={heroes.length}
                paginate={paginate}
            />
        </>
    )
}

export default Details
