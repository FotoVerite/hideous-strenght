import descartesAvatar from 'assets/images/discord/avatars/descartes_icon.png';
import fotoAvatar from 'assets/images/discord/avatars/fotoveriteNormal.png';
import caturday from 'assets/images/discord/pasted/caturday.png';

import {
  makeExchangeFunction,
  makeTextOnlyExchangeFunction,
} from '../Exchanges/utility';

const hungoverDate = '5/24/2020';

const descartesExchange = makeTextOnlyExchangeFunction(
  'Descartes',
  descartesAvatar,
  hungoverDate,
);
const descartesExchangeFull = makeExchangeFunction(
  'Descartes',
  descartesAvatar,
  hungoverDate,
);

const self = makeTextOnlyExchangeFunction(
  'Fotoverite',
  fotoAvatar,
  hungoverDate,
);

const penTestDiscussion = '5/27/2020';
const petersonConvo = '7/21/2020';

export const descartes = {
  name: 'Descartes',
  avatar: descartesAvatar,
  exchanges: [
    self([], '2020-5-23'),
    descartesExchangeFull([
      {type: 'text', content: 'Happy Caturday'},
      {type: 'image', content: caturday, options: {aspect: 1}},
    ]),
    self(['🤷 ']),
    descartesExchange(['Still hungover?']),
    self([
      "yeaaah. I'm mostly just exhausted.",
      'You always talk me into three more bourbons then is good anyone',
    ]),
    descartesExchange([
      'Bourbons are good for the soul.',
      "But I'll let you get rye next time.",
    ]),
    self([], '2020-5-27'),
    self(
      ['You never finished up how the penetration test turned out.'],
      penTestDiscussion,
    ),
    descartesExchange(
      [
        "I don't know the whole thing is pretty boring. By the books for the most part. What a normie has to gain from hearing about it seems to be nothing more the a visceral feel of the forbidden. Especially for an Esquire like yourself. So prim and proper. ",
      ],
      penTestDiscussion,
    ),
    self(
      [
        'Everytime you use that to describe my job, I roll my eyes up even higher.',
      ],
      penTestDiscussion,
    ),
    descartesExchange(
      ['An yet it is a perfectly cromulate word in this situation.'],
      penTestDiscussion,
    ),
    self(
      [
        'Yes yes, and my ability to preserver in the face of your nonsense embiggens my soul. Still, dish.',
      ],
      penTestDiscussion,
    ),
    descartesExchange(
      [
        "It's honestly very anticlimactic. Like most security flaws it was people that were the achilles heel.",
      ],
      penTestDiscussion,
    ),
    self(['Listening'], penTestDiscussion),
    descartesExchange(
      [
        "I was able to find a few subdomains that had logins, a few servers that we're for some reason in the year of our lord 2020 still using ssh with plaintext passwords for logins.",
        'And a bits and bobbins of other vectors I could exploit, but nothing egregious. Till I recognized what someone had called the server in one of forums I was able to gain access to; get this, `pokemon`.',
      ],
      penTestDiscussion,
    ),
    self(
      ['Nooooo... Really, you were able to guess the password?'],
      penTestDiscussion,
    ),
    descartesExchange(
      [
        'Yup, fifth time. Of course I first tried pikachu/pikachu1997',
        'Turns out whoever setup the server really simps for mistywilliams',
      ],
      penTestDiscussion,
    ),
    self(
      [
        'The password was mistywilliams?',
        'That seems very insecure',
        'What next security questions about home towns to reset the ceo login?',
      ],
      penTestDiscussion,
    ),
    descartesExchange(
      [
        'I know, at least nothing that bad.',
        "I hadn't even rolled my own rainbow table yet with all the pokemon terms I could think of to try and brute force it.",
        'Guessing like it was some dumb visual novel.',
      ],
      penTestDiscussion,
    ),
    self(['This does not seem boring.'], penTestDiscussion),
    descartesExchange(
      [
        "No but I feel bad for the guy if he's still around. Cause his ass is fried.",
        'Of course thats more upper management to blame for not having a clear security guidance.',
      ],
      penTestDiscussion,
    ),
    descartesExchange(
      [
        'Bruv, you need to listen to this old episode between Joe Rogan and Peterson.',
      ],
      petersonConvo,
    ),
    self(
      ["No, no I don't. Nothing about that sentence sparks joy."],
      petersonConvo,
    ),
    descartesExchange(
      ['Give him a chance. Joe is a great interviewer.'],
      petersonConvo,
    ),
    self(
      [
        "Yes, I've been told that. I've yet to see anything to substantiate that claim. He mostly just mouth along to transphobic arguments.",
        "We've had this discussion. He seems like a himbo without a thought in his brain.",
        "Peterson is just a run of a mil transphobic asshole whole I don't fuck with",
      ],
      petersonConvo,
    ),
    descartesExchange(
      [
        'I think you are being willfully ignorant of some of the fantastic stuff he brings up both in terms of energy consumption and politics through the lens storytelling.',
        'You are the one who reads anthropology books for fun.',
      ],
      petersonConvo,
    ),
    self(
      [
        'Yes, and all with a thin layer of trans-women are just men with a hardon with imagining themselves with a vagina',
        "Half of his arguments boil down to autogynephilia===bad/they're sexual deviates. For such a smart man he is incredibly broken.",
        "Anything he says of value I can find somewhere else who isn't going to be throwing shit while spouting off mealy mouth virtue.",
      ],
      petersonConvo,
    ),
    descartesExchange(
      ["You don't grow if you only listen to people who make you happy."],
      petersonConvo,
    ),
    self(
      [
        'Yes, but I should find them fulfilling.',
        'Some days It seems you read contrarian for the sake of contrarian',
      ],
      petersonConvo,
    ),
    descartesExchange(
      ['I want to be challenged.', 'We talked about this before.'],
      petersonConvo,
    ),

    self(['You could watch Virgil Texas', '😂'], petersonConvo),
    descartesExchange(
      ['I think we rather both drink from piss christ before doing that.'],
      petersonConvo,
    ),
    self(['Truth'], petersonConvo),
  ],
};
