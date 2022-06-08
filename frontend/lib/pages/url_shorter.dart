import 'package:flutter/material.dart';

class UrlShorterPage extends StatefulWidget {
  const UrlShorterPage({Key? key}) : super(key: key);

  @override
  State<UrlShorterPage> createState() => _UrlShorterPageState();
}

class _UrlShorterPageState extends State<UrlShorterPage> {
  @override
  Widget build(BuildContext context) {
    String myurl = Uri.base.toString(); //get complete url
    print(myurl);

    return Scaffold(
      body: Column(
        children: const [Center(child: Text('HI'))],
      ),
    );
  }
}
