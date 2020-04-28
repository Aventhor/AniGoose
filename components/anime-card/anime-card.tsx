import Link from "next/link";
import styles from "./AnimeCard.module.scss";

export default function AnimeCard({ anime }) {
    return (
        <div
            className={`col-12 col-sm-6 col-md-4 col-lg-3 ${styles.anime_card}`}
        >
            <Link href="/anime/[id]" as={`/anime/${anime.id}`}>
                <a>
                    <pre>
                        <img src={anime.attributes.posterImage.small} />
                    </pre>
                    <h2>{anime.attributes.titles.en_jp}</h2>
                </a>
            </Link>
        </div>
    );
}
