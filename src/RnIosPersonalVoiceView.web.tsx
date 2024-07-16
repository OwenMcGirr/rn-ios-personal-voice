import * as React from 'react';

import { RnIosPersonalVoiceViewProps } from './RnIosPersonalVoice.types';

export default function RnIosPersonalVoiceView(props: RnIosPersonalVoiceViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
