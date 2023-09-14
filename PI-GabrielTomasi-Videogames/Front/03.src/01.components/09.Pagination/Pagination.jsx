import style from "./Pagination.module.css"
const Pagination = ({currentPage, totalPage, onPageChange})=>{
const pageNumbers = Array.from({length: totalPage}, (_,index) => index+1)

return (
    <div className={style.pagination}>
        <button
        className={style.active}
        onClick={()=>{onPageChange(currentPage-1)}}
        disabled={currentPage===1}
        >Preview</button>
        <div>
        {pageNumbers.map((page)=>(
            <button
            className={style.pagebuton}
            key={page}
            onClick={()=>{onPageChange(page)}}
            >{page}</button>
        ))}
        </div>
        <button
        className={style.active}
        onClick={()=>{onPageChange(currentPage+1)}}
        disabled={currentPage=== totalPage}
        >Next</button>
    </div>
)
}

export default Pagination