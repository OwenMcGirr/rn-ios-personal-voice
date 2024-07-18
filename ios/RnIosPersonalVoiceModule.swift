import ExpoModulesCore
import AVFoundation

public class RnIosPersonalVoiceModule: Module {
  private let synthesizer = AVSpeechSynthesizer()

  public func definition() -> ModuleDefinition {
    Name("RnIosPersonalVoice")

    AsyncFunction("requestAccessToPersonalVoices") { (promise: Promise) in
      if #available(iOS 17.0, *) {
        AVSpeechSynthesizer.requestPersonalVoiceAuthorization { status in
          if status == .authorized {
            print("Personal voices access granted")
            promise.resolve(true)
          } else {
            print("Personal voices access denied")
            promise.resolve(false)
          }
        }
      }
    }

    AsyncFunction("personalVoicesAuthorized") { (promise: Promise) in
      if #available(iOS 17.0, *) {
        let status = AVSpeechSynthesizer.personalVoiceAuthorizationStatus
        promise.resolve(status == .authorized)
      } else {
        promise.resolve(false)
      }
    }

    AsyncFunction("personalVoicesNotAuthorized") { (promise: Promise) in
      if #available(iOS 17.0, *) {
        let status = AVSpeechSynthesizer.personalVoiceAuthorizationStatus
        promise.resolve(status == .notDetermined)
      } else {
        promise.resolve(true)
      }
    }

    AsyncFunction("deviceDoesNotSupportPersonalVoices") { (promise: Promise) in
      if #available(iOS 17.0, *) {
        let status = AVSpeechSynthesizer.personalVoiceAuthorizationStatus
        promise.resolve(status == .unsupported)
      } else {
        promise.resolve(true)
      }
    }

    AsyncFunction("deviceDoesNotAllowPersonalVoices") { (promise: Promise) in
      if #available(iOS 17.0, *) {
        let status = AVSpeechSynthesizer.personalVoiceAuthorizationStatus
        promise.resolve(status == .denied)
      } else {
        promise.resolve(true)
      }
    }

    AsyncFunction("isPersonalVoice") { (voice: String, promise: Promise) in
      if #available(iOS 17.0, *) {
        let voice = AVSpeechSynthesisVoice.speechVoices().first { $0.name == voice }
        promise.resolve(voice?.voiceTraits.contains(.isPersonalVoice) ?? false)
      } else {
        promise.resolve(false)
      }
    }

    AsyncFunction("getPersonalVoices") { (promise: Promise) in
      if #available(iOS 17.0, *) {
        let status = AVSpeechSynthesizer.personalVoiceAuthorizationStatus
        if status == .authorized {
          let personalVoices = AVSpeechSynthesisVoice.speechVoices().filter { $0.voiceTraits.contains(.isPersonalVoice) }.map { $0.name }
          promise.resolve(personalVoices)
        } else {
          promise.resolve(["authorization_required"])
        }
      } else {
        promise.resolve(["not_supported"])
      }
    }

    Function("speakPersonalVoice") { (text: String, voice: String, pitch: Float32, rate: Float32) in
      if #available(iOS 17.0, *) {
        let voice = AVSpeechSynthesisVoice.speechVoices().first { $0.name == voice }
        if let voice = voice {
          let utterance = AVSpeechUtterance(string: text)
          utterance.voice = voice
          utterance.pitchMultiplier = pitch
          utterance.rate = rate
          synthesizer.speak(utterance)
        }
      }
    }

    Function("stopSpeakingPersonalVoice") {
      synthesizer.stopSpeaking(at: .immediate)
    }

    AsyncFunction("isSpeakingPersonalVoice") { (promise: Promise) in
      promise.resolve(synthesizer.isSpeaking)
    }
  }
}
