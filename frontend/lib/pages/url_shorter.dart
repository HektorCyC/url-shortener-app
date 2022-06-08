import 'package:flutter/material.dart';
import 'package:qlevar_router/qlevar_router.dart';
import 'package:url_shortener_frontend/services/http-client.dart';

class UrlShorterPage extends StatefulWidget {
  const UrlShorterPage({Key? key}) : super(key: key);

  @override
  State<UrlShorterPage> createState() => _UrlShorterPageState();
}

class _UrlShorterPageState extends State<UrlShorterPage> {
  final String urlId = QR.params['urlId'].toString();
  @override
  void initState() {
    super.initState();
    asyncMethod();
  }

  void asyncMethod() async {
    await HttpServices.fetchUrl(urlId);
  }

  @override
  Widget build(BuildContext context) {
    print(urlId);
    return Scaffold(
      body: Column(
        children: const [Center(child: Text('GEKKI'))],
      ),
    );
  }
}
