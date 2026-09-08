export default function IconButton({children}: {children: React.ReactNode}) {
  return(
    <div className={"flex items-center justify-center border rounded  mx-1 p-1"}>{children}</div>
  );
}
