import React, {useState} from 'react';
import Pagination from '@material-ui/lab/Pagination';



const PaginationComponent = ({ postsPerPage, totalPosts, paginate}) => {

    const countNumber = totalPosts / postsPerPage;
    const [page, setPage] = React.useState(1);

    const handleChange = (value) => {
        
        setPage(value);
        paginate(page);
    }

    return (
        <div className="d-flex justify-content-center col-12 mt-5 ml-2">
            <ul className='pagination'>
                <Pagination count={countNumber}  onChange={handleChange} variant="outlined" color="secondary"/>
            </ul>            
        </div>
    );
};

export default PaginationComponent;