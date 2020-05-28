import React from 'react'
import Button from '../Button'


const OutroData = {
    title: `Pripravený na dobrodružstvo ?`,
    description: ``,
    buttonText: `Vstúpiť ihneď`,
    buttonHref: ``,
}




export const Outro = () => (
         <section className="mt-20 py-24 bg-gray-200 rounded-lg text-center">
           <div className="container mx-auto">
             <h3 className="text-5xl font-semibold">{OutroData.title}</h3>
             <p className="mt-8 text-xl font-light">{OutroData.description}</p>
               <Button className="mt-8"  size="xl">
                 {OutroData.buttonText}
               </Button>
           </div>
         </section>
       );


