import { Bold, Code, H1, H2, P, Quote } from '../../components/Typography';
import { FlatList, Image, Text } from 'react-native';
import { PageContainer } from '../../components/Containers';
import React from 'react';

const GetStarted = () => {
  return (
    <PageContainer>
      <H1>Getting Started</H1>
      <P>
        This page will help you install and build your first React Native app.
        If you already have React Native installed, you can skip ahead to the
        Tutorial.
      </P>
      <P>
        <Bold>If you are coming from a web background</Bold>, the easiest way to
        get started with React Native is with Expo tools because they allow you
        to start a project without installing and configuring Xcode or Android
        Studio. Expo CLI sets up a development environment on your local machine
        and you can be writing a React Native app within minutes. For instant
        development, you can use Snack to try React Native out directly in your
        web browser.
      </P>
      <P>
        <Bold>If you are familiar with native development</Bold>, you will
        likely want to use React Native CLI. It requires Xcode or Android Studio
        to get started. If you already have one of these tools installed, you
        should be able to get up and running within a few minutes. If they are
        not installed, you should expect to spend about an hour installing and
        configuring them.
      </P>
      <P>
        Follow these instructions if you need to build native code in your
        project. For example, if you are integrating React Native into an
        existing application, or if you "ejected" from Expo or Create React
        Native App, you'll need this section.
      </P>
      <P>
        The instructions are a bit different depending on your development
        operating system, and whether you want to start developing for iOS or
        Android. If you want to develop for both iOS and Android, that's fine -
        you just have to pick one to start with, since the setup is a bit
        different.
      </P>
      <H1>Installing dependencies</H1>
      <P>
        You will need Node, Watchman, the React Native command line interface,
        and Xcode.
      </P>
      <P>
        While you can use any editor of your choice to develop your app, you
        will need to install Xcode in order to set up the necessary tooling to
        build your React Native app for iOS.
      </P>
      <H2>Node, Watchman</H2>
      <P>
        We recommend installing Node and Watchman using Homebrew. Run the
        following commands in a Terminal after installing Homebrew:
      </P>
      <Code lan="bash">{`brew install node\nbrew install watchman`}</Code>
      <P>
        If you have already installed Node on your system, make sure it is Node
        8.3 or newer.
      </P>
      <P>
        Watchman is a tool by Facebook for watching changes in the filesystem.
        It is highly recommended you install it for better performance.{' '}
      </P>
      <H2>The React Native CLI</H2>
      <P>
        Node comes with npm, which lets you install the React Native command
        line interface.
      </P>
      <P>Run the following command in a Terminal</P>
      <Code lan="bash">npm install -g react-native-cli</Code>
      <Quote>
        If you get an error like Cannot find module 'npmlog', try installing npm
        directly: curl -0 -L https://npmjs.org/install.sh | sudo sh.
      </Quote>
      <H2>Xcode</H2>
      <P>
        The easiest way to install Xcode is via the Mac App Store. Installing
        Xcode will also install the iOS Simulator and all the necessary tools to
        build your iOS app.
      </P>
      <P>
        If you have already installed Xcode on your system, make sure it is
        version 9.4 or newer.
      </P>
      <H2>Command Line Tools</H2>
      <P>
        You will also need to install the Xcode Command Line Tools. Open Xcode,
        then choose "Preferences..." from the Xcode menu. Go to the Locations
        panel and install the tools by selecting the most recent version in the
        Command Line Tools dropdown.
      </P>
      <Image
        style={{ width: 350, flex: 1, height: 220 }}
        source={require('../../assets/img/GettingStartedXcodeCommandLineTools.png')}
      />
      <H1>Creating a new application</H1>
      <P>
        Use the React Native command line interface to generate a new React
        Native project called "AwesomeProject":
      </P>
      <Code lan="bash">react-native init AwesomeProject</Code>
      <P>
        This is not necessary if you are integrating React Native into an
        existing application, if you "ejected" from Expo (or Create React Native
        App), or if you're adding iOS support to an existing React Native
        project (see Platform Specific Code). You can also use a third-party CLI
        to init your React Native app, such as Ignite CLI.
      </P>
      <H2>[Optional] Using a specific version</H2>
      <P>
        If you want to start a new project with a specifc React Native version,
        you can use the --version argument:
      </P>
      <Code lan="bash">react-native init AwesomeProject --version X.XX.X</Code>
      <Code lan="bash">
        react-native init AwesomeProject --version react-native@next
      </Code>
      <H1>Running your React Native application</H1>
      <P>Run react-native run-ios inside your React Native project folder:</P>
      <Code lan="bash">{`cd AwesomeProject\nreact-native run-ios`}</Code>
      <P>You should see your new app running in the iOS Simulator shortly.</P>
      <Image
        style={{ width: 350, flex: 1 }}
        source={require('../../assets/img/GettingStartediOSSuccess.png')}
      />
      <P>
        react-native run-ios is just one way to run your app. You can also run
        it directly from within Xcode or Nuclide.
      </P>
      <Quote>
        If you can't get this to work, see the Troubleshooting page.
      </Quote>
      <H2>Running on a device</H2>
      <P>
        The above command will automatically run your app on the iOS Simulator
        by default. If you want to run the app on an actual physical iOS device,
        please follow the instructions here.
      </P>
      <H2>Modifying your app</H2>
      <P>Now that you have successfully run the app, let's modify it.</P>
      <P>* Open App.js in your text editor of choice and edit some lines.</P>
      <P>
        * Hit ⌘R in your iOS Simulator to reload the app and see your changes!
      </P>
      <H2>That's it!</H2>
      <P>
        Congratulations! You've successfully run and modified your first React
        Native app.
      </P>
      <H1>Now what?</H1>
      <P>
        Turn on Live Reload in the Developer Menu. Your app will now reload
        automatically whenever you save any changes!
      </P>
      <P>
        If you want to add this new React Native code to an existing
        application, check out the Integration guide.
      </P>
      <P>
        If you're curious to learn more about React Native, continue on to the
        Tutorial.
      </P>
    </PageContainer>
  );
};

export default GetStarted;
