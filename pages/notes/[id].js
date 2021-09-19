import { client } from "../../libs/client";
import styles from '../../styles/Home.module.scss';

export default function NoteId({ note }) {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{note.title}</h1>
      <p className={styles.publishedAt}>{note.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${note.body}`,
        }}
        className={styles.post}
      />
    </main>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "notes" });

  const paths = data.contents.map((content) => `/notes/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "notes", contentId: id });

  return {
    props: {
      note: data,
    },
  };
};
