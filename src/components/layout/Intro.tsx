import React from "react";
import Button from '../Button';


export const Intro = () => <section className="py-20 bg-gray-200">
    <div className="container mx-auto px-8 flex">
        <div className="text-center flex-1">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
                Nezabudnuteľný zážitok
            </h1>
            <p className="text-xl lg:text-2xl mt-6 font-light">
                Zaži dobrodružstvo spolupracuj a unikni.
            </p>
            <p className="mt-8 md:mt-12">
                <Button size="lg">Vstúpiť</Button>
            </p>
        </div>
    </div>
</section>
