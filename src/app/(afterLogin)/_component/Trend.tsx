import Link from "next/link";
import style from "./trend.module.css";
export default function Trend() {
  const data = {
    text: "seulgi",
    number: "1,234",
  };
  return (
    <Link href={`/search?q=${data.text}`} className={style.container}>
      <div className={style.count}>실시간트렌드</div>
      <div className={style.title}>{data.text}</div>
      <div className={style.count}>{data.number}</div>
    </Link>
  );
}
