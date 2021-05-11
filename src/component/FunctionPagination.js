import React, {useState} from 'react';
import heroes from './Data';

const usePagination = ()  => {
    
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(2); //numero de items

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    
    const currentPosts =  heroes.slice(indexOfFirstPost, indexOfLastPost); //data a entregar
    
    const paginate = pageNumber => setCurrentPage(pageNumber);
    

    return {currentPosts, postsPerPage, heroes, paginate}
    // const {currentPosts, postsPerPage, heroes, paginate} = usePagination();

}

export default usePagination;