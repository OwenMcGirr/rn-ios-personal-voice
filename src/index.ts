import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to RnIosPersonalVoice.web.ts
// and on native platforms to RnIosPersonalVoice.ts
import RnIosPersonalVoiceModule from './RnIosPersonalVoiceModule';
import RnIosPersonalVoiceView from './RnIosPersonalVoiceView';
import { ChangeEventPayload, RnIosPersonalVoiceViewProps } from './RnIosPersonalVoice.types';

// Get the native constant value.
export const PI = RnIosPersonalVoiceModule.PI;

export function hello(): string {
  return RnIosPersonalVoiceModule.hello();
}

export async function setValueAsync(value: string) {
  return await RnIosPersonalVoiceModule.setValueAsync(value);
}

const emitter = new EventEmitter(RnIosPersonalVoiceModule ?? NativeModulesProxy.RnIosPersonalVoice);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { RnIosPersonalVoiceView, RnIosPersonalVoiceViewProps, ChangeEventPayload };
