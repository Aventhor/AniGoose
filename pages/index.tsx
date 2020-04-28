import React from "react";
import Head from "next/head";
import axios from "axios";
import AnimeCard from "../components/anime-card/anime-card";

import { GetServerSideProps } from "next";

export default function Index({ animeList }: any) {
    return (
        <>
            <Head>
                <title>AniGoose</title>
            </Head>
            <div className="container anime-list">
                <div className="row">
                    {animeList.map((anime) => {
                        return <AnimeCard key={anime.id} anime={anime} />;
                    })}
                </div>
            </div>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const res = await axios.get(
        "https://kitsu.io/api/edge/anime?seasonYear=2020"
    );
    return {
        props: {
            animeList: res.data.data,
        },
    };
};
