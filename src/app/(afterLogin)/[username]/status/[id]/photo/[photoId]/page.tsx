import Home from "@/app/(afterLogin)/home/page";

type Props = {
  params: { username: string; id: string; photoId: string };
};
export default function Page({ params }: Props) {
  //슬러그 부분들을 params로 가져올 수 있다
  //슬러그 [username] 과 같이 [] 안에 들어간 것
  params.username; // elonmusk
  params.id; // 1
  params.photoId; // 1
  return <Home />;
}
