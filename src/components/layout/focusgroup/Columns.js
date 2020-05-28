
import { React } from 'react';
import Card from '../../Card';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faRoute, faGift, faUserFriends } from "@fortawesome/free-solid-svg-icons";

const Groups = [
    {
        heading: 'Teambuilding',
        description: 'Akonáhle sa začne odpočítavanie, je to všetko o spolupráci a komunikácií.',
        icon: faBuilding,
      },
    {
        heading: 'Priateľov a rodinu',
        description: 'Ak vaši priatelia nemajú čas, príďte s rodinou! Či tak alebo onak, určite sa zasmejete a zistíte, kto je v čom lepší.',
        icon: faUserFriends,
      },
    {
        heading: 'Turistov',
        description: 'Spiš má pekné miesta k videniu, ale ak hľadáte niečo neobvyklé ESCAPE ROOM je tu.',
        icon: faRoute,
      },
    {
        heading: 'Oslavy',
        description: 'Narodeniny, stretávky zo školy, návšteva…alebo možno je to len piatok. My sme vždy hľadali dôvod oslavovať.',
        icon: faGift,
      }
]


export const Columns = () => (
  <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12 text-center">
           {Groups.map(({ heading, description , icon }, index) => (
             <div className="flex-1 px-3" key={index}>
               <Card className="mb-8 p-12 h-full">
                 <div className="text-6xl text-center mb-6">
                 <FontAwesomeIcon icon={icon} fixedWidth />
                </div>
                 <p className="font-semibold text-xl">{heading}</p>
                 <p className="mt-6">{description}</p>
               </Card>
             </div>
           ))}
         </div>
       )

