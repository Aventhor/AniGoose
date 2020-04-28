import Link from "next/link";
import styles from "./Nav.module.scss";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

export default function Nav() {
    const [animeCount, setAnimeCount] = useState(null);

    useEffect(() => {
        async function getCount() {
            const res = await axios.get(
                "https://kitsu.io/api/edge/anime?page[limit]=1"
            );
            setAnimeCount(res.data.meta.count);
        }
        getCount();
    }, []);

    return (
        <header className={styles.header}>
            <div className="container">
                <Link href="/">
                    <a className={styles.app_name}>AniGoose</a>
                </Link>
                <div className={styles.links}>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/">
                        <a>About</a>
                    </Link>
                    <Link
                        href="/anime/[id]"
                        as={`/anime/${Math.floor(Math.random() * animeCount)}`}
                    >
                        <a>Random Release</a>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const res = await axios.get(
        "https://kitsu.io/api/edge/anime?page[limit]=1"
    );
    return {
        props: {
            animeCount: res.data.meta.count,
        },
    };
};
