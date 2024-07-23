
import Button from "../Button";

function Pagination({ pageInfo }) {
  let pageNumber = pageInfo.page;
  let totalPages = pageInfo.totalPages;
  let pageNumberList = [];
  let size = 0;
  let i = pageNumber;
  if(i + 5 > totalPages){
    i = totalPages - 4;
  }
  for (; i <= totalPages && size < 5; i++) {
    pageNumberList.push(<Button disabled = {pageNumber == i ? "disabled" : ""} bgColor={pageNumber == i ? "bg-slate-400" : undefined} key={i} id={i}>{i}</Button>);
    size++;
  }
  i--;
  return (
    <div className="flex justify-center items-center gap-2 pt-2">
      <Button key= {1} id={1} hidden = {pageNumber == 1 ? "hidden" : ""}>&#60;&#60;</Button>
      <Button key={`${pageNumber}_prev`} id={`${pageNumber}_prev`} hidden = {pageNumber == 1 ? "hidden" : ""}>&#60;</Button>
      <>{pageNumberList}</>
      {i < totalPages ? <>...</> : <></>}
      <Button key={`${pageNumber}_next`} id={`${pageNumber}_next_${totalPages}`} hidden = {pageNumber == totalPages ? "hidden" : ""}>&#62;</Button>
      <Button key={totalPages} id={totalPages} hidden = {pageNumber == totalPages ? "hidden" : ""}>&#62;&#62;</Button>
    </div>
  );
}

export default Pagination;
