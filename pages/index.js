import Link from "next/link";
import { client } from "../libs/client";

export default function Home({ note }) {
  return (
    <div>
      <ul>
        {note.map((note) => (
          <li key={note.id}>
            <Link href={`/notes/${note.id}`}>
              <a>{note.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "notes" });

  return {
    props: {
      note: data.contents,
    },
  };
};
