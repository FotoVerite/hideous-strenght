import fotoAvatar from 'assets/images/discord/avatars/fotoveriteNormal.png';
import execuspeakAvatar from 'assets/images/discord/avatars/execuspeak.png';
import legoMySoulAvatar from 'assets/images/discord/avatars/legomysoul.png';
import descartesAvatar from 'assets/images/discord/avatars/descartes_icon.png';
import bcaAvatar from 'assets/images/discord/avatars/bca_icon.png';

import {makeTextOnlyExchangeFunction} from 'components/Discord/Exchanges/utility';

const SimulationTheoryChat = '7/15/2021';

const self = makeTextOnlyExchangeFunction(
  'Fotoverite',
  fotoAvatar,
  SimulationTheoryChat,
);

const execuExchange = makeTextOnlyExchangeFunction(
  'ExecuSpeak',
  execuspeakAvatar,
  SimulationTheoryChat,
);

const descartesExchange = makeTextOnlyExchangeFunction(
  'Descartes',
  descartesAvatar,
  SimulationTheoryChat,
);

const legoMySoulExchange = makeTextOnlyExchangeFunction(
  'legoMySoul',
  legoMySoulAvatar,
  SimulationTheoryChat,
);

const bccExchange = makeTextOnlyExchangeFunction(
  'BCA',
  bcaAvatar,
  SimulationTheoryChat,
);

export const SimulationTheory = [
  self([], '2021-7-15'),

  execuExchange([
    'Someone apparently used a Minecraft cpu to create a machine such that you can play Minecraft within Minecraft ',
  ]),
  bccExchange(["and people still argue we aren't living in a simulation lol"]),
  self(['@_@']),
  bccExchange([
    'lmao',
    'that was more of a statement than an argument but you get comedic timing points',
    "the best argument against it is pretty much occam's razor but there is a lot of evidence for simulation theory",
  ]),
  legoMySoulExchange([
    'Maybe we should resurrect the podcast to debate @fotoverite',
  ]),
  self([
    "No interest. @Descartes you want to deal with this shit since they're besmirching your namesake?",
  ]),
  descartesExchange(['Yawn, do I have to?', '@BCA Occam.']),
  bccExchange([
    'one argument is the planck length/planck time',
    "the universe is not actually continuous, it's just discrete at a level we can't perceive normally",
  ]),
  descartesExchange(['And have we proven this?']),
  self(['Maybe we should rename you socrates.']),
  descartesExchange([
    "I don't use the socratic method that often. It's just somebody want to pretend this is all a dream.",
  ]),

  bccExchange([
    "i'm not good at higher level physics but i can look into that",
    "we don't have a grand unifying theory so i guess one can say it isn't `proven` but my guess is there is experimental evidence",
    'another good piece of evidence is the quantum physics relationship between reality and the observer',
    "if you were writing a simulated world, would you render anything that isn't being observed or interacting with other elements? no, to save computation power",
  ]),
  self(["There's no way for there not to be a relationship"]),
  bccExchange([
    "but then once it's observed you would have to start rendering it",
  ]),
  descartesExchange([
    'Yes yes, double slit experiment. How would you see change without observing it?',
  ]),
  bccExchange([
    `the experiments show that the universe literally doesn't decide the state of something until it's observed
`,
  ]),
  descartesExchange(['But there are other explanations']),
  bccExchange([
    "i know i'm just giving an example",
    "not to make you type too much on your phone but i'm curious what other explanation can exist that actually makes practical sense",
    'the other arguments i\'ve heard seem to boil down to "reality doesn\'t work in an intuitive way" which is unsatisfying',
    'not that you\'re saying this, but "there can\'t be a grand unifying theory because humans are too limited"',
    "stuff like that. those things are not real arguments they're just excuses to give up and stop discussing",
  ]),
  self([
    `The act of measuring condenses the wave. Like water. 
I don't buy this. But this doesn't destroy reality either
Without the probe there enough give for the light to just pass through without gloving `,
    'Globbing up',
    'We can both know which slit and keep the pattern to a limited extent.',
    `unsharp particle-wave duality in a photon split-beam experiment"`,
  ]),
  descartesExchange([
    'Why is it you always are the one to have an actual experiment to link to?',
  ]),
  self(['My dude, my job is half research']),
  execuExchange([
    'I drank four coffees and doubledosed my Ritalin and gave  myself palpitations ',
  ]),
  descartesExchange(['Why do you do that to your self?']),
];
