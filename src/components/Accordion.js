import { React } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

export const Accordion = ({question, answer, index}) => <div className="w-full leading-normal">
    <div className={`text-gray-900 font-bold text-xl border-gray-200 border-b-2 px-6 py-3 ${index !== 0 ? 'border-t-2' : ''}`}>
        {question}
        <FontAwesomeIcon icon={faChevronUp} className="float-right h-full" />
    </div>
    <p className="text-gray-700 text-base px-6 py-3">{answer}</p>
</div> 