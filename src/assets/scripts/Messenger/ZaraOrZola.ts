import {ScriptType} from 'components/utility/SubtitleContainer/context/SubtitleContext';
import {ScriptConstants} from '../ScriptConstants';

const WhatHappened: ScriptType = {
  name: `What happened to this phone?`,
  subtitles: [
    {
      name: 'Zara',
      color: ScriptConstants.colors.zara,
      text: [`What did you do?`],
    },

    {
      name: 'Scott',
      color: ScriptConstants.colors.scott,
      text: [`Nothing.`, `I clicked on a memo`],
    },
    {
      name: 'Zara',
      color: ScriptConstants.colors.zara,
      text: [`Well you obviously did something.`],
    },
    {
      name: 'Scott',
      color: ScriptConstants.colors.scott,
      text: [`Zara, something is really wrong with this phone.`],
    },
    {
      name: 'Zara',
      color: ScriptConstants.colors.zara,
      text: [`I haven't noticed.`],
    },
    {
      name: 'Scott',
      color: ScriptConstants.colors.scott,
      text: [`Sarcasm noticed.`],
    },
    {
      name: 'Zara',
      color: ScriptConstants.colors.zara,
      text: [`We probably should stop.`],
    },
    {
      name: 'Scott',
      color: ScriptConstants.colors.scott,
      text: [`Yeah`, `we should`],
    },
  ],
};

export default WhatHappened;
