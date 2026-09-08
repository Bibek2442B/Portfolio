export default function ButtonIcon({ children }: { children: React.ReactNode }) {
  return(
    <div className={"flex items-center justify-center border-[0.5px] border-border rounded  mx-2 p-1"}>
      {children}
    </div>
  );
}