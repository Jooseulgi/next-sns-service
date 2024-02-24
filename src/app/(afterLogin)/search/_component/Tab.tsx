"use client";

import style from "../search.module.css";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
export default function Tab() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [current, setCurrent] = useState(
    searchParams.get("f") === "live" ? "new" : "hot"
  );

  const onClickHot = () => {
    setCurrent("hot");
    router.replace(`/search?q=${searchParams.get("q")}`);
  };
  // url을 클릭할 때마다 f=live가 붙는 문제의 코드
  //   const onClickNew = () => {
  //     setCurrent("new");
  //     router.replace(`/search?${searchParams.toString()}&f=live`);
  //   };
  const onClickNew = () => {
    setCurrent("new");
    const params = new URLSearchParams(searchParams.toString());
    params.set("f", "live");
    router.replace(`/search?${params.toString()}`);
  };

  useEffect(() => {
    const fParam = searchParams.get("f");
    if (fParam === "live") {
      setCurrent("new");
    }
  }, [searchParams]);

  return (
    <div className={style.homeFixed}>
      <div className={style.homeTab}>
        <div onClick={onClickHot}>
          인기
          <div className={style.tabIndicator} hidden={current === "new"}></div>
        </div>
        <div onClick={onClickNew}>
          최신
          <div className={style.tabIndicator} hidden={current === "hot"}></div>
        </div>
      </div>
    </div>
  );
}
