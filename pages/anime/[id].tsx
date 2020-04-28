import { GetServerSideProps } from "next";
import axios from "axios";
import styles from "./Anime.module.scss";
import Head from "next/head";

export default function Anime({ anime }: any) {
    return (
        <section className={styles.anime_page}>
            <Head>
                <title>{anime.attributes.titles.en_jp}</title>
            </Head>
            <div className="container">
                <img src={anime.attributes.posterImage.small} />
                <h2>{anime.attributes.titles.en_jp}</h2>
                <div className={styles.attributes}>
                    <h5>
                        Start Date: <b>{anime.attributes.startDate}</b>
                    </h5>
                    <h5>
                        Rating: <b>{anime.attributes.ageRating}</b>
                    </h5>
                    <h5>
                        Status: <b>{anime.attributes.status}</b>
                    </h5>
                    <h5>
                        Episodes Count: <b>{anime.attributes.episodeCount}</b>
                    </h5>
                    <h5>
                        Popularity: <b>{anime.attributes.popularityRank}</b>
                    </h5>
                    <h5>
                        Nsfw: <b>{anime.attributes.nsfw ? "Yes" : "No"}</b>
                    </h5>
                </div>

                <p>{anime.attributes.synopsis}</p>
            </div>
        </section>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const res = await axios.get(`https://kitsu.io/api/edge/anime/${params.id}`);
    return { props: { anime: res.data.data } };
};
