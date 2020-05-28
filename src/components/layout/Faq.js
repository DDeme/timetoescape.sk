import React from 'react'
import LabelText from '../LabelText'
import Card from '../Card'

import { Accordion } from '../Accordion';


const FrequentlyAskedQuetions = [
    {
        question: `Kto môže hrať ?`,
        answer: `Hrať može ktokoľvek. Skupina 2 - 6 hráčov.`,
    },
    {
        question: `Ako sa obliecť ?`,
        answer: `Hrať može ktokoľvek. Skupina 2 - 6 hráčov.`,
    },
    {
        question: `Kto môže hrať ?`,
        answer: `Hrať može ktokoľvek. Skupina 2 - 6 hráčov.`,
    }
]



export const Faq = () => {
    return <section id="faq" className="py-20 lg:py-40">
        <div className="container mx-auto">
            <LabelText className="mb-8 text-gray-600 text-center">Často kladené otázky</LabelText>
            <Card>
                {
                    FrequentlyAskedQuetions.map((props, index) => <Accordion key={index} {...props} index={index} />) 
                }
            </Card>
        </div>
    </section>
}