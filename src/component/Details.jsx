import React, {useState} from 'react'
import heroes from './Data';
import Name from './Name';
import PaginationComponent from './Pagination'

function Details() {

    // ==============PAGINATE===================
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(2);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    
    const currentPosts =  heroes.slice(indexOfFirstPost, indexOfLastPost);
    
    const paginate = pageNumber => setCurrentPage(pageNumber);
    // ==========================================
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
