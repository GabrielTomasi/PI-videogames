
const Pagination = ({currentPage, totalPage, onPageChange})=>{
const pageNumbers = Array.from({length: totalPage}, (_,index) => index+1)

return (
    <div>
        <button 
        onClick={()=>{onPageChange(currentPage-1)}}
        disabled={currentPage===1}
        >Preview</button>
        <div>
        {pageNumbers.map((page)=>(
            <button
            key={page}
            onClick={()=>{onPageChange(page)}}
            >{page}</button>
        ))}
        </div>
        <button
        onClick={()=>{onPageChange(currentPage+1)}}
        disabled={currentPage=== totalPage}
        >Next</button>
    </div>
)
}

export default Pagination