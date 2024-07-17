import { Platform } from 'react-native';
import RnIosPersonalVoiceModule from './RnIosPersonalVoiceModule';

const isIos = Platform.OS === 'ios';

/**
 * Request access to personal voices.
 * @returns {Promise<boolean>} - True if access was granted, false otherwise.
 */
export async function requestAccessToPersonalVoices(): Promise<boolean> {
  if (isIos && RnIosPersonalVoiceModule?.requestAccessToPersonalVoices) {
    return await RnIosPersonalVoiceModule.requestAccessToPersonalVoices();
  } else {
    console.warn('requestAccessToPersonalVoices is not available on this platform.');
    return false;
  }
}

/**
 * Check if personal voices are authorized.
 * @returns {Promise<boolean>} - True if personal voices are authorized, false otherwise.
 */
export async function personalVoicesAuthorized(): Promise<boolean> {
  if (isIos && RnIosPersonalVoiceModule?.personalVoicesAuthorized) {
    return await RnIosPersonalVoiceModule.personalVoicesAuthorized();
  } else {
    console.warn('personalVoicesAuthorized is not available on this platform.');
    return false;
  }
}

/** 
 * Check if personal voices are not authorized.
 * @returns {Promise<boolean>} - True if personal voices are not authorized, false otherwise.
 */
export async function personalVoicesNotAuthorized(): Promise<boolean> {
  if (isIos && RnIosPersonalVoiceModule?.personalVoicesNotAuthorized) {
    return await RnIosPersonalVoiceModule.personalVoicesNotAuthorized();
  } else {
    console.warn('personalVoicesNotAuthorized is not available on this platform.');
    return true;
  }
}

/**
 * Check if the device does not support personal voices.
 * @returns {Promise<boolean>} - True if the device does not support personal voices, false otherwise.
 */
export async function deviceDoesNotSupportPersonalVoices(): Promise<boolean> {
  if (isIos && RnIosPersonalVoiceModule?.deviceDoesNotSupportPersonalVoices) {
    return await RnIosPersonalVoiceModule.deviceDoesNotSupportPersonalVoices();
  } else {
    console.warn('deviceDoesNotSupportPersonalVoices is not available on this platform.');
    return true;
  }
}

/**
 * Check if the device does not allow personal voices.
 * @returns {Promise<boolean>} - True if the device does not allow personal voices, false otherwise.
 */
export async function deviceDoesNotAllowPersonalVoices(): Promise<boolean> {
  if (isIos && RnIosPersonalVoiceModule?.deviceDoesNotAllowPersonalVoices) {
    return await RnIosPersonalVoiceModule.deviceDoesNotAllowPersonalVoices();
  } else {
    console.warn('deviceDoesNotAllowPersonalVoices is not available on this platform.');
    return true;
  }
}

/**
 * Check if a voice is a personal voice.
 * @param {string} voice - The voice to check.
 * @returns {Promise<boolean>} - True if the voice is a personal voice, false otherwise.
 */
export async function isPersonalVoice(voice: string): Promise<boolean> {
  if (isIos && RnIosPersonalVoiceModule?.isPersonalVoice) {
    return await RnIosPersonalVoiceModule.isPersonalVoice(voice);
  } else {
    console.warn('isPersonalVoice is not available on this platform.');
    return false;
  }
}

/**
 * Get a list of personal voices.
 * @returns {Promise<string[]>} - A list of personal voices.
 */
export async function getPersonalVoices(): Promise<string[]> {
  if (isIos && RnIosPersonalVoiceModule?.getPersonalVoices) {
    return await RnIosPersonalVoiceModule.getPersonalVoices();
  } else {
    console.warn('getPersonalVoices is not available on this platform.');
    return ["not_supported"];
  }
}

/**
 * Speak a personal voice.
 * @param {string} text - The text to speak.
 * @param {string} voice - The voice to use.
 * @param {number} pitch - The pitch to use.
 * @param {number} rate - The rate to use.
 */
export function speakPersonalVoice(text: string, voice: string, pitch: number, rate: number) {
  if (isIos && RnIosPersonalVoiceModule?.speakPersonalVoice) {
    RnIosPersonalVoiceModule.speakPersonalVoice(text, voice, pitch, rate);
  } else {
    console.warn('speakPersonalVoice is not available on this platform.');
  }
}

/**
 * Stop speaking a personal voice.
 */
export function stopSpeakingPersonalVoice() {
  if (isIos && RnIosPersonalVoiceModule?.stopSpeakingPersonalVoice) {
    RnIosPersonalVoiceModule.stopSpeakingPersonalVoice();
  } else {
    console.warn('stopSpeakingPersonalVoice is not available on this platform.');
  }
}

/**
 * Check if a personal voice is speaking.
 * @returns {Promise<boolean>} - True if a personal voice is speaking, false otherwise.
 */
export async function isSpeakingPersonalVoice(): Promise<boolean> {
  if (isIos && RnIosPersonalVoiceModule?.isSpeakingPersonalVoice) {
    return await RnIosPersonalVoiceModule.isSpeakingPersonalVoice();
  } else {
    console.warn('isSpeakingPersonalVoice is not available on this platform.');
    return false;
  }
}