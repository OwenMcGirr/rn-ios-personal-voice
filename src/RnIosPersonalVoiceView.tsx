import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { RnIosPersonalVoiceViewProps } from './RnIosPersonalVoice.types';

const NativeView: React.ComponentType<RnIosPersonalVoiceViewProps> =
  requireNativeViewManager('RnIosPersonalVoice');

export default function RnIosPersonalVoiceView(props: RnIosPersonalVoiceViewProps) {
  return <NativeView {...props} />;
}
