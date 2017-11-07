vi ~/.profile

brew tap caskroom/cask
brew cask install caskroom/versions/java8
https://developer.android.com/studio/index.html#mac-bundle

ANDROID_STUDIO:


brew upgrade
brew install ruby
brew upgrade && brew install gradle

brew install yarn
brew install npm
npm install -g react-native-cli

react-native run-android

adb devices

SYS_VARS:

export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/platform-tools
export JAVA_HOME=$(/usr/libexec/java_home)


distributionUrl=https\://services.gradle.org/distributions/gradle-3.5-all.zip

// AndroidManifest.xml

  <uses-permission android:name="android.permission.RECORD_AUDIO"/>
  <uses-permission android:name="android.permission.RECORD_VIDEO"/>
  <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
  <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
