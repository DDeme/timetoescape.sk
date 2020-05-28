import { React } from 'react';
import Button from '../Button';
// import { Room } from '../../svg/Room';

export const Intro = () => <section className="pt-20 md:pt-30">
    <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
                Nezabudnuteľný zážitok
            </h1>
            <p className="text-xl lg:text-2xl mt-6 font-light">
                Zaži dobrodružstvo spolupracuj a unikni.
            </p>
            <p className="mt-8 md:mt-12">
                <Button size="lg">Vstúpiť</Button>
            </p>
            {/* <p className="mt-4 text-gray-600">Sed fermentum felis ut cursu</p> */}
        </div>
        <div className="lg:w-1/2">
             {/* <Room /> */}
        </div>
    </div>
</section>
