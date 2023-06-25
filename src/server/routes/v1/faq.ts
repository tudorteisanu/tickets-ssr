import { FaqInterface } from '@/pages/faq/types/faq.interface';
import { defineEventHandler } from 'h3';


const FAQS: FaqInterface[] = [
    {
        question: 'What is TicketBooker?',
        answer: 'Lorem ipsum dolor sit amet consectetur. Risus id dolor vel metus ornare amet. In faucibus pellentesque gravida platea augue et sit. Consequat pharetra odio lorem dignissim. Nam ut praesent dignissim eget pharetra morbi.'
    },
    {
        question: 'What kind of tickets can I buy?',
        answer: 'Lorem ipsum dolor sit amet consectetur. Risus id dolor vel metus ornare amet. In faucibus pellentesque gravida platea augue et sit. Consequat pharetra odio lorem dignissim. Nam ut praesent dignissim eget pharetra morbi.'
    },
    {
        question: 'Is there a return policy?',
        answer: 'Lorem ipsum dolor sit amet consectetur. Risus id dolor vel metus ornare amet. In faucibus pellentesque gravida platea augue et sit. Consequat pharetra odio lorem dignissim. Nam ut praesent dignissim eget pharetra morbi.'
    },
    {
        question: 'Question #4',
        answer: 'Lorem ipsum dolor sit amet consectetur. Risus id dolor vel metus ornare amet. In faucibus pellentesque gravida platea augue et sit. Consequat pharetra odio lorem dignissim. Nam ut praesent dignissim eget pharetra morbi.'
    },
    {
        question: 'Question #5',
        answer: 'Lorem ipsum dolor sit amet consectetur. Risus id dolor vel metus ornare amet. In faucibus pellentesque gravida platea augue et sit. Consequat pharetra odio lorem dignissim. Nam ut praesent dignissim eget pharetra morbi.'
    },
    {
        question: 'Question #6',
        answer: 'Lorem ipsum dolor sit amet consectetur. Risus id dolor vel metus ornare amet. In faucibus pellentesque gravida platea augue et sit. Consequat pharetra odio lorem dignissim. Nam ut praesent dignissim eget pharetra morbi.'
    },
    {
        question: 'Question #7',
        answer: 'Lorem ipsum dolor sit amet consectetur. Risus id dolor vel metus ornare amet. In faucibus pellentesque gravida platea augue et sit. Consequat pharetra odio lorem dignissim. Nam ut praesent dignissim eget pharetra morbi.'
    },
    {
        question: 'Question #8',
        answer: 'Lorem ipsum dolor sit amet consectetur. Risus id dolor vel metus ornare amet. In faucibus pellentesque gravida platea augue et sit. Consequat pharetra odio lorem dignissim. Nam ut praesent dignissim eget pharetra morbi.'
    },
    {
        question: 'Question #9',
        answer: 'Lorem ipsum dolor sit amet consectetur. Risus id dolor vel metus ornare amet. In faucibus pellentesque gravida platea augue et sit. Consequat pharetra odio lorem dignissim. Nam ut praesent dignissim eget pharetra morbi.'
    },
    {
        question: 'Question #10',
        answer: 'Lorem ipsum dolor sit amet consectetur. Risus id dolor vel metus ornare amet. In faucibus pellentesque gravida platea augue et sit. Consequat pharetra odio lorem dignissim. Nam ut praesent dignissim eget pharetra morbi.'
    },
    {
        question: 'Question #11',
        answer: 'Lorem ipsum dolor sit amet consectetur. Risus id dolor vel metus ornare amet. In faucibus pellentesque gravida platea augue et sit. Consequat pharetra odio lorem dignissim. Nam ut praesent dignissim eget pharetra morbi.'
    },
];


export default defineEventHandler(() => FAQS);
