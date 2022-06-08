import 'package:flutter/material.dart';
import 'package:flutter_web_plugins/flutter_web_plugins.dart';
import 'package:url_shortener_frontend/pages/url_shorter.dart';
import 'components/urlshortenerbar.dart';

void main() {
  setUrlStrategy(PathUrlStrategy());
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        title: 'Url Shortener Demo',
        theme: ThemeData(
          backgroundColor: Colors.white,
          primarySwatch: Colors.grey,
        ));
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key}) : super(key: key);

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          Image.asset('lib/assets/logo.png'),
          const SizedBox(height: 70),
          const UrlShortenerBar(),
          const SizedBox(height: 70),
          // ignore: avoid_unnecessary_containers
          Container(child: const Text('HEEI'))
        ],
      ),
    ));
  }
}
