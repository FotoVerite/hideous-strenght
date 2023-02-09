import fotoAvatar from 'assets/images/discord/avatars/fotoveriteNormal.png';
import execuspeakAvatar from 'assets/images/discord/avatars/execuspeak.png';
import legoMySoulAvatar from 'assets/images/discord/avatars/legomysoul.png';
import descartesAvatar from 'assets/images/discord/avatars/descartes_icon.png';
import bcaAvatar from 'assets/images/discord/avatars/bca_icon.png';

import {makeTextOnlyExchangeFunction} from 'components/Discord/Exchanges/utility';

const AIChat = '9/20/2022';

const self = makeTextOnlyExchangeFunction('Fotoverite', fotoAvatar, AIChat);

const execuExchange = makeTextOnlyExchangeFunction(
  'ExecuSpeak',
  execuspeakAvatar,
  AIChat,
);

const descartesExchange = makeTextOnlyExchangeFunction(
  'Descartes',
  descartesAvatar,
  AIChat,
);

const legoMySoulExchange = makeTextOnlyExchangeFunction(
  'legoMySoul',
  legoMySoulAvatar,
  AIChat,
);

const bccExchange = makeTextOnlyExchangeFunction('BCA', bcaAvatar, AIChat);

export const WhatIsAI = [
  self([], '2022-9-20'),
  descartesExchange(["It's pure theft I tell you."]),
  self(['This is very much not your normal spiel.']),
  descartesExchange(["I've found my work in the dataset"]),
  legoMySoulExchange(["You?! You're on deviant art."]),
  descartesExchange(['Haruka And Michiru forever.']),
  self([
    '...I think we speak for everyone when we say we have no idea who the fuck those people are.',
  ]),
  descartesExchange([
    'Philistines, no regards to for the classic. Am I the only one who watched sailor moon.',
  ]),
  legoMySoulExchange([
    'It only took four years of knowing you for the mystique to finally dissolve @descartes',
  ]),
];
